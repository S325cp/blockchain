require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/OphnkEc3Hwr_hzqYjrKH1mG7VkUs0JKZ',
      accounts: ['c324b01df6236f539965ce8c0275ae5e5a33f60862a636f61d904070c3de41ec']
    }
  }
}