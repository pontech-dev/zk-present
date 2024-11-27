import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DappSmartContract, DappSmartContractInterface } from "../../contracts/DappSmartContract";
type DappSmartContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DappSmartContract__factory extends ContractFactory {
    constructor(...args: DappSmartContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DappSmartContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DappSmartContract;
    connect(signer: Signer): DappSmartContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610b64806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100e6578063ba289ba0146100f7578063c4d66de81461010a578063f2fde38b1461011d57600080fd5b80630bb96ff41461008d578063160bf9ec146100b65780634483b1f5146100cb578063715018a6146100de575b600080fd5b6065546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100c96100c436600461081d565b610130565b005b60655461009a906001600160a01b031681565b6100c96101c2565b6033546001600160a01b031661009a565b6100c961010536600461083e565b6101d6565b6100c961011836600461081d565b6102ed565b6100c961012b36600461081d565b610417565b61013861048d565b6001600160a01b0381166101935760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964205265636c61696d206164647265737300000000000000000060448201526064015b60405180910390fd5b6065805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6101ca61048d565b6101d460006104e7565b565b6065546040516354b0734f60e11b81526001600160a01b039091169063a960e69e90610206908490600401610985565b600060405180830381600087803b15801561022057600080fd5b505af1925050508015610231575060015b6102b3576040516000815233907f0755a328363738ee89760a156ab91e0f29144c5164dcdd126b621276105c81989060200160405180910390a260405162461bcd60e51b815260206004820152601960248201527f50726f6f6620766572696669636174696f6e206661696c656400000000000000604482015260640161018a565b6040516001815233907f0755a328363738ee89760a156ab91e0f29144c5164dcdd126b621276105c81989060200160405180910390a25b50565b600054610100900460ff161580801561030d5750600054600160ff909116105b806103275750303b158015610327575060005460ff166001145b6103995760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161018a565b6000805460ff1916600117905580156103bc576000805461ff0019166101001790555b6103c4610546565b6103cd82610130565b8015610413576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b61041f61048d565b6001600160a01b0381166104845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161018a565b6102ea816104e7565b6033546001600160a01b031633146101d45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161018a565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166105b15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161018a565b6101d4600054610100900460ff1661061f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161018a565b6101d4336104e7565b80356001600160a01b038116811461063f57600080fd5b919050565b600082601f830112610654578081fd5b8135602067ffffffffffffffff8083111561067157610671610b18565b8260051b610680838201610ae7565b8481528381019087850183890186018a101561069a578788fd5b8793505b868410156106d7578035858111156106b4578889fd5b6106c28b88838d01016106e4565b8452506001939093019291850191850161069e565b5098975050505050505050565b600082601f8301126106f4578081fd5b813567ffffffffffffffff81111561070e5761070e610b18565b610721601f8201601f1916602001610ae7565b818152846020838601011115610735578283fd5b816020850160208301379081016020019190915292915050565b600081830360a0811215610761578182fd5b610769610a9b565b9150608081121561077957600080fd5b506040516080810167ffffffffffffffff828210818311171561079e5761079e610b18565b81604052843583526107b260208601610628565b60208401526107c360408601610809565b60408401526107d460608601610809565b6060840152918352608084013591808311156107ef57600080fd5b50506107fd84828501610644565b60208301525092915050565b803563ffffffff8116811461063f57600080fd5b60006020828403121561082e578081fd5b61083782610628565b9392505050565b60006020828403121561084f578081fd5b813567ffffffffffffffff80821115610866578283fd5b9083019060408286031215610879578283fd5b610881610a9b565b82358281111561088f578485fd5b8301606081880312156108a0578485fd5b6108a8610ac4565b8135848111156108b6578687fd5b6108c2898285016106e4565b8252506020820135848111156108d6578687fd5b6108e2898285016106e4565b6020830152506040820135848111156108f9578687fd5b610905898285016106e4565b60408301525082525060208301358281111561091f578485fd5b61092b8782860161074f565b60208301525095945050505050565b60008151808452815b8181101561095f57602081850181015186830182015201610943565b818111156109705782602083870101525b50601f01601f19169290920160200192915050565b60006020808352835160408285015280516060808601526109a960c086018261093a565b905082820151605f19808784030160808801526109c6838361093a565b925060408401519350808784030160a088015250506109e5818361093a565b91505081850151601f1985830301604086015260a082018151805184526001600160a01b03858201511685850152604081015163ffffffff808216604087015280606084015116606087015250505083820151915060a0608084015280825180835260c08501915060c08160051b86010192508584019350865b81811015610a8d5760bf19868503018352610a7b84865161093a565b94870194935091860191600101610a5f565b509198975050505050505050565b6040805190810167ffffffffffffffff81118282101715610abe57610abe610b18565b60405290565b6040516060810167ffffffffffffffff81118282101715610abe57610abe610b18565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b1057610b10610b18565b604052919050565b634e487b7160e01b600052604160045260246000fdfea264697066735822122006c6e3f68ca1f7add3c37b57cdbb395b58ce45bbe4219bc8c70256f2ac8bee9164736f6c63430008040033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "ProofProcessed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReclaimAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_reclaimAddress";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "provider";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "parameters";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "context";
                    readonly type: "string";
                }];
                readonly internalType: "struct Claims.ClaimInfo";
                readonly name: "claimInfo";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "identifier";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "timestampS";
                        readonly type: "uint32";
                    }, {
                        readonly internalType: "uint32";
                        readonly name: "epoch";
                        readonly type: "uint32";
                    }];
                    readonly internalType: "struct Claims.CompleteClaimData";
                    readonly name: "claim";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "bytes[]";
                    readonly name: "signatures";
                    readonly type: "bytes[]";
                }];
                readonly internalType: "struct Claims.SignedClaim";
                readonly name: "signedClaim";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IReclaim.Proof";
            readonly name: "proof";
            readonly type: "tuple";
        }];
        readonly name: "processProof";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "reclaimContract";
        readonly outputs: readonly [{
            readonly internalType: "contract IReclaim";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_reclaimAddress";
            readonly type: "address";
        }];
        readonly name: "setReclaimContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DappSmartContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DappSmartContract;
}
export {};
