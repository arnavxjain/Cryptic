// https://eth-ropsten.alchemyapi.io/v2/_jQ0B-17wJQNJM7M93mbGQei_vLFbfec

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_jQ0B-17wJQNJM7M93mbGQei_vLFbfec',
      accounts: [ '2765ae9eaf58101a0e5bdbc5b066716b9e9414c938fb195cdc725ff48a40f185' ]
    }
  }
}