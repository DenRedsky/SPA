exports.config = {
  specs: [
    './test/specs/**/*.js'
  ],
  capabilities: [
    { browserName: 'chrome' },
    { browserName: 'firefox' },
    { browserName: 'safari' }
  ],
  logLevel: 'error',
  baseUrl: 'http://localhost',
  reporters: ['spec'],
  services: ['selenium-standalone']
};
