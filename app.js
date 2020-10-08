const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



// set up express app
const app = express()



// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.Promise = global.Promise
// checking if the nodejs is connected to mongoDB
mongoose.connection.on('open', () => console.log('connected with the mongodB...'))




// to fetch static html files from public folder
// app.use(express.static('public'))




// bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// importing route middleware
const ninjaRoutes = require('./ninja.routes')
app.use('/api', ninjaRoutes)

// 404 handler
// app.use((req, res, next) => {
//     res.status(404).send('404 ERROR: We think you are lost!');
// })

// handling error middleware aka 505 handler
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})



// listen to the port
// URL: http://localhost:4000/
app.listen(4000, () => console.log('listening to port 4000'))