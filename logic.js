const Web3 = require('web3')

const url = "https://eth-mainnet.alchemyapi.io/v2/xSdpe0QgUO8vQG-IOvGL7Py5DkTOA3d1";

// Using web3js
const web3 = new Web3(url);

// Using ethers.js
const provider =
  new ethers.providers.JsonRpcProvider(url);


  