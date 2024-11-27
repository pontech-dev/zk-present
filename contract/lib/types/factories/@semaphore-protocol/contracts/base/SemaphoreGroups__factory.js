"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemaphoreGroups__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "Semaphore__GroupAlreadyExists",
        type: "error",
    },
    {
        inputs: [],
        name: "Semaphore__GroupDoesNotExist",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeDepth",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "zeroValue",
                type: "uint256",
            },
        ],
        name: "GroupCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256",
            },
        ],
        name: "MemberAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256",
            },
        ],
        name: "MemberRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newIdentityCommitment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256",
            },
        ],
        name: "MemberUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
        ],
        name: "getMerkleTreeDepth",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
        ],
        name: "getMerkleTreeRoot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
        ],
        name: "getNumberOfMerkleTreeLeaves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class SemaphoreGroups__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SemaphoreGroups__factory = SemaphoreGroups__factory;
SemaphoreGroups__factory.abi = _abi;
