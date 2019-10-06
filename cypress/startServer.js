const spawn = require('child_process').spawn;

// Set the process title so we can kill the process after cypress testing is done
process.title = 'nuorder-app-process';

// Start the app as a developer normally would
console.log('*** Starting up the application server, this should take around 30 seconds ***');
const serverProcess = spawn('npm', ['run', 'start:dev'], { detached: true });

console.log(`NUORDER APP PROCESS PID: ${process.pid}`);

serverProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

serverProcess.stderr.on('data', (data) => {
  console.log(`\nERROR:\n ${data}`);
});

process.on('exit', () => {
  console.log(`Shutting down the application server: ${process.title}`);
  console.log(`Application server PID: ${serverProcess.pid}`);
  process.kill(-serverProcess.pid);
});

process.on('SIGINT', () => {
  console.log('\nGracefully shutting down the application server from SIGINT (Ctrl+C)');
  process.exit();
});

process.on('SIGTERM', () => {
  console.log('\nGracefully shutting down the application server from SIGTERM (Testing has ended!)');
  process.exit(1);
});
