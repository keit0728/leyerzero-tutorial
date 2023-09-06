import { ethers } from "hardhat";

async function main() {
  // デプロイ済みのLayerZeroDemo1コントラクトを取得する
  const layerZeroDemo1 = await ethers.getContractAt(
    "LayerZeroDemo1",
    "0x5fb748027282216A32a43b30de3fe83C90268be8"
  );
  const count = await layerZeroDemo1.messageCount();
  const msg = await layerZeroDemo1.message();
  console.log(count);
  console.log(ethers.toUtf8String(msg));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
