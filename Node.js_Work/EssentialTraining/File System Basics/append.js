const fs = require('fs');

// Don't need anything extra to read JSON files
const colorData = require('./assets/colors.json');

colorData.colorList.forEach((c) => {

    /* fs.appendFile will create files that don't
     * already exist. */
    fs.appendFile('./assets/colors.md', `${c.name}: ${c.hex}\n`, (err) => {
        if (err) {
            throw err;
        }
    });
})