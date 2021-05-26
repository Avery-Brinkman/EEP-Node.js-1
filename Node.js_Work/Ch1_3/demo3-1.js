var fs = require('fs')
fs.readFile('./Node.js_Work/Ch3/data1.json', 'utf-8', (err, data) => {
	console.log(data)
})

// vs

var data = require('./data1.json')
console.log(data)
console.log(data.name)

// The first is ouputting strings, where the second is outputting the actual objects
// Can add 'var data = JSON.parse(data)' between 2 and 3 and then use 'console.log(data.name)'