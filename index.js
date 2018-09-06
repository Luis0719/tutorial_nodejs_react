const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //Debe estar abajo del 'require' del modelo de mongo porque dentro de passport se usa ese modelo

mongoose.connect(keys.mongoUri, { useNewUrlParser: true });

const app = express();

//Cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,    //Has to be in miliseconds (days * hours * minutes * seconds * miliseconds)
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


//Get routes and call the routes function
require('./routes/routes')(app);


//Get port from enviroment variables or default 5000 port
const PORT = process.env.PORT || 5000;
app.listen(PORT); 