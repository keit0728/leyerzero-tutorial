import { ethers } from "hardhat";

async function main() {
  const layerZeroDemo1 = await ethers.deployContract("LayerZeroDemo1", [
    // "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23", // goerli
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8", // mumbai
  ]);

  await layerZeroDemo1.waitForDeployment();

  console.log("layerZeroDemo1 deployed to:", await layerZeroDemo1.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
