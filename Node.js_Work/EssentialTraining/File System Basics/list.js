const fs = require('fs');

/* The 'Sync' in readdirSync method means that 
 * the process happens sychronously. This means
 * that JS will stop what ever it's doing until
 * it is done. */
console.log('\nStarted reading logs...');
const files = fs.readdirSync('./assets');
console.log('Complete!');

console.log(files,'\n');

console.log('Started async reading files...');
/* Once files in dir are read, they are passed to
 * a callback function in second arg */
fs.readdir('./assets', (err, files) => {

    if (err) {
        throw err;
    }

    console.log('Completed async!');
    console.log(files,'\n');

});
console.log('Async readdir is still running, but this is printed.');
