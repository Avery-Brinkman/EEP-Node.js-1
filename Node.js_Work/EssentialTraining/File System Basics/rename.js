const fs = require('fs');

/* fs.rename and fs.renameSync
 *  fs.rename('currentPath', 'newPath', callback)
 * fs.rename can also be used to move files. */
fs.rename('./assets/colors.md', './assets/storage/colorsMoved.md', (err) => {
    if (err){
        throw err;
    }
})