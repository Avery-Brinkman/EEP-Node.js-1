const { response } = require('express')
var express = require('express') // Lets us use express stuff by typing express
var app = express() // Set reference to app var from instance of express

/* 
 * Serves static content (index.html) w/ Express
 * Does this through app.use()
 * Passes entire directory by using __dirname 
 */
app.use(express.static(__dirname))

// Placeholder msgs list as array
var messages = [
    { name: 'Tim', message: 'yo!' },
    { name: 'Jane', message: 'Yo!' }
]

/* Handles get requests
 * /messages specifies the route
 * callback needs to handle request and response
 */ 
app.get('/messages', (req, res) => {
    // Sends to res
    res.send(messages)
})

// Gets Express server started and listening for requests
// listen(port)
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})