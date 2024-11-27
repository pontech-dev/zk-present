import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { Pairing, PairingInterface } from "../../../../@semaphore-protocol/contracts/base/Pairing";
type PairingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Pairing__factory extends ContractFactory {
    constructor(...args: PairingConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Pairing>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Pairing;
    connect(signer: Signer): Pairing__factory;
    static readonly bytecode = "0x610ca661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c806330332aea1161005a57806330332aea146100f45780636e1b699014610109578063a68007751461011c57600080fd5b806318c77c95146100815780631de21b76146100b45780632f3ed539146100df575b600080fd5b61009461008f366004610aaa565b61012f565b604080518251815260209283015192810192909252015b60405180910390f35b6040805180820182526000808252602091820152815180830190925260018252600290820152610094565b6100f26100ed3660046109c4565b6101a3565b005b6100fc61057d565b6040516100ab9190610b31565b610094610117366004610ade565b61063d565b61009461012a366004610a88565b6106de565b604080518082019091526000808252602082015261014b6107e0565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508061019b576040516309bde33960e01b815260040160405180910390fd5b505092915050565b80518251146101c5576040516309bde33960e01b815260040160405180910390fd5b815160006101d4826006610bf3565b905060008167ffffffffffffffff8111156101ff57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610228578160200160208202803683370190505b50905060005b838110156105275785818151811061025657634e487b7160e01b600052603260045260246000fd5b602002602001015160000151828260066102709190610bf3565b61027b906000610bdb565b8151811061029957634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106102c557634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066102df9190610bf3565b6102ea906001610bdb565b8151811061030857634e487b7160e01b600052603260045260246000fd5b60200260200101818152505084818151811061033457634e487b7160e01b600052603260045260246000fd5b602090810291909101015151518261034d836006610bf3565b610358906002610bdb565b8151811061037657634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508481815181106103a257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826103bd836006610bf3565b6103c8906003610bdb565b815181106103e657634e487b7160e01b600052603260045260246000fd5b60200260200101818152505084818151811061041257634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061043e57634e487b7160e01b600052603260045260246000fd5b60200201518261044f836006610bf3565b61045a906004610bdb565b8151811061047857634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508481815181106104a457634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106104d057634e487b7160e01b600052603260045260246000fd5b6020020151826104e1836006610bf3565b6104ec906005610bdb565b8151811061050a57634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061051f81610c29565b91505061022e565b506105306107fe565b6000602082602086026020860160086107d05a03fa905080158061055657508151600114155b15610574576040516309bde33960e01b815260040160405180910390fd5b50505050505050565b61058561081c565b50604080516080810182527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28183019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060830152815281518083019092527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b82527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60208381019190915281019190915290565b60408051808201909152600080825260208201527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018210610691576040516309bde33960e01b815260040160405180910390fd5b610699610841565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508061019b576040516309bde33960e01b815260040160405180910390fd5b6040805180820190915260008082526020820152815115801561070357506020820151155b15610721575050604080518082019091526000808252602082015290565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4711158061077557507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47826020015110155b15610793576040516309bde33960e01b815260040160405180910390fd5b60405180604001604052808360000151815260200183602001517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476107d89190610c12565b905292915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061082f61085f565b815260200161083c61085f565b905290565b60405180606001604052806003906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261088d578081fd5b813560206108a261089d83610bb7565b610b86565b80838252828201915082860187848660071b89010111156108c1578586fd5b855b8581101561091357608080838b0312156108db578788fd5b6108e3610b5d565b6108ed8b85610920565b81526108fc8b60408601610920565b8188015285529385019391909101906001016108c3565b5090979650505050505050565b600082601f830112610930578081fd5b6040516040810181811067ffffffffffffffff8211171561095357610953610c5a565b8060405250808385604086011115610969578384fd5b835b600281101561098a57813583526020928301929091019060010161096b565b509195945050505050565b6000604082840312156109a6578081fd5b6109ae610b5d565b9050813581526020820135602082015292915050565b60008060408084860312156109d7578283fd5b833567ffffffffffffffff808211156109ee578485fd5b818601915086601f830112610a01578485fd5b81356020610a1161089d83610bb7565b8083825282820191508286018b848660061b8901011115610a3057898afd5b8996505b84871015610a5a57610a468c82610995565b835260019690960195918301918701610a34565b5097505087013593505080831115610a70578384fd5b5050610a7e8582860161087d565b9150509250929050565b600060408284031215610a99578081fd5b610aa38383610995565b9392505050565b60008060808385031215610abc578182fd5b610ac68484610995565b9150610ad58460408501610995565b90509250929050565b60008060608385031215610af0578182fd5b610afa8484610995565b946040939093013593505050565b8060005b6002811015610b2b578151845260209384019390910190600101610b0c565b50505050565b6000608082019050610b44828451610b08565b6020830151610b566040840182610b08565b5092915050565b6040805190810167ffffffffffffffff81118282101715610b8057610b80610c5a565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610baf57610baf610c5a565b604052919050565b600067ffffffffffffffff821115610bd157610bd1610c5a565b5060051b60200190565b60008219821115610bee57610bee610c44565b500190565b6000816000190483118215151615610c0d57610c0d610c44565b500290565b600082821015610c2457610c24610c44565b500390565b6000600019821415610c3d57610c3d610c44565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122056b5199b021e0ca6fc823c464360b0d4dbd71a992291b4f20005b31a8211292464736f6c63430008040033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidProof";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "P1";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "P2";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "X";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2]";
                readonly name: "Y";
                readonly type: "uint256[2]";
            }];
            readonly internalType: "struct Pairing.G2Point";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "p1";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "p2";
            readonly type: "tuple";
        }];
        readonly name: "addition";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "r";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "p";
            readonly type: "tuple";
        }];
        readonly name: "negate";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "r";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point[]";
            readonly name: "p1";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "X";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2]";
                readonly name: "Y";
                readonly type: "uint256[2]";
            }];
            readonly internalType: "struct Pairing.G2Point[]";
            readonly name: "p2";
            readonly type: "tuple[]";
        }];
        readonly name: "pairingCheck";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "p";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "s";
            readonly type: "uint256";
        }];
        readonly name: "scalar_mul";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "X";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "Y";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Pairing.G1Point";
            readonly name: "r";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): PairingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Pairing;
}
export {};
