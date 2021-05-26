const fs = require('fs');

/* fs.rename and fs.renameSync
 *  fs.rename('currentPath', 'newPath', callback)
 * fs.rename can also be used to move files. */
fs.rename('./assets/colors.md', './assets/colorsRenamed.md', (err) => {
    if (err){
        throw err;
    }
})

setTimeout(() => {

    // fs.unlink removes files, has sync and async
    fs.unlink('./assets/colo')

}, 4000);