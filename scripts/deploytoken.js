// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const dummytoken = await ethers.getContractFactory('dummytoken');
  console.log('Deploying dummytoken...');
  const token = await dummytoken.deploy();
  await token.deployed();
  console.log('token deployed to:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
