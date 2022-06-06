// https://eth-rinkeby.alchemyapi.io/v2/pZpM04PUVYvw0ur6RJRGuMVfLMXRZCGz

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby : {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/pZpM04PUVYvw0ur6RJRGuMVfLMXRZCGz',
      accounts: ['e1816e6d608dc04f64b6286f03ac0b7da051cd3b4755cdbc370f97cde1feb0f2']
    }
  }
}