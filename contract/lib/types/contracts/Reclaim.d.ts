import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace Reclaim {
    type WitnessStruct = {
        addr: PromiseOrValue<string>;
        host: PromiseOrValue<string>;
    };
    type WitnessStructOutput = [string, string] & {
        addr: string;
        host: string;
    };
    type EpochStruct = {
        id: PromiseOrValue<BigNumberish>;
        timestampStart: PromiseOrValue<BigNumberish>;
        timestampEnd: PromiseOrValue<BigNumberish>;
        witnesses: Reclaim.WitnessStruct[];
        minimumWitnessesForClaimCreation: PromiseOrValue<BigNumberish>;
    };
    type EpochStructOutput = [
        number,
        number,
        number,
        Reclaim.WitnessStructOutput[],
        number
    ] & {
        id: number;
        timestampStart: number;
        timestampEnd: number;
        witnesses: Reclaim.WitnessStructOutput[];
        minimumWitnessesForClaimCreation: number;
    };
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
export interface ReclaimInterface extends utils.Interface {
    functions: {
        "addNewEpoch((address,string)[],uint8)": FunctionFragment;
        "createDapp(uint256)": FunctionFragment;
        "createGroup(string,uint256)": FunctionFragment;
        "currentEpoch()": FunctionFragment;
        "epochDurationS()": FunctionFragment;
        "epochs(uint256)": FunctionFragment;
        "extractFieldFromContext(string,string)": FunctionFragment;
        "fetchEpoch(uint32)": FunctionFragment;
        "fetchWitnessesForClaim(uint32,bytes32,uint32)": FunctionFragment;
        "getMerkelizedUserParams(string,string)": FunctionFragment;
        "getProviderFromProof(((string,string,string),((bytes32,address,uint32,uint32),bytes[])))": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "merkelizeUser(((string,string,string),((bytes32,address,uint32,uint32),bytes[])),uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "semaphoreAddress()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "verifyMerkelIdentity(string,uint256,uint256,uint256,uint256,bytes32,uint256[8])": FunctionFragment;
        "verifyProof(((string,string,string),((bytes32,address,uint32,uint32),bytes[])))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addNewEpoch" | "createDapp" | "createGroup" | "currentEpoch" | "epochDurationS" | "epochs" | "extractFieldFromContext" | "fetchEpoch" | "fetchWitnessesForClaim" | "getMerkelizedUserParams" | "getProviderFromProof" | "initialize" | "merkelizeUser" | "owner" | "proxiableUUID" | "renounceOwnership" | "semaphoreAddress" | "transferOwnership" | "upgradeTo" | "upgradeToAndCall" | "verifyMerkelIdentity" | "verifyProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "addNewEpoch", values: [Reclaim.WitnessStruct[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createDapp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createGroup", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "currentEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochDurationS", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochs", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "extractFieldFromContext", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fetchEpoch", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fetchWitnessesForClaim", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getMerkelizedUserParams", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getProviderFromProof", values: [Reclaim.ProofStruct]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "merkelizeUser", values: [Reclaim.ProofStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "semaphoreAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "verifyMerkelIdentity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "verifyProof", values: [Reclaim.ProofStruct]): string;
    decodeFunctionResult(functionFragment: "addNewEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDapp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochDurationS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractFieldFromContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchWitnessesForClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMerkelizedUserParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProviderFromProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkelizeUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "semaphoreAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyMerkelIdentity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyProof", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "DappCreated(bytes32)": EventFragment;
        "EpochAdded(tuple)": EventFragment;
        "GroupCreated(uint256,string)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DappCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EpochAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface DappCreatedEventObject {
    dappId: string;
}
export type DappCreatedEvent = TypedEvent<[string], DappCreatedEventObject>;
export type DappCreatedEventFilter = TypedEventFilter<DappCreatedEvent>;
export interface EpochAddedEventObject {
    epoch: Reclaim.EpochStructOutput;
}
export type EpochAddedEvent = TypedEvent<[
    Reclaim.EpochStructOutput
], EpochAddedEventObject>;
export type EpochAddedEventFilter = TypedEventFilter<EpochAddedEvent>;
export interface GroupCreatedEventObject {
    groupId: BigNumber;
    provider: string;
}
export type GroupCreatedEvent = TypedEvent<[
    BigNumber,
    string
], GroupCreatedEventObject>;
export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;
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
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Reclaim extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReclaimInterface;
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
        addNewEpoch(witnesses: Reclaim.WitnessStruct[], requisiteWitnessesForClaimCreate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createDapp(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createGroup(provider: PromiseOrValue<string>, merkleTreeDepth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentEpoch(overrides?: CallOverrides): Promise<[number]>;
        epochDurationS(overrides?: CallOverrides): Promise<[number]>;
        epochs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number
        ] & {
            id: number;
            timestampStart: number;
            timestampEnd: number;
            minimumWitnessesForClaimCreation: number;
        }>;
        extractFieldFromContext(data: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        fetchEpoch(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Reclaim.EpochStructOutput]>;
        fetchWitnessesForClaim(epoch: PromiseOrValue<BigNumberish>, identifier: PromiseOrValue<BytesLike>, timestampS: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Reclaim.WitnessStructOutput[]]>;
        getMerkelizedUserParams(provider: PromiseOrValue<string>, params: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        getProviderFromProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<[string]>;
        initialize(_semaphoreAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        merkelizeUser(proof: Reclaim.ProofStruct, _identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        semaphoreAddress(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifyMerkelIdentity(provider: PromiseOrValue<string>, _merkleTreeRoot: PromiseOrValue<BigNumberish>, _signal: PromiseOrValue<BigNumberish>, _nullifierHash: PromiseOrValue<BigNumberish>, _externalNullifier: PromiseOrValue<BigNumberish>, dappId: PromiseOrValue<BytesLike>, _proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifyProof(proof: Reclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addNewEpoch(witnesses: Reclaim.WitnessStruct[], requisiteWitnessesForClaimCreate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createDapp(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createGroup(provider: PromiseOrValue<string>, merkleTreeDepth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentEpoch(overrides?: CallOverrides): Promise<number>;
    epochDurationS(overrides?: CallOverrides): Promise<number>;
    epochs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        number,
        number,
        number,
        number
    ] & {
        id: number;
        timestampStart: number;
        timestampEnd: number;
        minimumWitnessesForClaimCreation: number;
    }>;
    extractFieldFromContext(data: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    fetchEpoch(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Reclaim.EpochStructOutput>;
    fetchWitnessesForClaim(epoch: PromiseOrValue<BigNumberish>, identifier: PromiseOrValue<BytesLike>, timestampS: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Reclaim.WitnessStructOutput[]>;
    getMerkelizedUserParams(provider: PromiseOrValue<string>, params: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    getProviderFromProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<string>;
    initialize(_semaphoreAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    merkelizeUser(proof: Reclaim.ProofStruct, _identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    semaphoreAddress(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifyMerkelIdentity(provider: PromiseOrValue<string>, _merkleTreeRoot: PromiseOrValue<BigNumberish>, _signal: PromiseOrValue<BigNumberish>, _nullifierHash: PromiseOrValue<BigNumberish>, _externalNullifier: PromiseOrValue<BigNumberish>, dappId: PromiseOrValue<BytesLike>, _proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifyProof(proof: Reclaim.ProofStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addNewEpoch(witnesses: Reclaim.WitnessStruct[], requisiteWitnessesForClaimCreate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createDapp(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createGroup(provider: PromiseOrValue<string>, merkleTreeDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        currentEpoch(overrides?: CallOverrides): Promise<number>;
        epochDurationS(overrides?: CallOverrides): Promise<number>;
        epochs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number
        ] & {
            id: number;
            timestampStart: number;
            timestampEnd: number;
            minimumWitnessesForClaimCreation: number;
        }>;
        extractFieldFromContext(data: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        fetchEpoch(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Reclaim.EpochStructOutput>;
        fetchWitnessesForClaim(epoch: PromiseOrValue<BigNumberish>, identifier: PromiseOrValue<BytesLike>, timestampS: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Reclaim.WitnessStructOutput[]>;
        getMerkelizedUserParams(provider: PromiseOrValue<string>, params: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getProviderFromProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<string>;
        initialize(_semaphoreAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        merkelizeUser(proof: Reclaim.ProofStruct, _identityCommitment: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        semaphoreAddress(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        verifyMerkelIdentity(provider: PromiseOrValue<string>, _merkleTreeRoot: PromiseOrValue<BigNumberish>, _signal: PromiseOrValue<BigNumberish>, _nullifierHash: PromiseOrValue<BigNumberish>, _externalNullifier: PromiseOrValue<BigNumberish>, dappId: PromiseOrValue<BytesLike>, _proof: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
        verifyProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "DappCreated(bytes32)"(dappId?: PromiseOrValue<BytesLike> | null): DappCreatedEventFilter;
        DappCreated(dappId?: PromiseOrValue<BytesLike> | null): DappCreatedEventFilter;
        "EpochAdded(tuple)"(epoch?: null): EpochAddedEventFilter;
        EpochAdded(epoch?: null): EpochAddedEventFilter;
        "GroupCreated(uint256,string)"(groupId?: PromiseOrValue<BigNumberish> | null, provider?: PromiseOrValue<string> | null): GroupCreatedEventFilter;
        GroupCreated(groupId?: PromiseOrValue<BigNumberish> | null, provider?: PromiseOrValue<string> | null): GroupCreatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        addNewEpoch(witnesses: Reclaim.WitnessStruct[], requisiteWitnessesForClaimCreate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createDapp(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createGroup(provider: PromiseOrValue<string>, merkleTreeDepth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochDurationS(overrides?: CallOverrides): Promise<BigNumber>;
        epochs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        extractFieldFromContext(data: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fetchEpoch(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fetchWitnessesForClaim(epoch: PromiseOrValue<BigNumberish>, identifier: PromiseOrValue<BytesLike>, timestampS: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMerkelizedUserParams(provider: PromiseOrValue<string>, params: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getProviderFromProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_semaphoreAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        merkelizeUser(proof: Reclaim.ProofStruct, _identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        semaphoreAddress(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifyMerkelIdentity(provider: PromiseOrValue<string>, _merkleTreeRoot: PromiseOrValue<BigNumberish>, _signal: PromiseOrValue<BigNumberish>, _nullifierHash: PromiseOrValue<BigNumberish>, _externalNullifier: PromiseOrValue<BigNumberish>, dappId: PromiseOrValue<BytesLike>, _proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifyProof(proof: Reclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addNewEpoch(witnesses: Reclaim.WitnessStruct[], requisiteWitnessesForClaimCreate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createDapp(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createGroup(provider: PromiseOrValue<string>, merkleTreeDepth: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochDurationS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractFieldFromContext(data: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fetchEpoch(epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fetchWitnessesForClaim(epoch: PromiseOrValue<BigNumberish>, identifier: PromiseOrValue<BytesLike>, timestampS: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMerkelizedUserParams(provider: PromiseOrValue<string>, params: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProviderFromProof(proof: Reclaim.ProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_semaphoreAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        merkelizeUser(proof: Reclaim.ProofStruct, _identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        semaphoreAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifyMerkelIdentity(provider: PromiseOrValue<string>, _merkleTreeRoot: PromiseOrValue<BigNumberish>, _signal: PromiseOrValue<BigNumberish>, _nullifierHash: PromiseOrValue<BigNumberish>, _externalNullifier: PromiseOrValue<BigNumberish>, dappId: PromiseOrValue<BytesLike>, _proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifyProof(proof: Reclaim.ProofStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
