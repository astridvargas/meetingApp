// Get Express
const express = require('express');

// Import express layouts
const expressLayouts = require('express-ejs-layouts');

// Import path
const path = require('path');

// Import our routes file
const router = require('./routes');

// Import bodyParser
const bodyParser = require('body-parser');

// Import Connect Flash
const flash = require('connect-flash')

// Import Session
const session = require('express-session');

// Import cookie parser
const cookieParser = require('cookie-parser');

// Import Exprss Validator/
// const { check, validationResult } = require('express-validator');

// Add and config of db
const db = require('./config/db');
require('./models/User');
db.sync().then(() => console.log('DB connected')).catch((error) => console.log(error));

// Variables
require('dotenv').config({path: 'variables.env'});

// Principle app
const app = express();

// Body Parser/Read forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

// Use express validator
// app.use(expressValidator());

// Use express layouts
app.use(expressLayouts);

// Add EJS as a template engine
app.set('view engine', 'ejs');

// locate the views
app.set('views', path.join(__dirname, './views'));

// Picture files and others
app.use(express.static('public'));

// User CookieParser
app.use(cookieParser());

// Create a session
app.use(session({
    secret: `process.env.SECRET`,
    key: `process.env.KEY`,
    resave: false,
    saveUninitialized: false
}));

// Add flash
app.use(flash());

// Middleware (logged user, messages)
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    // const date = new Date();
    // res.locals.year = date.getFullYear();

    next();
});

// Start routing
app.use('/', router());

// Start the local porting
app.listen(process.env.PORT, () => {
    console.log('Working!!!!');
})