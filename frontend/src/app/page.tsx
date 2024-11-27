"use client";

import {
  Proof,
  ReclaimProofRequest,
  transformForOnchain,
} from "@reclaimprotocol/js-sdk";
import QRCode from "react-qr-code";
import { useState } from "react";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { sepolia } from "viem/chains";

import { disctributionContractAbi } from "./abi";
import Link from "next/link";

/* eslint @typescript-eslint/no-explicit-any: 0 */
declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [proof, setProof] = useState<Proof | null>(null);
  const [txStatus, setTxStatus] = useState<string>("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("MetaMaskをインストールしてください。");
        return;
      }

      const [account] = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(account);
    } catch (err) {
      console.error(err);
    }
  };

  const getVerificationReq = async () => {
    // Your credentials from the Reclaim Developer Portal
    // Replace these with your actual credentials
    const APP_ID = "0x71f57911C78Ce7D052e6f301F22069E581FD0B29";
    const APP_SECRET = process.env.NEXT_PUBLIC_RECLAIM_APP_SECRET!;
    const PROVIDER_ID = "68b777e0-ba55-4c1e-ba35-266b4c5babf2";

    // Initialize the Reclaim SDK with your credentials
    const reclaimProofRequest = await ReclaimProofRequest.init(
      APP_ID,
      APP_SECRET,
      PROVIDER_ID
    );

    // Generate the verification request URL
    const requestUrl = await reclaimProofRequest.getRequestUrl();
    console.log("Request URL:", requestUrl);
    setRequestUrl(requestUrl);

    // Start listening for proof submissions
    await reclaimProofRequest.startSession({
      onSuccess: async (proof) => {
        console.log("Proof received:", proof);
        setProof(proof as Proof);
        window.localStorage.setItem("proof", JSON.stringify(proof));
        const jsonObject = JSON.parse((proof as Proof).claimData.context);
        console.log("jsonObject", jsonObject);
      },
      onError: (error: Error) => {
        console.error("Error in proof generation:", error);
      },
    });
  };

  // const mockProof = {
  //   identifier:
  //     "0x9f3d3406c44b4ccd628fd1e1e16cd261bf0e5ff30d0caf06c6afaa49f406a044",
  //   claimData: {
  //     provider: "http",
  //     parameters:
  //       '{"additionalClientOptions":{},"body":"","geoLocation":"","headers":{"Referer":"https://x.com/peaceandwhisky","Sec-Fetch-Mode":"same-origin","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1"},"method":"GET","paramValues":{"followed_by":"true","following":"true","screen_name":"peaceandwhisky"},"responseMatches":[{"invert":false,"type":"contains","value":"\\"following\\":{{following}}"},{"invert":false,"type":"contains","value":"\\"followed_by\\":{{followed_by}}"},{"invert":false,"type":"contains","value":"\\"screen_name\\":\\"{{screen_name}}\\""}],"responseRedactions":[{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.following","regex":"\\"following\\":(.*)","xPath":""},{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.followed_by","regex":"\\"followed_by\\":(.*)","xPath":""},{"jsonPath":"$.data.user_result_by_screen_name.result.legacy.screen_name","regex":"\\"screen_name\\":\\"(.*)\\"","xPath":""}],"url":"https://x.com/i/api/graphql/-0XdHI-mrHWBQd8-oLo1aA/ProfileSpotlightsQuery?variables=%7B%22screen_name%22%3A%22peaceandwhisky%22%7D"}',
  //     owner: "0x5d1c895a93c4e31b670eafa8f212a326ddf6360d",
  //     timestampS: 1732616586,
  //     context:
  //       '{"contextAddress":"0x0","contextMessage":"sample context","extractedParameters":{"followed_by":"true","following":"true","screen_name":"peaceandwhisky"},"providerHash":"0x1e7410813278288f83a460b36026ebcfbd241894b15a2763127a6558fd7b93ef"}',
  //     identifier:
  //       "0x9f3d3406c44b4ccd628fd1e1e16cd261bf0e5ff30d0caf06c6afaa49f406a044",
  //     epoch: 1,
  //   },
  //   signatures: [
  //     "0xff1c37f3f2e9e5b9fa8af6f6a985f27aeacfb9ae01babbecb6775801e60706a5707b5dfef1713eb3d2864688bde65e50337716c0c3233d3c01ce89fa1deba5a61c",
  //   ],
  //   witnesses: [
  //     {
  //       id: "0x244897572368eadf65bfbc5aec98d8e5443a9072",
  //       url: "wss://witness.reclaimprotocol.org/ws",
  //     },
  //   ],
  //   publicData: {},
  // };

  const claimToken = async () => {
    // if (!proof) {
    //   return
    // }
    // console.log('testVerification', proof)
    // const result = await verifyProof(proof)
    // console.log('verifyProof result', result)
    console.log("test verification");

    const proofString = window.localStorage.getItem("proof");
    if (!proofString) {
      return;
    }
    const proof = JSON.parse(proofString);

    const forOnchain = transformForOnchain(proof as Proof);
    console.log("forOnchain", forOnchain);
    try {
      setTxStatus("トランザクション送信中...");

      const client = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum!),
      });

      const hash = await client.writeContract({
        account: walletAddress,
        address: "0x8c4eD7cCb92c8892C683De858965647a70eFe45d",
        abi: disctributionContractAbi,
        functionName: "submitProof",
        args: [forOnchain],
      });
      setTxStatus(`トランザクション送信完了。ハッシュ: ${hash}`);

      const publicClient = createPublicClient({
        transport: http("https://sepolia.drpc.org"),
        chain: sepolia,
      });

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      if (receipt.status === "success") {
        setTxStatus("トランザクションが完了しました！");
      } else {
        setTxStatus("トランザクションに失敗しました。");
      }
    } catch (err) {
      console.error(err);
      setTxStatus("エラーが発生しました。");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <p className="my-2 font-semibold text-center">
          FujitaさんのフォロワーはUSDCをclaimできるよ！
        </p>

        <div className="flex justify-center mb-6 ">
          <Link href={"https://twitter.com/peaceandwhisky"} target="_blank">
            <img
              className="dark:invert mx-auto"
              src="https://pbs.twimg.com/profile_images/1506991552664866822/nQveomWI_400x400.jpg"
              alt="Next.js logo"
              width={60}
            />
            <p className="mt-2">1. まずFujitaさんをフォローしてね</p>
          </Link>
        </div>

        {/* ウォレット接続 */}
        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mb-4"
          >
            2. ウォレット接続
          </button>
        ) : (
          <p className="text-center text-green-600 mb-4">
            接続中のウォレット: {walletAddress}
          </p>
        )}

        {/* 検証要求取得ボタン */}
        {!requestUrl && (
          <button
            onClick={getVerificationReq}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors mb-4"
          >
            3. QRコード表示
          </button>
        )}

        {/* QRコード表示 */}
        {requestUrl && (
          <div className="my-4">
            <QRCode className="w-full" value={requestUrl} size={128} />
            <p className="mt-2">
              4. このQRコードを読んで、立ち上がったアプリでXにログインしてね
            </p>
          </div>
        )}

        {/* 検証成功メッセージ */}
        {proof && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded text-center">
            <h2 className="text-lg font-semibold">
              zkProofの作成が完了したよ!
            </h2>
          </div>
        )}

        {/* Claimボタン */}
        {walletAddress && (
          <div className="mt-4">
            <button
              onClick={claimToken}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
            >
              Claim Token
            </button>
            <p>5. zkProofを提出してトークンを受け取ってね</p>
          </div>
        )}
        {/* トランザクションステータスの表示 */}
        {txStatus && (
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded">
            {txStatus}
          </div>
        )}
      </div>
    </div>
  );
}
