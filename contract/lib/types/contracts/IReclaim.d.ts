import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace Claims {
    type ClaimInfoStruct = {
        provider: PromiseOrValue<string>;
        parameters: PromiseOrValue<string>;
        context: PromiseOrValue<string>;
    };
    type ClaimInfoStructOutput = [string, string, string] & {
        provider: string;
        parameters: string;
        context: string;
    };
    type CompleteClaimDataStruct = {
        identifier: PromiseOrValue<BytesLike>;
        owner: PromiseOrValue<string>;
        timestampS: PromiseOrValue<BigNumberish>;
        epoch: PromiseOrValue<BigNumberish>;
    };
    type CompleteClaimDataStructOutput = [
        string,
        string,
        number,
        number
    ] & {
        identifier: string;
        owner: string;
        timestampS: number;
        epoch: number;
    };
    type SignedClaimStruct = {
        claim: Claims.CompleteClaimDataStruct;
        signatures: PromiseOrValue<BytesLike>[];
    };
    type SignedClaimStructOutput = [
        Claims.CompleteClaimDataStructOutput,
        string[]
    ] & {
        claim: Claims.CompleteClaimDataStructOutput;
        signatures: string[];
    };
}
export declare namespace IReclaim {
    type ProofStruct = {
        claimInfo: Claims.ClaimInfoStruct;
        signedClaim: Claims.SignedClaimStruct;
    };
    type ProofStructOutput = [
        Claims.ClaimInfoStructOutput,
        Claims.SignedClaimStructOutput
    ] & {
        claimInfo: Claims.ClaimInfoStructOutput;
        signedClaim: Claims.SignedClaimStructOutput;
    };
}
export interface IReclaimInterface extends utils.Interface {
    functions: {
        "verifyProof(((string,string,string),((bytes32,address,uint32,uint32),bytes[])))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "verifyProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "verifyProof", values: [IReclaim.ProofStruct]): string;
    decodeFunctionResult(functionFragment: "verifyProof", data: BytesLike): Result;
    events: {};
}
export interface IReclaim extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IReclaimInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        verifyProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    verifyProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        verifyProof(proof: IReclaim.ProofStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        verifyProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        verifyProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
