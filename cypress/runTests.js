const cypress = require('cypress');
const exec = require('child_process').exec;

cypress.run({
  config: {
    baseUrl: 'http://localhost:4000',
    defaultCommandTimeout: 5000,
  },
}).then((results) => {
  const passed = results.totalFailed === 0 && results.totalTests === results.totalPassed;

  if (passed) {
    // Kill the application server
    exec('killall nuorder-app-process', () => {
      // Exit with zero code to let jenkins know of passing tests
      process.exit(0);
    });
  } else {
    // Kill the application server
    exec('killall nuorder-app-process', () => {
      // Exit with non-zero code to let jenkins know of failing tests
      process.exit(1);
    });
  }
});

process.on('exit', (code) => {
  return console.log(`About to exit Cypress tests with code ${code}`);
});
