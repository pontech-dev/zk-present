import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ISemaphoreGroupsInterface extends utils.Interface {
    functions: {
        "getMerkleTreeDepth(uint256)": FunctionFragment;
        "getMerkleTreeRoot(uint256)": FunctionFragment;
        "getNumberOfMerkleTreeLeaves(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMerkleTreeDepth" | "getMerkleTreeRoot" | "getNumberOfMerkleTreeLeaves"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMerkleTreeDepth", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMerkleTreeRoot", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getNumberOfMerkleTreeLeaves", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getMerkleTreeDepth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMerkleTreeRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfMerkleTreeLeaves", data: BytesLike): Result;
    events: {
        "GroupCreated(uint256,uint256,uint256)": EventFragment;
        "MemberAdded(uint256,uint256,uint256,uint256)": EventFragment;
        "MemberRemoved(uint256,uint256,uint256,uint256)": EventFragment;
        "MemberUpdated(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MemberUpdated"): EventFragment;
}
export interface GroupCreatedEventObject {
    groupId: BigNumber;
    merkleTreeDepth: BigNumber;
    zeroValue: BigNumber;
}
export type GroupCreatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], GroupCreatedEventObject>;
export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;
export interface MemberAddedEventObject {
    groupId: BigNumber;
    index: BigNumber;
    identityCommitment: BigNumber;
    merkleTreeRoot: BigNumber;
}
export type MemberAddedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MemberAddedEventObject>;
export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;
export interface MemberRemovedEventObject {
    groupId: BigNumber;
    index: BigNumber;
    identityCommitment: BigNumber;
    merkleTreeRoot: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MemberRemovedEventObject>;
export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;
export interface MemberUpdatedEventObject {
    groupId: BigNumber;
    index: BigNumber;
    identityCommitment: BigNumber;
    newIdentityCommitment: BigNumber;
    merkleTreeRoot: BigNumber;
}
export type MemberUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MemberUpdatedEventObject>;
export type MemberUpdatedEventFilter = TypedEventFilter<MemberUpdatedEvent>;
export interface ISemaphoreGroups extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISemaphoreGroupsInterface;
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
        getMerkleTreeDepth(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMerkleTreeRoot(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNumberOfMerkleTreeLeaves(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getMerkleTreeDepth(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMerkleTreeRoot(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getNumberOfMerkleTreeLeaves(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getMerkleTreeDepth(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMerkleTreeRoot(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNumberOfMerkleTreeLeaves(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "GroupCreated(uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, merkleTreeDepth?: null, zeroValue?: null): GroupCreatedEventFilter;
        GroupCreated(groupId?: PromiseOrValue<BigNumberish> | null, merkleTreeDepth?: null, zeroValue?: null): GroupCreatedEventFilter;
        "MemberAdded(uint256,uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, merkleTreeRoot?: null): MemberAddedEventFilter;
        MemberAdded(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, merkleTreeRoot?: null): MemberAddedEventFilter;
        "MemberRemoved(uint256,uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, merkleTreeRoot?: null): MemberRemovedEventFilter;
        MemberRemoved(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, merkleTreeRoot?: null): MemberRemovedEventFilter;
        "MemberUpdated(uint256,uint256,uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, newIdentityCommitment?: null, merkleTreeRoot?: null): MemberUpdatedEventFilter;
        MemberUpdated(groupId?: PromiseOrValue<BigNumberish> | null, index?: null, identityCommitment?: null, newIdentityCommitment?: null, merkleTreeRoot?: null): MemberUpdatedEventFilter;
    };
    estimateGas: {
        getMerkleTreeDepth(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMerkleTreeRoot(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNumberOfMerkleTreeLeaves(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getMerkleTreeDepth(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMerkleTreeRoot(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNumberOfMerkleTreeLeaves(groupId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
