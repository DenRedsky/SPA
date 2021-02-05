exports.config = {
  specs: ['./tests/*.js'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu']
      }
    }
  ],
  mochaOpts: {
    checkLeaks: true
  },
  logLevel: 'error',
  reporters: ['spec'],
  services: ['selenium-standalone']
};
