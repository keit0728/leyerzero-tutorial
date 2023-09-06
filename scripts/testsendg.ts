import { ethers } from "hardhat";

async function main() {
  const layerZeroDemo1 = await ethers.getContractAt(
    "LayerZeroDemo1",
    "0x5fb748027282216A32a43b30de3fe83C90268be8"
  );
  // layerZeroDemo1のestimateFees関数を実行する
  const fees = await layerZeroDemo1.estimateFees(
    10109,
    "0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad",
    ethers.encodeBytes32String("Hello LayerZero"),
    false,
    "0x"
  );

  const eth = ethers.formatEther(fees[0].toString());
  console.log(eth);
  // console.log(ethers.parseEther(eth));
  // console.log(ethers.parseEther(fees[0].toString()));

  let trustedRemote = ethers.solidityPacked(
    ["address", "address"],
    [
      "0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad",
      "0x5fb748027282216A32a43b30de3fe83C90268be8",
    ]
  );
  await layerZeroDemo1.sendMsg(
    10109,
    // "0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad",
    // ethers.getAddress("0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad"),
    trustedRemote,
    ethers.encodeBytes32String("Hello LayerZero"),
    { value: ethers.parseEther(eth) }
  );

  // アドレス: 0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad をbyte32に変換する
  // const addr = ethers.getAddress("0x1F920bf49530AA9D43f3733C5fd401Cb2B12eEad");
  // console.log(addr);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
