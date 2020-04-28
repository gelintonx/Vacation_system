const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()

// Init
const app = express()


// Settings
app.set('port', process.env.PORT || 4000)
app.set('views',path.join(__dirname,'templates'))
app.set('view engine', 'ejs');

// Midleweares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use(require('./routes/index'))

// Static Files
app.use(express.static(path.join(__dirname,'public')))


// Starting server
app.listen(app.get('port'),()=>{
    console.log("Server is on port",app.get('port'))
})