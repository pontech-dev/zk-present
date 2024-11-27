import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
export interface DappSmartContractInterface extends utils.Interface {
    functions: {
        "getReclaimAddress()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "processProof(((string,string,string),((bytes32,address,uint32,uint32),bytes[])))": FunctionFragment;
        "reclaimContract()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setReclaimContract(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getReclaimAddress" | "initialize" | "owner" | "processProof" | "reclaimContract" | "renounceOwnership" | "setReclaimContract" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "getReclaimAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "processProof", values: [IReclaim.ProofStruct]): string;
    encodeFunctionData(functionFragment: "reclaimContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setReclaimContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getReclaimAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reclaimContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReclaimContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProofProcessed(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProofProcessed"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProofProcessedEventObject {
    user: string;
    success: boolean;
}
export type ProofProcessedEvent = TypedEvent<[
    string,
    boolean
], ProofProcessedEventObject>;
export type ProofProcessedEventFilter = TypedEventFilter<ProofProcessedEvent>;
export interface DappSmartContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DappSmartContractInterface;
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
        getReclaimAddress(overrides?: CallOverrides): Promise<[string]>;
        initialize(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        processProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reclaimContract(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReclaimContract(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getReclaimAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    processProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reclaimContract(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReclaimContract(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getReclaimAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_reclaimAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        processProof(proof: IReclaim.ProofStruct, overrides?: CallOverrides): Promise<void>;
        reclaimContract(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setReclaimContract(_reclaimAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProofProcessed(address,bool)"(user?: PromiseOrValue<string> | null, success?: null): ProofProcessedEventFilter;
        ProofProcessed(user?: PromiseOrValue<string> | null, success?: null): ProofProcessedEventFilter;
    };
    estimateGas: {
        getReclaimAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        processProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reclaimContract(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReclaimContract(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getReclaimAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processProof(proof: IReclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reclaimContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReclaimContract(_reclaimAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
