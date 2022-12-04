import { ethers } from "hardhat";

async function main() {
  const ChainAidContractFactory = await ethers.getContractFactory("ChainAid");

  console.log("Contract deployment starting...");
  const ChainAidContract = await ChainAidContractFactory.deploy();
  await ChainAidContract.deployed();

  console.log("Contract deployed to:", ChainAidContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
