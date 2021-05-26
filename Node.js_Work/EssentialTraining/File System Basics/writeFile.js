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