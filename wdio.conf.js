exports.config = {
  specs: ['./test/specs/**/*.js'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        // args: ['--headless', '--disable-gpu']
      }
    }
  ],
  logLevel: 'error',
  baseUrl: 'http://localhost',
  reporters: ['spec'],
  services: ['selenium-standalone']
};
