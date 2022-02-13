const molochJSON= require("../artifacts/contracts/flatmoloch.sol/Moloch.json");

const molochABI = molochJSON.abi;

async function main () {

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
    [accountAddress,'0x70997970C51812dc3A010C7d01b50e0d17dc79C8'], //list of members
    [deployedToken.address],//list of approved tokens
    17280,//period duration (4.8hr in seconds)
    35, //voting period (7 days)
    35, //grace period
    0, //proposal deposit
    3,//dilution bound
    0,//processing reward.
    [1,2] //summoner shares - to be same length as num of MEMBERS
  );

  //automatically adds to a lookup table
  const summonedAddress = await deployedSummonerContract.addressLUT(0);
  console.log('summoned address:', summonedAddress);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
