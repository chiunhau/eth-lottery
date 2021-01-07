require('dotenv').config();
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  {
    mnemonic: {
      phrase: 'pole view bachelor original include mutual air drip sister provide elevator tortoise'
    },
    providerOrUrl: 'https://rinkeby.infura.io/v3/2adc7df6e9484f8d8cecf16658c50ba7'
  }
)

const web3 = new Web3(provider);

const deploy = async  () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying from account', accounts[0]);
  
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode})
    .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
  
}

deploy();