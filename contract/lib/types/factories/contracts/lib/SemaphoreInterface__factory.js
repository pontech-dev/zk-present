"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemaphoreInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256",
            },
        ],
        name: "addMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "merkleTreeDepth",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "createGroup",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256",
            },
            {
                internalType: "uint256[]",
                name: "proofSiblings",
                type: "uint256[]",
            },
            {
                internalType: "uint8[]",
                name: "proofPathIndices",
                type: "uint8[]",
            },
        ],
        name: "removeMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "signal",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nullifierHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "externalNullifier",
                type: "uint256",
            },
            {
                internalType: "uint256[8]",
                name: "proof",
                type: "uint256[8]",
            },
        ],
        name: "verifyProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class SemaphoreInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SemaphoreInterface__factory = SemaphoreInterface__factory;
SemaphoreInterface__factory.abi = _abi;
