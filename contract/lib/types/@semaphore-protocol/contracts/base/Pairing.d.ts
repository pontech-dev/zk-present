import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace Pairing {
    type G1PointStruct = {
        X: PromiseOrValue<BigNumberish>;
        Y: PromiseOrValue<BigNumberish>;
    };
    type G1PointStructOutput = [BigNumber, BigNumber] & {
        X: BigNumber;
        Y: BigNumber;
    };
    type G2PointStruct = {
        X: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
        Y: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    };
    type G2PointStructOutput = [
        [
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber
        ]
    ] & {
        X: [BigNumber, BigNumber];
        Y: [BigNumber, BigNumber];
    };
}
export interface PairingInterface extends utils.Interface {
    functions: {
        "P1()": FunctionFragment;
        "P2()": FunctionFragment;
        "addition((uint256,uint256),(uint256,uint256))": FunctionFragment;
        "negate((uint256,uint256))": FunctionFragment;
        "pairingCheck((uint256,uint256)[],(uint256[2],uint256[2])[])": FunctionFragment;
        "scalar_mul((uint256,uint256),uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "P1" | "P2" | "addition" | "negate" | "pairingCheck" | "scalar_mul"): FunctionFragment;
    encodeFunctionData(functionFragment: "P1", values?: undefined): string;
    encodeFunctionData(functionFragment: "P2", values?: undefined): string;
    encodeFunctionData(functionFragment: "addition", values: [Pairing.G1PointStruct, Pairing.G1PointStruct]): string;
    encodeFunctionData(functionFragment: "negate", values: [Pairing.G1PointStruct]): string;
    encodeFunctionData(functionFragment: "pairingCheck", values: [Pairing.G1PointStruct[], Pairing.G2PointStruct[]]): string;
    encodeFunctionData(functionFragment: "scalar_mul", values: [Pairing.G1PointStruct, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "P1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "P2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "negate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairingCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scalar_mul", data: BytesLike): Result;
    events: {};
}
export interface Pairing extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PairingInterface;
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
        P1(overrides?: CallOverrides): Promise<[Pairing.G1PointStructOutput]>;
        P2(overrides?: CallOverrides): Promise<[Pairing.G2PointStructOutput]>;
        addition(p1: Pairing.G1PointStruct, p2: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<[
            Pairing.G1PointStructOutput
        ] & {
            r: Pairing.G1PointStructOutput;
        }>;
        negate(p: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<[
            Pairing.G1PointStructOutput
        ] & {
            r: Pairing.G1PointStructOutput;
        }>;
        pairingCheck(p1: Pairing.G1PointStruct[], p2: Pairing.G2PointStruct[], overrides?: CallOverrides): Promise<[void]>;
        scalar_mul(p: Pairing.G1PointStruct, s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            Pairing.G1PointStructOutput
        ] & {
            r: Pairing.G1PointStructOutput;
        }>;
    };
    P1(overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
    P2(overrides?: CallOverrides): Promise<Pairing.G2PointStructOutput>;
    addition(p1: Pairing.G1PointStruct, p2: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
    negate(p: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
    pairingCheck(p1: Pairing.G1PointStruct[], p2: Pairing.G2PointStruct[], overrides?: CallOverrides): Promise<void>;
    scalar_mul(p: Pairing.G1PointStruct, s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
    callStatic: {
        P1(overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
        P2(overrides?: CallOverrides): Promise<Pairing.G2PointStructOutput>;
        addition(p1: Pairing.G1PointStruct, p2: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
        negate(p: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
        pairingCheck(p1: Pairing.G1PointStruct[], p2: Pairing.G2PointStruct[], overrides?: CallOverrides): Promise<void>;
        scalar_mul(p: Pairing.G1PointStruct, s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Pairing.G1PointStructOutput>;
    };
    filters: {};
    estimateGas: {
        P1(overrides?: CallOverrides): Promise<BigNumber>;
        P2(overrides?: CallOverrides): Promise<BigNumber>;
        addition(p1: Pairing.G1PointStruct, p2: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<BigNumber>;
        negate(p: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<BigNumber>;
        pairingCheck(p1: Pairing.G1PointStruct[], p2: Pairing.G2PointStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        scalar_mul(p: Pairing.G1PointStruct, s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        P1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        P2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addition(p1: Pairing.G1PointStruct, p2: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        negate(p: Pairing.G1PointStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairingCheck(p1: Pairing.G1PointStruct[], p2: Pairing.G2PointStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        scalar_mul(p: Pairing.G1PointStruct, s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
