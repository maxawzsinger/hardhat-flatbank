const { expect } = require("chai");
const { ethers } = require("hardhat");
const molochJSON= require("../artifacts/contracts/flatmoloch.sol/Moloch.json");

const molochABI = molochJSON.abi;

describe("Proposal flow", function () {
  it("should not cost a lot", async function () {

    const signersArray = await ethers.getSigners();
    const account = signersArray[0];
    console.log('account is signer: ', account.isSigner);
    const accountAddress = await account.getAddress();
    console.log('account: ', accountAddress);

    const token = await ethers.getContractFactory("dummytoken");
    const deployedToken = await token.deploy();
    await deployedToken.deployed();
    console.log('token address: ',deployedToken.address);

    const molochContract = await ethers.getContractFactory("contracts/flatmoloch.sol:Moloch");
    const deployedMolochContract = await molochContract.deploy();
    await deployedMolochContract.deployed();
    console.log('deployed moloch template at : ', deployedMolochContract.address);

    const summonerContract = await ethers.getContractFactory("contracts/flatmoloch.sol:MolochSummoner");
    const deployedSummonerContract = await summonerContract.deploy(deployedMolochContract.address);
    await deployedSummonerContract.deployed();
    console.log('deployed summoner contract at : ', deployedSummonerContract.address);

    //call summon moloch


    await deployedSummonerContract.connect(account).summonMoloch(
      [accountAddress], //list of members
      [deployedToken.address],//list of approved tokens
      17280,//period duration (4.8hr in seconds)
      35, //voting period (7 days)
      35, //grace period
      0, //proposal deposit
      3,//dilution bound
      0,//processing reward.
      [1] //summoner shares - to be same length as num of MEMBERS
    );

    //automatically adds to a lookup table
    const summonedAddress = await deployedSummonerContract.addressLUT(0);
    console.log('summoned address:', summonedAddress);

    const provider = ethers.getDefaultProvider('http://localhost:8545');


    const summonedMoloch = new ethers.Contract(summonedAddress, molochABI, provider);
    const signer2 = await signersArray[1].getAddress();
    const tx = await summonedMoloch.connect(account).checkMemberInDao("0x976EA74026E726554dB657fA54763abd0C3a0aa9");
    console.log(signer2);

    // const numMembers = await summonedMoloch.getMemberCount();
    // for (let i =0;i<numMembers;i++) {
    //   let member = await summonedMoloch.memberList(i);
    //   console.log('member ',i,member);
    // }

    console.log('member in dao',tx);


    // console.log(receipt);




  });
});
