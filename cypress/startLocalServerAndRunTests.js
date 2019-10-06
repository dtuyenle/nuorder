const exec = require('child_process').exec;

const startServer = 'node cypress/startServer.js';
const waitForServer = 'npx wait-on --delay 1000 --interval 1500 http-get://localhost:4000/nuorder';
const runE2ETests = 'node cypress/runTests.js';

// Note the server startup is backgrounded with a single ampersand,
// the rest of the commands must run in series so they use double ampersand
const child = exec(`${startServer} & ${waitForServer} && ${runE2ETests}`);

child.stdout.on('data', data => console.log(data));
child.stderr.on('data', data => console.log(`\nERROR:\n ${data}`));
child.on('exit', (code, signal) => {
  if (code === 0) {
    console.log(`Parent process exiting with code ${code}, and signal ${signal}`);
    process.exit(0);
  } else {
    console.log(`Parent process exiting with code ${code}, and signal ${signal}`);
    process.exit(1);
  }
});

process.on('SIGINT', () => {
  console.log('\nGracefully stoppping the script and cleaning up mock data from SIGINT (Ctrl+C)');
  process.exit();
});

process.on('SIGTERM', () => {
  console.log('\nGracefully stoppping the script and cleaning up mock data from SIGTERM (Testing has ended!)');
  process.exit(1);
});
