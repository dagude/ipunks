// const { ethers } = require("ethers");

const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account: ", deployer.address);

  const ipunks = await ethers.getContractFactory("InkomsPunks");
  const deployed = await ipunks.deploy();
  
  console.log("Inkoms Punks is deployed at: ", deployed.address);
};

deploy()
  .then(() =>process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });