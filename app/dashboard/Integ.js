import Web3 from "web3";

import abi from "./abi.json";

import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const contractAddress = "0x872Adb1893f0dcc8ef7f2481686a9b5C2F16DfEF";

export const onboard = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  console.log("contract",contract);
  const tx = await contract.onboardFarmer("thiru","https://blush-nursing-mandrill-661.mypinata.cloud/ipfs/QmRYcGEQNdQPEhYXGAmNLSgko6Z2HieyZWZ6jsAz5n9ubL?pinataGatewayToken=mWGmzTdWTVYzmqOV8fjZkGTG7v-YKBgdzF8XJeeMGfo4_B5DGs4UbpjGfqyOevUS");
  await tx.wait();

};
export const decrement = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  const tx = await contract.decrement();
  await tx.wait();
  return await contract.getCounter();
};

export const getCounter = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  return await contract.getCounter();
};