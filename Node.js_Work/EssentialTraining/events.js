const events = require('events');

const emitter = new events.EventEmitter();
 
/* Handler
 * emitter.on(nameToListenFor, callbackToRun) */
emitter.on('customEvent', (message, user) => {
    console.log(`${user}: ${message}`);
});

// emitter.emit('name', dataToBePassedToHandler)
emitter.emit('customEvent', 'Hello World!', 'Computer');
emitter.emit('customEvent', 'yo im live', 'Matt');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if (input == 'exit'){
        emitter.emit('customEvent', 'Goodbye!', 'Process');
        process.exit();
    }
    emitter.emit('customEvent', input, 'Terminal');
});