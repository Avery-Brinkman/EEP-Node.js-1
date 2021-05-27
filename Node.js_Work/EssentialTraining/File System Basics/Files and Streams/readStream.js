const fs = require('fs')

const readStream = fs.createReadStream(); 

console.log('Type something...');

process.stdin.on('data', (data) => {
    console.log(`I read ${data.length - 2} characters of text.`);
})