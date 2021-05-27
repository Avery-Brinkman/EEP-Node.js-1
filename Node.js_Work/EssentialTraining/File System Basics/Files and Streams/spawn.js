const cp = require('child_process');

// cp.spawn('command', [argument1, argument2, ...])
const questionApp = cp.spawn('node', ['questionsSpawn.js']);

// Sending data to questionApp
questionApp.stdin.write('Avery\n');
questionApp.stdin.write('Cincinnati\n');
questionApp.stdin.write('Change the world\n');

// Whenever questionApp sends data to terminal, we can handle it here
questionApp.stdout.on('data', (data) => {
    console.log(`From question app: ${data}`)
})

questionApp.on('close', () => {
    console.log('Question app terminated.');
})