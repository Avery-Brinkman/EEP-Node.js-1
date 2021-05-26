let hello = "Hello world!\n";

console.log(hello); // Console part of global object
                    // Can write global.console.log()

console.log('Directory',__dirname,'\n')
console.log('Filename:',__filename,'\n')

/* Semi-colons are part of JS, but aren't required, as
 * they get added in automatically. Sometimes the 
 * automatic process can miss things, however. */
 
const path = require('path')
console.log(`The file name is ${path.basename(__filename)}`)