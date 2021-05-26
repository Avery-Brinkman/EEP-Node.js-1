const fs = require('fs')

const md = `

# This is a new file.

We can write text to a new file w/ fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile('./assets/notes.md', md.trim(), (err) => {
    if (err) {
        throw err;
    }
    console.log('File saved!');
})

/* Create directory
 * | fs.mkdir('name', (err) => {
 * |  ...
 * | }); 
 * Will cause error if directory already exists.
 * Can check with
 * | fs.exists('name') 
 *  or 
 * | fs.existsSync('name') */