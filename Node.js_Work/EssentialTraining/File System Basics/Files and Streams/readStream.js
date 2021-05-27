const fs = require('fs')

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf-8'); 

console.log('Type something...');
readStream.on('data', (data) => {
    console.log(`I read ${data.length - 1} characters of text.`);
})

/* readStream reads bit by bit. This uses less
 * memory. Instead of reading everything all at
 * once and loading into a buffer, you're reading
 * bit by bit and chunk by chunk. They also raise
 * events, which gives us a little more control. */

readStream.on('end', () => {
    console.log('Done reading file.');
})