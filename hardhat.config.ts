import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import { HardhatUserConfig } from "hardhat/types"
/** @type import('hardhat/config').HardhatUserConfig */

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            allowUnlimitedContractSize: true,
            blockGasLimit: 1000000429720,
        },
        localhost: {
            chainId: 31337,
            allowUnlimitedContractSize: true,
            blockGasLimit: 1000000429720,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.18",
            },
            {
                version: "0.4.24",
            },
        ],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}

export default config
