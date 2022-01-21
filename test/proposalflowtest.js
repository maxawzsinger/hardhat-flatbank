const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Proposal flow", function () {
  it("should not cost a lot", async function () {

    const signersArray = await ethers.getSigners();
    const hardcodedMolochMember = signersArray[0];

    const token = await ethers.getContractFactory("dummytoken");
    const deployedToken = await token.deploy();
    await deployedToken.deployed();
    console.log('token address: ',deployedToken.address);


    const contract = await ethers.getContractFactory("deployedmoloch");

    console.log("balance of token (owner): ", await deployedToken.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"));

    const deployedContract = await contract.deploy(deployedToken.address); //params
    await deployedContract.deployed();
    console.log('contract address: ',deployedContract.address);
    console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address));

    // await deployedToken.connect(hardcodedMolochMember).transfer(deployedContract.address.toLowerCase(), 1);
    console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address.toLowerCase()));

    //transfer 1 token to the moloch addr
    console.log('transferred');
    await deployedContract.connect(hardcodedMolochMember).submitProposal(
      "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      1,
      0,
      0,
      deployedToken.address,
      0,
      deployedToken.address,
      "Test"

    );

    //
    // function submitProposal(
    //     address applicant,
    //     uint256 sharesRequested,
    //     uint256 lootRequested,
    //     uint256 tributeOffered,
    //     address tributeToken,
    //     uint256 paymentRequested,
    //     address paymentToken,
    //     string memory details

    console.log("Called submit proposal");
    expect(await deployedContract.proposalCount()).to.equal(1);
    expect(await deployedContract.getProposalQueueLength()).to.equal(0);
    console.log("balance of token (owner): ", await deployedToken.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"));
    // await deployedToken.connect(hardcodedMolochMember).transfer(deployedContract.address.toLowerCase(), 1);
    console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address.toLowerCase()),deployedContract.address.toLowerCase());
    console.log("balance", await hardcodedMolochMember.getbalance());

    await deployedContract.connect(hardcodedMolochMember).sponsorProposal(0);
    console.log("sponsored proposal")
    console.log("balance", await hardcodedMolochMember.getbalance());
    expect(await deployedContract.getProposalQueueLength()).to.equal(1);

    // await deployedContract.connect(hardcodedMolochMember)





    // 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
    // await deployedContract.submitProposal()
    // expect(await greeter.greet()).to.equal("Hello, world!");
    //
    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    //
    // // wait until the transaction is mined
    // await setGreetingTx.wait();
    //
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
