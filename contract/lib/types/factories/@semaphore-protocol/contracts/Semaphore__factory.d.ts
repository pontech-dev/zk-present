import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Semaphore, SemaphoreInterface } from "../../../@semaphore-protocol/contracts/Semaphore";
type SemaphoreConstructorParams = [linkLibraryAddresses: SemaphoreLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Semaphore__factory extends ContractFactory {
    constructor(...args: SemaphoreConstructorParams);
    static linkBytecode(linkLibraryAddresses: SemaphoreLibraryAddresses): string;
    deploy(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Semaphore>;
    getDeployTransaction(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Semaphore;
    connect(signer: Signer): Semaphore__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516113c13803806113c183398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b611330806100916000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636389e1071161008c5780639c112141116100665780639c11214114610236578063dabc4d5114610249578063ec45622a1461026c578063fcf0b6ec1461027f57600080fd5b80636389e107146101b157806365e54f83146101d157806396324bd4146101e457600080fd5b80633bc778e3116100c85780633bc778e31461014757806343989f851461015a578063568ee8261461016d578063638480be1461018057600080fd5b806304245371146100ef5780631783efc3146101045780632b7ac3f314610117575b600080fd5b6101026100fd366004610ec5565b610292565b005b610102610112366004610f0f565b61033b565b60015461012a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6101026101553660046110aa565b6103a9565b610102610168366004610fa0565b610578565b61010261017b366004610e9a565b6105ee565b6101a361018e366004610e82565b60009081526020819052604090206002015490565b60405190815260200161013e565b6101a36101bf366004610e82565b60009081526020819052604090205490565b6101026101df366004610f64565b610682565b6102176101f2366004610e82565b600260205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b03909316835260208301919091520161013e565b610102610244366004610f30565b61071f565b6101a3610257366004610e82565b60009081526020819052604090206001015490565b61010261027a366004611020565b6107bf565b61010261028d366004610f0f565b610838565b60008381526002602052604090205483906001600160a01b031633146102cb576040516317737e4f60e31b815260040160405180910390fd5b60005b8281101561030e57610306858585848181106102fa57634e487b7160e01b600052603260045260246000fd5b905060200201356108cc565b6001016102ce565b50505060009182525060208181526040808320600101546002808452828520918552019091529020429055565b60008281526002602052604090205482906001600160a01b03163314610374576040516317737e4f60e31b815260040160405180910390fd5b61037e83836108cc565b5050600090815260208181526040808320600101546002808452828520918552019091529020429055565b600086815260208190526040902054806103d65760405163029f057960e01b815260040160405180910390fd5b6000878152602081905260409020600101548681146104625760008881526002602081815260408084208b8552808401835290842054938c90529190526001015481610435576040516326994ac360e11b815260040160405180910390fd5b61043f8183611273565b42111561045f576040516309581a9960e41b815260040160405180910390fd5b50505b600088815260026020908152604080832088845260030190915290205460ff16156104a057604051632523419d60e21b815260040160405180910390fd5b600154604051634d65479560e11b81526001600160a01b0390911690639aca8f2a906104da908a9089908b908a908a908a90600401611238565b60006040518083038186803b1580156104f257600080fd5b505afa158015610506573d6000803e3d6000fd5b5050506000898152600260209081526040808320898452600301825291829020805460ff19166001179055815188815290810189905286925089918b917f48950129900df26c2140187532df49c8af343c3daf74f1e99e562e1b2be07adc910160405180910390a45050505050505050565b60008681526002602052604090205486906001600160a01b031633146105b1576040516317737e4f60e31b815260040160405180910390fd5b6105bf8787878787876109da565b505050600093845250505060208181526040808320600101546002808452828520918552019091529020429055565b60008281526002602052604090205482906001600160a01b03163314610627576040516317737e4f60e31b815260040160405180910390fd5b60008381526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590519091339186917f0ba83579a0e79193ef649b9f5a8759d35af086ba62a3e207b52e4a8ae30d49e391a4505050565b8260108110806106925750602081115b156106b05760405163767b278960e11b815260040160405180910390fd5b6106ba8585610af2565b60008581526002602052604080822080546001600160a01b0319166001600160a01b03871690811782556001909101859055905190919087907f0ba83579a0e79193ef649b9f5a8759d35af086ba62a3e207b52e4a8ae30d49e3908390a45050505050565b81601081108061072f5750602081115b1561074d5760405163767b278960e11b815260040160405180910390fd5b6107578484610af2565b60008481526002602052604080822080546001600160a01b0319166001600160a01b0386169081178255610e10600190920191909155905190919086907f0ba83579a0e79193ef649b9f5a8759d35af086ba62a3e207b52e4a8ae30d49e3908390a450505050565b60008781526002602052604090205487906001600160a01b031633146107f8576040516317737e4f60e31b815260040160405180910390fd5b61080788888888888888610c0b565b5050506000948552505050602082815260408084206001015460028084528286209186520190915290912042905550565b60008281526002602052604090205482906001600160a01b03163314610871576040516317737e4f60e31b815260040160405180910390fd5b60008381526002602090815260409182902060010180549085905582518181529182018590529185917f264b2a8f6763c084235fe832ba903482b2ef1a521336881fc75b987c2dfd29c591015b60405180910390a250505050565b6000828152602081905260409020546108f85760405163029f057960e01b815260040160405180910390fd5b600082815260208190526040908190209051630b4381fd60e11b815260048101919091526024810182905273__$0c6eb7207c37accf1552a1c47686411ac0$__9063168703fa9060440160006040518083038186803b15801561095a57600080fd5b505af415801561096e573d6000803e3d6000fd5b5050506000838152602081905260408120600180820154600290920154919350610997916112aa565b604080518281526020810186905290810184905290915084907f19239b3f93cd10558aaf11423af70c77763bf54f52bcc75bfa74d4d13548cde9906060016108be565b600086815260208190526040902054610a065760405163029f057960e01b815260040160405180910390fd5b600086815260208190526040908190209051630629596f60e01b815273__$0c6eb7207c37accf1552a1c47686411ac0$__91630629596f91610a559190899089908990899089906004016111b1565b60006040518083038186803b158015610a6d57600080fd5b505af4158015610a81573d6000803e3d6000fd5b5050506000878152602081905260408120600101549150610aa28484610d2d565b60408051828152602081018a905290810184905290915088907f3108849c053c77b8073a11256dffb5ffd5b55e93e105a355e1c9061db890d8719060600160405180910390a25050505050505050565b60008281526020819052604090205415610b1f57604051638121725b60e01b815260040160405180910390fd5b6000600883604051602001610b3691815260200190565b60408051808303601f1901815282825280516020918201206000888152918290529190206304257eed60e21b835260048301526024820185905290911c60448201819052915073__$0c6eb7207c37accf1552a1c47686411ac0$__90631095fbb49060640160006040518083038186803b158015610bb357600080fd5b505af4158015610bc7573d6000803e3d6000fd5b505060408051858152602081018590528693507f0d000126c26c1bbe400fd2332187f75d58b69306f9ec47b408686189d3a0083392500160405180910390a2505050565b600087815260208190526040902054610c375760405163029f057960e01b815260040160405180910390fd5b60008781526020819052604090819020905163a547882760e01b815273__$0c6eb7207c37accf1552a1c47686411ac0$__9163a547882791610c8891908a908a908a908a908a908a906004016111f1565b60006040518083038186803b158015610ca057600080fd5b505af4158015610cb4573d6000803e3d6000fd5b5050506000888152602081905260408120600101549150610cd58484610d2d565b60408051828152602081018b90529081018990526060810184905290915089907fea3588e4a2a0c93d6a0e69dfeaf7496f43ccccf02ad9ce0a5b7627cbca4b61b19060800160405180910390a2505050505050505050565b600080825b60ff811615610e03576000821180610d8d57508484610d526001846112c1565b60ff16818110610d7257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610d879190611103565b60ff1615155b15610dfa57610d9d60028361128b565b91508484610dac6001846112c1565b60ff16818110610dcc57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610de19190611103565b60ff1660011415610dfa57610df7600183611273565b91505b60001901610d32565b509392505050565b80356001600160a01b0381168114610e2257600080fd5b919050565b60008083601f840112610e38578182fd5b50813567ffffffffffffffff811115610e4f578182fd5b6020830191508360208260051b8501011115610e6a57600080fd5b9250929050565b803560ff81168114610e2257600080fd5b600060208284031215610e93578081fd5b5035919050565b60008060408385031215610eac578081fd5b82359150610ebc60208401610e0b565b90509250929050565b600080600060408486031215610ed9578081fd5b83359250602084013567ffffffffffffffff811115610ef6578182fd5b610f0286828701610e27565b9497909650939450505050565b60008060408385031215610f21578182fd5b50508035926020909101359150565b600080600060608486031215610f44578283fd5b8335925060208401359150610f5b60408501610e0b565b90509250925092565b60008060008060808587031215610f79578081fd5b8435935060208501359250610f9060408601610e0b565b9396929550929360600135925050565b60008060008060008060808789031215610fb8578182fd5b8635955060208701359450604087013567ffffffffffffffff80821115610fdd578384fd5b610fe98a838b01610e27565b90965094506060890135915080821115611001578384fd5b5061100e89828a01610e27565b979a9699509497509295939492505050565b600080600080600080600060a0888a03121561103a578081fd5b873596506020880135955060408801359450606088013567ffffffffffffffff80821115611066578283fd5b6110728b838c01610e27565b909650945060808a013591508082111561108a578283fd5b506110978a828b01610e27565b989b979a50959850939692959293505050565b6000806000806000806101a080888a0312156110c4578283fd5b87359650602088013595506040880135945060608801359350608088013592508881890111156110f2578182fd5b5060a0870190509295509295509295565b600060208284031215611114578081fd5b61111d82610e71565b9392505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611155578081fd5b8260051b80836020870137939093016020019283525090919050565b81835260006020808501945082825b858110156111a65760ff61119383610e71565b1687529582019590820190600101611180565b509495945050505050565b8681528560208201526080604082015260006111d1608083018688611124565b82810360608401526111e4818587611171565b9998505050505050505050565b87815286602082015285604082015260a06060820152600061121760a083018688611124565b828103608084015261122a818587611171565b9a9950505050505050505050565b60006101a082019050878252866020830152856040830152846060830152610100846080840137610180919091019190915295945050505050565b60008219821115611286576112866112e4565b500190565b60008160001904831182151516156112a5576112a56112e4565b500290565b6000828210156112bc576112bc6112e4565b500390565b600060ff821660ff8416808210156112db576112db6112e4565b90039392505050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122032cb3fd52b097b9d9abe13cd05fe0572dbb96a2065ce0219f1ea3f7a1aa17e4a64736f6c63430008040033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISemaphoreVerifier";
            readonly name: "_verifier";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__CallerIsNotTheGroupAdmin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__GroupAlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__GroupDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeDepthIsNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeRootIsExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__MerkleTreeRootIsNotPartOfTheGroup";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Semaphore__YouAreUsingTheSameNillifierTwice";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAdmin";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "GroupAdminUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "merkleTreeDepth";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "zeroValue";
            readonly type: "uint256";
        }];
        readonly name: "GroupCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldMerkleTreeDuration";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMerkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly name: "GroupMerkleTreeDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }];
        readonly name: "MemberAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }];
        readonly name: "MemberRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newIdentityCommitment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }];
        readonly name: "MemberUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nullifierHash";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "externalNullifier";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "signal";
            readonly type: "uint256";
        }];
        readonly name: "ProofVerified";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }];
        readonly name: "addMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "identityCommitments";
            readonly type: "uint256[]";
        }];
        readonly name: "addMembers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeDepth";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly name: "createGroup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeDepth";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }];
        readonly name: "createGroup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }];
        readonly name: "getMerkleTreeDepth";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }];
        readonly name: "getMerkleTreeRoot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }];
        readonly name: "getNumberOfMerkleTreeLeaves";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "groups";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proofSiblings";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "proofPathIndices";
            readonly type: "uint8[]";
        }];
        readonly name: "removeMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "updateGroupAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "newMerkleTreeDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateGroupMerkleTreeDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "identityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "newIdentityCommitment";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proofSiblings";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "proofPathIndices";
            readonly type: "uint8[]";
        }];
        readonly name: "updateMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "verifier";
        readonly outputs: readonly [{
            readonly internalType: "contract ISemaphoreVerifier";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "groupId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "merkleTreeRoot";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "signal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nullifierHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "externalNullifier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[8]";
            readonly name: "proof";
            readonly type: "uint256[8]";
        }];
        readonly name: "verifyProof";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SemaphoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Semaphore;
}
export interface SemaphoreLibraryAddresses {
    ["@zk-kit/incremental-merkle-tree.sol/IncrementalBinaryTree.sol:IncrementalBinaryTree"]: string;
}
export {};
