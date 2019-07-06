const express = require('express');
const server = express();
const path = require('path');
const session   = require('express-session');
const routes    = require('./routes/rutas');

//setting
server.set('port',process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));

server.use(session({
    secret: "domingoa",
    resave: false,
    saveUninitialized: false 
}));

//middleware

server.use(express.urlencoded({extended: false}));
server.use(routes);

//static files

//listening
server.listen(server.get('port'), ()=>{
    console.log('Escuchando puerto:', server.get('port'));
})