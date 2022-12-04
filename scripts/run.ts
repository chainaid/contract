import { ethers } from "hardhat";

const main = async () => {
  const [owner, user2] = await ethers.getSigners();
  const ChainAidContractFactory = await ethers.getContractFactory("ChainAid");
  const ChainAidContract = await ChainAidContractFactory.deploy();
  await ChainAidContract.deployed();

  console.log(await owner.getBalance());

  await ChainAidContract.addOrg("Opensea", {
    value: ethers.utils.parseEther("10"),
  });

  await ChainAidContract.addOrg("Push", {
    value: ethers.utils.parseEther("10"),
  });

  await ChainAidContract.addOrg("Polygon", {
    value: ethers.utils.parseEther("10"),
  });

  const balance = await ethers.provider.getBalance(ChainAidContract.address);
  console.log(balance);

  await ChainAidContract.addOrg("Polygon", {
    value: ethers.utils.parseEther("10"),
  });
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
