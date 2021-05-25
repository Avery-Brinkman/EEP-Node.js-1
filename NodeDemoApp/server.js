var express = require('express') // Lets us use express stuff by typing express
var bodyParser = require('body-parser')
var app = express() // Set reference to app var from instance of express
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

/* 
 * Serves static content (index.html) w/ Express
 * Does this through app.use()
 * Passes entire directory by using __dirname 
 */
app.use(express.static(__dirname))
app.use(bodyParser.json()) //Lets bodyparser know to expect json
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = Promise

var dbUrl = 'mongodb+srv://averybrinkman:TemporaryPassword123@learning-node.58nv1.mongodb.net/EEP_Database'

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

/* Handles get requests
 * /messages specifies the route
 * callback needs to handle request and response
 */ 
app.get('/messages', (req, res) => {
    // Message is mongo db, {} means dont filter anything
    Message.find({}, (err, messages) => {
        // Sends to res
        res.send(messages)
    })
})

app.get('/messages/:user', (req, res) => {
    res.send('yo')
})

app.post('/messages', async (req, res) => {

    try {
        var message = new Message(req.body)

        var savedMessage = await message.save()
            
        var censored = await Message.findOne({ message: 'badword' })
    
        if (censored) 
            await Message.deleteOne({ _id: censored.id })
        else
            io.emit('message', req.body)
    
        res.sendStatus(200) // No error
    } catch (error) {
        res.sendStatus(500) // Server error
        return console.error(error)
    } finally {
        console.log('Message post called (app.post())')
    }
})


io.on('connection', (socket) => {
    console.log('User has connected')
})

mongoose.connect(dbUrl, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    console.log('Mongo DB connection made\n   Errors:', err)
})

// Gets Express server started and listening for requests
// listen(port)
var server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port)
})