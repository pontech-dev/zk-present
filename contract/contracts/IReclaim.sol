// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// 必要な構造体とライブラリのインポート
import "./lib/Claims.sol";

interface IReclaim {
	struct Proof {
		Claims.ClaimInfo claimInfo;
		Claims.SignedClaim signedClaim;
	}

	function verifyProof(Proof memory proof) external;


	function extractFieldFromContext(
		string memory data,
		string memory target
	) external pure returns (string memory);
}
