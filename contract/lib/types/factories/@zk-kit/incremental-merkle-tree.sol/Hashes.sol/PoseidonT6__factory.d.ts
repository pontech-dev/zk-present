import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { PoseidonT6, PoseidonT6Interface } from "../../../../@zk-kit/incremental-merkle-tree.sol/Hashes.sol/PoseidonT6";
type PoseidonT6ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PoseidonT6__factory extends ContractFactory {
    constructor(...args: PoseidonT6ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PoseidonT6>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PoseidonT6;
    connect(signer: Signer): PoseidonT6__factory;
    static readonly bytecode = "0x61012161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80634937a258146038575b600080fd5b60496043366004605b565b50600090565b60405190815260200160405180910390f35b600060a08284031215606b578081fd5b82601f8301126078578081fd5b60405160a0810181811067ffffffffffffffff82111715609857609860d5565b604052808360a0810186101560ab578384fd5b835b600581101560ca57813583526020928301929091019060010160ad565b509195945050505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220bfe8b2dca18bb102fd00396105dd959e20705dc3ceb91044b3d486801e4c3c5d64736f6c63430008040033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256[5]";
            readonly name: "";
            readonly type: "uint256[5]";
        }];
        readonly name: "poseidon";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): PoseidonT6Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoseidonT6;
}
export {};
