import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISemaphoreVerifier, ISemaphoreVerifierInterface } from "../../../../@semaphore-protocol/contracts/interfaces/ISemaphoreVerifier";
export declare class ISemaphoreVerifier__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nullifierHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "signal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "externalNullifier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[8]";
            readonly name: "proof";
            readonly type: "uint256[8]";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeDepth";
            readonly type: "uint256";
        }];
        readonly name: "verifyProof";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISemaphoreVerifierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISemaphoreVerifier;
}
