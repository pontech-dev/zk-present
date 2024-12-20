import { task } from 'hardhat/config'
import verify from '../scripts/verify'
import { ReturnObjectSemaphoreDeployTask } from '../types'
import fs from 'fs'

task('deploy').setAction(async ({}, { ethers, network, upgrades }) => {
  console.log(1);
  const content = JSON.parse(
    fs.readFileSync('./resources/contract-network-config.json', 'utf-8')
  )
  const networkDetails = content['networks'][network.name]
  console.log(2);
  const {
    semaphore,
    pairingAddress,
    semaphoreVerifierAddress,
    poseidonAddress,
    incrementalBinaryTreeAddress
  } = // @ts-expect-error events
    (await run('deploy:semaphore')) as ReturnObjectSemaphoreDeployTask
    console.log(3);
  const ReclaimFactory = await ethers.getContractFactory('Reclaim')
  const Reclaim = await upgrades.deployProxy(
    ReclaimFactory,
    [semaphore.address],
    {
      kind: 'uups',
      initializer: 'initialize'
    }
  )
  console.log(4);
  const tx = await Reclaim.deployed()
  const res = await tx.deployTransaction.wait()

  const DappContractFactory = await ethers.getContractFactory(
    "DappSmartContract"
  );
  const DappContract = await DappContractFactory.deploy(Reclaim.address);
  const DappTx = await DappContract.deployed();
  console.log("DappSmartContract deployed to:", DappTx.address);

  // @ts-expect-error events
  console.log('Reclaim Implementation deployed to:', res.events[0].args[0])
  console.log('Reclaim Proxy deployed to: ', Reclaim.address)

  
  networkDetails['IncrementalBinaryTree'] = {
    address: incrementalBinaryTreeAddress,
    explorer: ''
  }

  networkDetails['Pairing'] = {
    address: pairingAddress,
    explorer: ''
  }
  networkDetails['SemaphoreVerifier'] = {
    address: semaphoreVerifierAddress,
    explorer: ''
  }
  networkDetails['Semaphore'] = {
    address: semaphore.address,
    explorer: ''
  }

  networkDetails['Reclaim'] = {
    address: Reclaim.address,
    explorer: ''
  }
  content['networks'][network.name] = networkDetails

  fs.writeFileSync(
    './resources/contract-network-config.json',
    JSON.stringify(content)
  )


  await verify(incrementalBinaryTreeAddress, network.name)
  await verify(pairingAddress, network.name)
  await verify(semaphoreVerifierAddress, network.name)
  await verify(semaphore.address, network.name, [semaphoreVerifierAddress])
  await verify(Reclaim.address, network.name)
})
