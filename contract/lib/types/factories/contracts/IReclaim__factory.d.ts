import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IReclaim, IReclaimInterface } from "../../contracts/IReclaim";
export declare class IReclaim__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "provider";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "parameters";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "context";
                    readonly type: "string";
                }];
                readonly internalType: "struct Claims.ClaimInfo";
                readonly name: "claimInfo";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "identifier";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampS";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "epoch";
                        readonly type: "uint32";
                    }];
                    readonly internalType: "struct Claims.CompleteClaimData";
                    readonly name: "claim";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "bytes[]";
                    readonly name: "signatures";
                    readonly type: "bytes[]";
                }];
                readonly internalType: "struct Claims.SignedClaim";
                readonly name: "signedClaim";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IReclaim.Proof";
            readonly name: "proof";
            readonly type: "tuple";
        }];
        readonly name: "verifyProof";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IReclaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IReclaim;
}
