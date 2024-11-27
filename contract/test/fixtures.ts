import { ethers, run, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Reclaim } from "../src/types";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import {
  deployReclaimContract,
  generateMockWitnessesList,
  randomEthAddress,
  randomWallet,
  randomiseWitnessList,
} from "./utils";

import {
  CompleteClaimData,
  createSignDataForClaim,
  fetchWitnessListForClaim,
  hashClaimInfo,
} from "@reclaimprotocol/crypto-sdk";

const NUM_WITNESSES = 5;
const MOCK_HOST_PREFIX = "localhost:555";

export async function deployFixture() {
  let owner: SignerWithAddress = await ethers.getSigners()[0];
  const { semaphore } = await run("deploy:semaphore", { logs: false });
  let contract: Reclaim = await deployReclaimContract(
    semaphore,
    ethers,
    upgrades,
    owner
  );
  let { mockWitnesses, witnessesWallets } = await generateMockWitnessesList(
    NUM_WITNESSES,
    MOCK_HOST_PREFIX,
    ethers
  );
  let witnesses = await randomiseWitnessList(mockWitnesses);

  return { contract, witnesses, owner, semaphore, witnessesWallets };
}

export async function proofsFixture() {
  let { contract, witnesses, owner, semaphore, witnessesWallets } =
    await loadFixture(deployFixture);

  let superProofs;
  let user = await randomWallet(40, ethers.provider);
  await contract.addNewEpoch(witnesses, 5);
  const currentEpoch = await contract.currentEpoch();
  const timestampS = Math.floor(Date.now() / 1000);

  const createClaimInfo = (contextAddress) => {
    const provider = "http";
    const parameters =
      '{"additionalClientOptions":{},"body":"","geoLocation":"","headers":{"Referer":"https://x.com/peaceandwhisky","Sec-Fetch-Mode":"same-origin","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1"},"method":"GET","paramValues":{"followed_by":"true","following":"true","screen_name":"peaceandwhisky"},"responseMatches":[{"invert":false,"type":"contains","value":"\\"following\\":{{following}}"},{"invert":false,"type":"contains","value":"\\"followed_by\\":{{followed_by}}"},{"invert":false,"type":"contains","value":"\\"screen_name\\":\\"{{screen_name}}\\""}],"responseRedactions":[{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.following","regex":"\\"following\\":(.*)","xPath":""},{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.followed_by","regex":"\\"followed_by\\":(.*)","xPath":""},{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.screen_name","regex":"\\"screen_name\\":\\"(.*)\\"","xPath":""}],"url":"https://x.com/i/api/graphql/-0XdHI-mrHWBQd8-oLo1aA/ProfileSpotlightsQuery?variables=%7B%22screen_name%22%3A%22peaceandwhisky%22%7D"}';
    const context =
      '{"contextAddress":"0x0","contextMessage":"sample context","extractedParameters":{"followed_by":"true","following":"true","screen_name":"peaceandwhisky"},"providerHash":"0x1e7410813278288f83a460b36026ebcfbd241894b15a2763127a6558fd7b93ef"}';

    return { provider, parameters, context };
  };

  const createClaimData = (
    claimInfo,
    epoch,
    address,
    timestampS
  ): CompleteClaimData => {
    const infoHash = hashClaimInfo(claimInfo);
    return {
      identifier: infoHash,
      owner: address,
      timestampS,
      epoch: epoch,
    };
  };

  const generateSignatures = async (
    claimData: CompleteClaimData,
    witnesses,
    witnessesWallets
  ) => {
    const claimDataStr = createSignDataForClaim(claimData);
    const signatures = await Promise.all(
      witnesses.map(async (w) => {
        const addr = await w.addr;
        return witnessesWallets[addr].signMessage(claimDataStr);
      })
    );
    return signatures;
  };

  const signers = await ethers.getSigners();
  const claimInfos = await Promise.all([
    createClaimInfo(signers[0].address),
    createClaimInfo(signers[1].address),
  ]);

  const claimDatas = await Promise.all([
    createClaimData(claimInfos[0], currentEpoch, user.address, timestampS),
    createClaimData(claimInfos[1], currentEpoch, user.address, timestampS),
  ]);

  const signatureForEachClaim = await Promise.all([
    generateSignatures(claimDatas[0], witnesses, witnessesWallets),
    generateSignatures(claimDatas[1], witnesses, witnessesWallets),
  ]);
  superProofs = [
    {
      claimInfo: claimInfos[0],
      signedClaim: {
        signatures: signatureForEachClaim[0],
        claim: claimDatas[0],
      },
    },
    {
      claimInfo: claimInfos[1],
      signedClaim: {
        signatures: signatureForEachClaim[1],
        claim: claimDatas[1],
      },
    },
  ];
  return { contract, witnesses, owner, user, superProofs, semaphore };
}
