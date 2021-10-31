const Web3 = require('web3')

const url = "https://eth-mainnet.alchemyapi.io/v2/xSdpe0QgUO8vQG-IOvGL7Py5DkTOA3d1";

// Using web3js
const web3 = new Web3(url);

web3.eth.getBalance("0xc6cf41f303968d1afb6ea1e5f0a95ce6f1dfbefd")
.then(console.log);


