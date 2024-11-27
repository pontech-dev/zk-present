import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface PoseidonT3Interface extends utils.Interface {
    functions: {
        "poseidon(uint256[2])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "poseidon"): FunctionFragment;
    encodeFunctionData(functionFragment: "poseidon", values: [[PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]]): string;
    decodeFunctionResult(functionFragment: "poseidon", data: BytesLike): Result;
    events: {};
}
export interface PoseidonT3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoseidonT3Interface;
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
        poseidon(arg0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    poseidon(arg0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        poseidon(arg0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        poseidon(arg0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        poseidon(arg0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
