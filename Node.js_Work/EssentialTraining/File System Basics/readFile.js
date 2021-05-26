const fs = require('fs');

//const text = fs.readFileSync('./assets/Readme.md', 'utf-8');
//console.log(text);

console.log('-------------------------------------------\n');

fs.readFile('./assets/patrick.jpg', (err, img) => {

    if (err) {
        console.log(`Error: ${err}`);
        process.exit();
    }

    console.log('File contents read.');
    console.log(img);

});
