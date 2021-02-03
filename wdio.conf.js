exports.config = {
  runner: 'local',
  specs: [
    './test/specs/**/*.js'
  ],
  capabilities: [
    {
      browserName: 'opera'

    }
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  services: ['selenium-standalone'],
  mochaOpts: {
    require: ['@babel/register'],
    ui: 'bdd',
    timeout: 60000
  }
};
