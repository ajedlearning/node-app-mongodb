const express  = require('express');
const path = require('path');

//initializations
const app = express();

//Setting 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


//Middleware

app.use(express.urlencoded({extended: false}));

//Global Variables

//Routes
app.get('/', (req, res)=>{
    res.send('hello world');
});

//static files
app.use(express.static(path.join(__dirname, 'public')));


//********************** *
module.exports = app;