// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory('deployedmoloch');
  console.log('Deploying deployed moloch...');
  const deployedContract = await contract.deploy();
  await deployedContract.deployed();
  console.log('contract deployed to:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
