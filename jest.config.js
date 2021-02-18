const path = require('path');

module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  moduleNameMapper: {
    './styles': 'identity-obj-proxy',
    '^router$': path.resolve('src', 'router.js'),
    '^api$': path.resolve('src', 'api.js'),
    '^shared': path.resolve('src', 'shared')
  }
};
