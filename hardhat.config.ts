import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const {
  POLYGON_MUMBAI_ALCHEMY_KEY,
  PRIVATE_KEY,
  POLYGONSCAN_API,
  GOERLI_MUMBAI_ALCHEMY_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [PRIVATE_KEY as string],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
      chainId: 5,
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API,
  },
};

export default config;
