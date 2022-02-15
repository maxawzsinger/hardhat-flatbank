require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.3",
  settings: {
  optimizer: {
    enabled: true,
    runs: 1
  }
},
defaultNetwork: "hardhat",
networks: {
  hardhat: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      timeout: 1800000
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/zM215AwLR7xmXJkJ22jd6dwqxfzG3rJT',
      accounts : ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    }
}
};
