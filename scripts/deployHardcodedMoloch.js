// scripts/deploy.js
async function main () {

  //deploy the token (param for moloch contract)
  const dummytoken = await ethers.getContractFactory('dummytoken');
  console.log('Deploying dummytoken...');
  const token = await dummytoken.deploy();
  await token.deployed();
  console.log('token deployed to:', token.address);
  // now deploy contract with token as parameter
  console.log('now deploying contract');
  const contract = await ethers.getContractFactory('deployedmoloch');
  console.log('Deploying deployed moloch...');
  const deployedContract = await contract.deploy(token.address);
  await deployedContract.deployed();
  console.log('contract deployed to:', deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
