import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISemaphore, ISemaphoreInterface } from "../../../../@semaphore-protocol/contracts/interfaces/ISemaphore";
export declare class ISemaphore__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "Semaphore__CallerIsNotTheGroupAdmin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeDepthIsNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeRootIsExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeRootIsNotPartOfTheGroup";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__YouAreUsingTheSameNillifierTwice";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAdmin";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "GroupAdminUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldMerkleTreeDuration";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMerkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly name: "GroupMerkleTreeDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nullifierHash";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "externalNullifier";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "signal";
            readonly type: "uint256";
        }];
        readonly name: "ProofVerified";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }];
        readonly name: "addMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "identityCommitments";
            readonly type: "uint256[]";
        }];
        readonly name: "addMembers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "depth";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeRootDuration";
            readonly type: "uint256";
        }];
        readonly name: "createGroup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "depth";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }];
        readonly name: "createGroup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proofSiblings";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "proofPathIndices";
            readonly type: "uint8[]";
        }];
        readonly name: "removeMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "updateGroupAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "newMerkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateGroupMerkleTreeDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "newIdentityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proofSiblings";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "proofPathIndices";
            readonly type: "uint8[]";
        }];
        readonly name: "updateMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "signal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nullifierHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "externalNullifier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[8]";
            readonly name: "proof";
            readonly type: "uint256[8]";
        }];
        readonly name: "verifyProof";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISemaphoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISemaphore;
}
