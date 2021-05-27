const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'utf-8');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf-8')


/* readStream.on('data', (data) => {
    writeStream.write(data);
}) 
copys l-i to mF */


// Takes stdin and pipes directly to writeStream
// (overwrites)
process.stdin.pipe(writeStream);