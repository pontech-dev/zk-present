import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ISemaphoreInterface extends utils.Interface {
    functions: {
        "addMember(uint256,uint256)": FunctionFragment;
        "addMembers(uint256,uint256[])": FunctionFragment;
        "createGroup(uint256,uint256,address,uint256)": FunctionFragment;
        "createGroup(uint256,uint256,address)": FunctionFragment;
        "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
        "updateGroupAdmin(uint256,address)": FunctionFragment;
        "updateGroupMerkleTreeDuration(uint256,uint256)": FunctionFragment;
        "updateMember(uint256,uint256,uint256,uint256[],uint8[])": FunctionFragment;
        "verifyProof(uint256,uint256,uint256,uint256,uint256,uint256[8])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addMember" | "addMembers" | "createGroup(uint256,uint256,address,uint256)" | "createGroup(uint256,uint256,address)" | "removeMember" | "updateGroupAdmin" | "updateGroupMerkleTreeDuration" | "updateMember" | "verifyProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "addMember", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "addMembers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "createGroup(uint256,uint256,address,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createGroup(uint256,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "removeMember", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "updateGroupAdmin", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateGroupMerkleTreeDuration", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateMember", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "verifyProof", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGroup(uint256,uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGroup(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGroupAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGroupMerkleTreeDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyProof", data: BytesLike): Result;
    events: {
        "GroupAdminUpdated(uint256,address,address)": EventFragment;
        "GroupMerkleTreeDurationUpdated(uint256,uint256,uint256)": EventFragment;
        "ProofVerified(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GroupMerkleTreeDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProofVerified"): EventFragment;
}
export interface GroupAdminUpdatedEventObject {
    groupId: BigNumber;
    oldAdmin: string;
    newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], GroupAdminUpdatedEventObject>;
export type GroupAdminUpdatedEventFilter = TypedEventFilter<GroupAdminUpdatedEvent>;
export interface GroupMerkleTreeDurationUpdatedEventObject {
    groupId: BigNumber;
    oldMerkleTreeDuration: BigNumber;
    newMerkleTreeDuration: BigNumber;
}
export type GroupMerkleTreeDurationUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], GroupMerkleTreeDurationUpdatedEventObject>;
export type GroupMerkleTreeDurationUpdatedEventFilter = TypedEventFilter<GroupMerkleTreeDurationUpdatedEvent>;
export interface ProofVerifiedEventObject {
    groupId: BigNumber;
    merkleTreeRoot: BigNumber;
    nullifierHash: BigNumber;
    externalNullifier: BigNumber;
    signal: BigNumber;
}
export type ProofVerifiedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ProofVerifiedEventObject>;
export type ProofVerifiedEventFilter = TypedEventFilter<ProofVerifiedEvent>;
export interface ISemaphore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISemaphoreInterface;
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
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addMembers(groupId: PromiseOrValue<BigNumberish>, identityCommitments: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createGroup(uint256,uint256,address,uint256)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, merkleTreeRootDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createGroup(uint256,uint256,address)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGroupAdmin(groupId: PromiseOrValue<BigNumberish>, newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGroupMerkleTreeDuration(groupId: PromiseOrValue<BigNumberish>, newMerkleTreeDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, newIdentityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addMembers(groupId: PromiseOrValue<BigNumberish>, identityCommitments: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createGroup(uint256,uint256,address,uint256)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, merkleTreeRootDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createGroup(uint256,uint256,address)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGroupAdmin(groupId: PromiseOrValue<BigNumberish>, newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGroupMerkleTreeDuration(groupId: PromiseOrValue<BigNumberish>, newMerkleTreeDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, newIdentityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        addMembers(groupId: PromiseOrValue<BigNumberish>, identityCommitments: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        "createGroup(uint256,uint256,address,uint256)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, merkleTreeRootDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "createGroup(uint256,uint256,address)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        updateGroupAdmin(groupId: PromiseOrValue<BigNumberish>, newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateGroupMerkleTreeDuration(groupId: PromiseOrValue<BigNumberish>, newMerkleTreeDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, newIdentityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GroupAdminUpdated(uint256,address,address)"(groupId?: PromiseOrValue<BigNumberish> | null, oldAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): GroupAdminUpdatedEventFilter;
        GroupAdminUpdated(groupId?: PromiseOrValue<BigNumberish> | null, oldAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): GroupAdminUpdatedEventFilter;
        "GroupMerkleTreeDurationUpdated(uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, oldMerkleTreeDuration?: null, newMerkleTreeDuration?: null): GroupMerkleTreeDurationUpdatedEventFilter;
        GroupMerkleTreeDurationUpdated(groupId?: PromiseOrValue<BigNumberish> | null, oldMerkleTreeDuration?: null, newMerkleTreeDuration?: null): GroupMerkleTreeDurationUpdatedEventFilter;
        "ProofVerified(uint256,uint256,uint256,uint256,uint256)"(groupId?: PromiseOrValue<BigNumberish> | null, merkleTreeRoot?: PromiseOrValue<BigNumberish> | null, nullifierHash?: null, externalNullifier?: PromiseOrValue<BigNumberish> | null, signal?: null): ProofVerifiedEventFilter;
        ProofVerified(groupId?: PromiseOrValue<BigNumberish> | null, merkleTreeRoot?: PromiseOrValue<BigNumberish> | null, nullifierHash?: null, externalNullifier?: PromiseOrValue<BigNumberish> | null, signal?: null): ProofVerifiedEventFilter;
    };
    estimateGas: {
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addMembers(groupId: PromiseOrValue<BigNumberish>, identityCommitments: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createGroup(uint256,uint256,address,uint256)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, merkleTreeRootDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createGroup(uint256,uint256,address)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGroupAdmin(groupId: PromiseOrValue<BigNumberish>, newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGroupMerkleTreeDuration(groupId: PromiseOrValue<BigNumberish>, newMerkleTreeDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, newIdentityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addMembers(groupId: PromiseOrValue<BigNumberish>, identityCommitments: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createGroup(uint256,uint256,address,uint256)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, merkleTreeRootDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createGroup(uint256,uint256,address)"(groupId: PromiseOrValue<BigNumberish>, depth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGroupAdmin(groupId: PromiseOrValue<BigNumberish>, newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGroupMerkleTreeDuration(groupId: PromiseOrValue<BigNumberish>, newMerkleTreeDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, newIdentityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
