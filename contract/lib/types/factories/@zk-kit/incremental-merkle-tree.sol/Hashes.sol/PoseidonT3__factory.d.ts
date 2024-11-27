import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { PoseidonT3, PoseidonT3Interface } from "../../../../@zk-kit/incremental-merkle-tree.sol/Hashes.sol/PoseidonT3";
type PoseidonT3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PoseidonT3__factory extends ContractFactory {
    constructor(...args: PoseidonT3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PoseidonT3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PoseidonT3;
    connect(signer: Signer): PoseidonT3__factory;
    static readonly bytecode = "0x61012361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806329a5f2f6146038575b600080fd5b60496043366004605b565b50600090565b60405190815260200160405180910390f35b600060408284031215606b578081fd5b82601f8301126078578081fd5b6040516040810181811067ffffffffffffffff82111715609857609860d7565b806040525080838560408601111560ad578384fd5b835b600281101560cc57813583526020928301929091019060010160af565b509195945050505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f778cfd80413ef4cc42c97cda70c405908c003bcc07d0eeba2b344c1827cb0e564736f6c63430008040033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256[2]";
            readonly name: "";
            readonly type: "uint256[2]";
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
    static createInterface(): PoseidonT3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoseidonT3;
}
export {};
