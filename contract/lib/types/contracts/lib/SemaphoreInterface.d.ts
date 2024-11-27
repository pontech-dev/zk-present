import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface SemaphoreInterfaceInterface extends utils.Interface {
    functions: {
        "addMember(uint256,uint256)": FunctionFragment;
        "createGroup(uint256,uint256,address)": FunctionFragment;
        "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
        "verifyProof(uint256,uint256,uint256,uint256,uint256,uint256[8])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addMember" | "createGroup" | "removeMember" | "verifyProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "addMember", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createGroup", values: [
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
    encodeFunctionData(functionFragment: "verifyProof", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyProof", data: BytesLike): Result;
    events: {};
}
export interface SemaphoreInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SemaphoreInterfaceInterface;
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
        createGroup(groupId: PromiseOrValue<BigNumberish>, merkleTreeDepth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createGroup(groupId: PromiseOrValue<BigNumberish>, merkleTreeDepth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createGroup(groupId: PromiseOrValue<BigNumberish>, merkleTreeDepth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createGroup(groupId: PromiseOrValue<BigNumberish>, merkleTreeDepth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
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
        createGroup(groupId: PromiseOrValue<BigNumberish>, merkleTreeDepth: PromiseOrValue<BigNumberish>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeMember(groupId: PromiseOrValue<BigNumberish>, identityCommitment: PromiseOrValue<BigNumberish>, proofSiblings: PromiseOrValue<BigNumberish>[], proofPathIndices: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifyProof(groupId: PromiseOrValue<BigNumberish>, merkleTreeRoot: PromiseOrValue<BigNumberish>, signal: PromiseOrValue<BigNumberish>, nullifierHash: PromiseOrValue<BigNumberish>, externalNullifier: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
