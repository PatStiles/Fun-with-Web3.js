const Web3 = require('web3')

const url = "https://eth-mainnet.alchemyapi.io/v2/xSdpe0QgUO8vQG-IOvGL7Py5DkTOA3d1";

// Using web3js
const web3 = new Web3(url);

web3.eth.getBalance("0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b")
.then(console.log);


