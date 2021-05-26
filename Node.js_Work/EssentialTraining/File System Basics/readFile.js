const fs = require('fs');

const text = fs.readFileSync('./assets/Readme.md', 'utf-8');
console.log(text);

console.log('-------------------------------------------\n');

fs.readFile('./assets/Readme.md', 'utf-8', (err, text) => {

    console.log('File contents read.');
    console.log(text);

});
