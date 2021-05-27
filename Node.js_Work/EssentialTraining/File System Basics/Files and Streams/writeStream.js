const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'utf-8');

writeStream.write('Hello');
writeStream.write(' world!\n');
