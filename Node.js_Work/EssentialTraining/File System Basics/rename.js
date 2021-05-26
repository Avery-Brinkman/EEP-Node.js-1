const fs = require('fs');

// Ensures colors.md exists at start
fs.access('./assets/colors.md', fs.F_OK, (err) => {
    if (err) {
        fs.writeFileSync('./assets/colors.md','utf-8');
    }

    // Timer so you can see colors created and renamed
    setTimeout(() => {
        /* fs.rename and fs.renameSync
        *  fs.rename('currentPath', 'newPath', callback)
        * fs.rename can also be used to move files. */
        fs.rename('./assets/colors.md', './assets/colorsRenamed.md', (err) => {
            if (err){
                console.log('Rename');
                throw err;
            }

        })
    }, 1000)
})

setTimeout(() => {

    // fs.unlink removes files, has sync and async
    fs.unlink('./assets/colorsRenamed.md', (err) => {
        if (err) {
            console.log('Unlink')
            throw err;
        }
    })

}, 4000);