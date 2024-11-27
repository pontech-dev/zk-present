import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SemaphoreInterface, SemaphoreInterfaceInterface } from "../../../contracts/lib/SemaphoreInterface";
export declare class SemaphoreInterface__factory {
    static readonly abi: readonly [{
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
            readonly internalType: "uint256";
            readonly name: "merkleTreeDepth";
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
    static createInterface(): SemaphoreInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SemaphoreInterface;
}
