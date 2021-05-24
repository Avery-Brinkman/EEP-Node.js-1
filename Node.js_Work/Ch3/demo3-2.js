var fs = require('fs')

fs.readdir('c:/', (err, data) => {
    console.log(data)
})

var data = {
    name: 'Bob'
}

fs.writeFile('./Node.js_Work/Ch3/data2.json', JSON.stringify(data), (err) => {
    console.log('Finished writing. \nError: ', err)
})