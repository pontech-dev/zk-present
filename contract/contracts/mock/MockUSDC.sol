// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// OpenZeppelinのERC20実装とアクセス制御のインポート
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MockERC20
 * @dev テスト用のモックERC20トークン。ミント機能を所有者に提供。
 */
contract MockERC20 is ERC20, Ownable {
    /**
     * @dev コンストラクタ
     * @param name トークンの名前
     * @param symbol トークンのシンボル
     */
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /**
     * @dev トークンをミントする関数
     * @param to トークンを受け取るアドレス
     * @param amount ミントするトークンの量
     *
     * Requirements:
     *
     * - 呼び出し元は所有者でなければならない。
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
