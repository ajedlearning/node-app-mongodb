const express  = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

//initializations
const app = express();

//Setting 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',  
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Global Variables

//Routes
    app.use(require('./routes/index.route'));
    app.use(require('./routes/notes.route'));
// app.get('/', (req, res)=>{
//     res.render('index');
// });



//static files
app.use(express.static(path.join(__dirname, 'public')));


//********************** *
module.exports = app;