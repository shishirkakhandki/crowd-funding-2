const { ethers } = require("hardhat");

async function main() {
  // Deploy Token0
  const PB = await ethers.deployContract("PB", [10000]); // Replace with your Token0 contract's name

  await PB.waitForDeployment();

  console.log("PB deployed to:", await PB.getAddress());

  // Use Token0 and Token1 addresses in AMM contract deployment
  const pbAddress = await PB.getAddress();

  // Deploy the AMM contract
  const CrowdFund = await ethers.deployContract("CrowdFund", [pbAddress]); // Replace with your AMM contract's name
  //const ammInstance = await AMMContract.deploy(token0Address, token1Address);

  await CrowdFund.waitForDeployment();

  console.log("CrowdFund Contract deployed to:", await CrowdFund.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
