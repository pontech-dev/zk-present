import { randomBytes } from "crypto";
import { BigNumber, Signer, Wallet } from "ethers";
// import { ethers, upgrades } from "hardhat";
import type {} from "../hardhat.config";
import {
  Reclaim,
  SchemaRegistry,
  Semaphore,
  DappSmartContract,
} from "../src/types";
import type {} from "../src/types/hardhat";
import fs from "fs";
import { HardhatEthersHelpers } from "hardhat/types";
import { HardhatUpgrades } from "@openzeppelin/hardhat-upgrades";

export function randomEthAddress() {
  const addr = randomBytes(20); // random address
  const addrHex = `0x${addr.toString("hex")}`;
  return addrHex;
}

export async function randomWallet(
  balanceEth: BigNumber | number = 1,
  provider
) {
  const wallet = Wallet.createRandom().connect(provider);
  if ((balanceEth as number) > 0) {
    // fund the wallet so it can make transactions
    let wei =
      typeof balanceEth === "number"
        ? "0x" + Number(balanceEth * 1e18).toString(16)
        : balanceEth.toHexString();
    wei = wei.replace("0x0", "0x");
    if (balanceEth !== 0) {
      await provider.send("hardhat_setBalance", [wallet.address, wei]);
    }
  }

  return wallet;
}

export async function deployReclaimContract(
  semaphore: Semaphore,
  ethers: HardhatEthersHelpers,
  upgrades: HardhatUpgrades,
  signer?: Signer
) {
  const factory = await ethers.getContractFactory("Reclaim", signer);
  let reclaim = (await upgrades.deployProxy(factory, [semaphore.address], {
    kind: "uups",
    initializer: "initialize",
  })) as Reclaim;

  //   await reclaim.initialize();
  if (signer) {
    reclaim = reclaim.connect(signer);
  }

  return reclaim;
}

export async function deployMockERC20Token(ethers: HardhatEthersHelpers) {
  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const mockToken = await MockERC20.deploy("Mock Token", "MCK");

  await mockToken.deployed();
  return mockToken;
}

export async function deployDappContract(
  reclaim: Reclaim,
  erc20: string,
  ethers: HardhatEthersHelpers,
  upgrades: HardhatUpgrades,
  signer?: Signer
) {
  const factory = await ethers.getContractFactory("DappSmartContract", signer);
  let DappSmartContract = (await upgrades.deployProxy(
    factory,
    [reclaim.address, erc20],
    {
      kind: "uups",
      initializer: "initialize",
    }
  )) as DappSmartContract;
  if (signer) {
    DappSmartContract = DappSmartContract.connect(signer);
  }
  return DappSmartContract;
}

export async function randomiseWitnessList(witnesses: Reclaim.WitnessStruct[]) {
  const shuffle = (array: Reclaim.WitnessStruct[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledWitnesses = shuffle(witnesses);
  return shuffledWitnesses;
}

export async function generateMockWitnessesList(
  numOfWitnesses: number,
  hostPrefix: string,
  ethers: HardhatEthersHelpers
) {
  let mockWitnesses: Reclaim.WitnessStruct[] = [];
  let witnessesWallets: Record<string, Wallet> = {};
  for (let i = 1; i <= numOfWitnesses; i++) {
    const wallet: Wallet = await randomWallet(0, ethers.provider);
    mockWitnesses.push({
      addr: wallet.address,
      host: hostPrefix + i,
    });
    witnessesWallets[wallet.address] = wallet;
  }
  return { mockWitnesses, witnessesWallets };
}

export async function registerSchema(
  schemaRegistery: SchemaRegistry,
  name: string,
  schema: string
) {
  await schemaRegistery.createSchema(name, "n/a", "n/a", schema);
}
