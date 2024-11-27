import { task } from "hardhat/config";
import verify from "../scripts/verify";
import { ReturnObjectSemaphoreDeployTask } from "../types";
import fs from "fs";

task("deploy-dapp").setAction(async ({}, { ethers, network, upgrades }) => {
  // const content = JSON.parse(
  //   fs.readFileSync("./resources/contract-network-config.json", "utf-8")
  // );
  // const networkDetails = content["networks"][network.name];

  // const DappContractFactory = await ethers.getContractFactory(
  //   "DappSmartContract"
  // );

  // const reclaimAddress = "0xAe94FB09711e1c6B057853a515483792d8e474d0";

  // const DappContract = await upgrades.deployProxy(
  //   DappContractFactory,
  //   [reclaimAddress, "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"], // initialize 関数の引数, sepoliaのUSDCのアドレス
  //   { initializer: "initialize" }
  // );

  // const DappTx = await DappContract.deployed();
  // console.log("DappSmartContract deployed to:", DappTx.address);

  // networkDetails["DappSmartContract"] = {
  //   address: DappContract.address,
  //   explorer: "",
  // };
  // content["networks"]["sepolia"] = networkDetails;

  // fs.writeFileSync(
  //   "./resources/contract-network-config.json",
  //   JSON.stringify(content)
  // );

  const address = "0x8c4eD7cCb92c8892C683De858965647a70eFe45d";

  //   await verify(incrementalBinaryTreeAddress, network.name);
  //   await verify(pairingAddress, network.name);
  //   await verify(semaphoreVerifierAddress, network.name);
  //   await verify(semaphore.address, network.name, [semaphoreVerifierAddress]);
  //   await verify(DappContract.address, network.name);

  await verify(address, "eth-sepolia");
});
