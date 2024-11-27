// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// OpenZeppelinの初期化可能なコントラクトとアクセス制御のインポート
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// ERC20インターフェースのインポート
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Reclaimインターフェースのインポート
import "./IReclaim.sol";

// TODO削除 
import "hardhat/console.sol";


/**
 * @title DappSmartContract
 * @dev Reclaimコントラクトと通信し、verifyProof関数を内部で使用するDApp用スマートコントラクト
 */
contract DappSmartContract is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    // Reclaimコントラクトのインターフェース
    IReclaim public reclaimContract;

    // ERC20トークンのインターフェース
    IERC20 public token;

    // screen_nameごとのトークン送金額
    mapping(string => uint256) public screenNameToTokenAmount;

    // ユーザーごとのscreen_nameに対するクレーム状態
    mapping(address => mapping(string => bool)) public claimed;

    // イベントの定義
    event ProofSubmitted(address indexed user, string screenName, uint256 tokenAmount);
    event ScreenNameAdded(string screenName, uint256 tokenAmount);
    event ScreenNameUpdated(string screenName, uint256 tokenAmount);
    event ScreenNameRemoved(string screenName);

    /**
     * @dev 初期化関数
     * 親コントラクトのinitialize関数を呼び出す
     * @param _reclaimAddress Reclaimコントラクトのアドレス
     * @param _tokenAddress ERC20トークンのコントラクトアドレス
     */
    function initialize(address _reclaimAddress, address _tokenAddress) external initializer {
        __Ownable_init();
        setReclaimContract(_reclaimAddress);
        setToken(_tokenAddress);
    }

    function _authorizeUpgrade(address) internal view override onlyOwner {}

    /**
     * @dev Reclaimコントラクトのアドレスを設定する関数
     * @param _reclaimAddress Reclaimコントラクトのアドレス
     */
    function setReclaimContract(address _reclaimAddress) public onlyOwner {
        require(_reclaimAddress != address(0), "Invalid Reclaim address");
        reclaimContract = IReclaim(_reclaimAddress);
    }

    /**
     * @dev ERC20トークンのコントラクトアドレスを設定する関数
     * @param _tokenAddress ERC20トークンのコントラクトアドレス
     */
    function setToken(address _tokenAddress) public onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        token = IERC20(_tokenAddress);
    }

    /**
     * @dev screen_nameと対応するtokenAmountを追加する関数
     * @param _screenName 対象のscreen_name
     * @param _tokenAmount 送金するERC20トークンの量
     */
    function addScreenName(string memory _screenName, uint256 _tokenAmount) external onlyOwner {
        require(bytes(_screenName).length > 0, "screen_name cannot be empty");
        require(screenNameToTokenAmount[_screenName] == 0, "screen_name already exists");
        screenNameToTokenAmount[_screenName] = _tokenAmount;
        emit ScreenNameAdded(_screenName, _tokenAmount);
    }

    /**
     * @dev screen_nameと対応するtokenAmountを更新する関数
     * @param _screenName 対象のscreen_name
     * @param _tokenAmount 新しい送金するERC20トークンの量
     */
    function updateScreenName(string memory _screenName, uint256 _tokenAmount) external onlyOwner {
        require(screenNameToTokenAmount[_screenName] != 0, "screen_name does not exist");
        screenNameToTokenAmount[_screenName] = _tokenAmount;
        emit ScreenNameUpdated(_screenName, _tokenAmount);
    }

    /**
     * @dev screen_nameを削除する関数
     * @param _screenName 対象のscreen_name
     */
    function removeScreenName(string memory _screenName) external onlyOwner {
        require(screenNameToTokenAmount[_screenName] != 0, "screen_name does not exist");
        delete screenNameToTokenAmount[_screenName];
        emit ScreenNameRemoved(_screenName);
    }

    /**
     * @dev 有効なscreen_nameであるかをチェックする内部関数
     * @param _screenName チェック対象のscreen_name
     */
    function isValidScreenName(string memory _screenName) internal view returns (bool) {
        return screenNameToTokenAmount[_screenName] > 0;
    }

    /**
     * @dev ユーザーがzkProofを提出し、対応するERC20トークンを受け取る関数
     * @param proof 提出するProofデータ
     */
    function submitProof(IReclaim.Proof memory proof) external {
        string memory trgtFollowing = '"following":"';
        string memory isFollowing = reclaimContract.extractFieldFromContext(proof.claimInfo.context, trgtFollowing);
        require(keccak256(bytes(isFollowing)) == keccak256(bytes("true")), "Not following");

        string memory trgtScreenName = '"screen_name":"';
        string memory screenName = reclaimContract.extractFieldFromContext(proof.claimInfo.context, trgtScreenName);
        require(isValidScreenName(screenName), "Invalid screen_name");

        require(!claimed[msg.sender][screenName], "Already claimed for this screen_name");

        try reclaimContract.verifyProof(proof) {
            claimed[msg.sender][screenName] = true;
            uint256 tokenAmount = screenNameToTokenAmount[screenName];
            require(token.transfer(msg.sender, tokenAmount), "Token transfer failed");

            emit ProofSubmitted(msg.sender, screenName, tokenAmount);
        } catch {
            // verifyProofが失敗した場合の処理
            revert("Proof verification failed");
        }
    }

    /**
     * @dev Reclaimコントラクトのアドレスを取得する関数
     * @return address Reclaimコントラクトのアドレス
     */
    function getReclaimAddress() external view returns (address) {
        return address(reclaimContract);
    }

    /**
     * @dev ERC20トークンのコントラクトアドレスを取得する関数
     * @return address ERC20トークンのコントラクトアドレス
     */
    function getTokenAddress() external view returns (address) {
        return address(token);
    }
    
    /**
     * @dev screen_nameに対応するtokenAmountを取得する関数
     * @param _screenName 対象のscreen_name
     * @return uint256 対応するtokenAmount
     */
    function getTokenAmountByScreenName(string memory _screenName) external view returns (uint256) {
        return screenNameToTokenAmount[_screenName];
    }
}
