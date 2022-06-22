// const { ethers } = require("ethers");

const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account: ", deployer.address);

  const InkomsPunks = await ethers.getContractFactory("InkomsPunks");
  const deployed = await InkomsPunks.deploy(10000);
  
  console.log("Inkoms Punks is deployed at: ", deployed.address);
};

deploy()
  .then(() =>process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });