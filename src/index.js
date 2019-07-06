const express = require('express');
const server = express();
const path = require('path');

//setting
server.set('port',process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


//middleware

//routes
server.use(require('./routes/rutas'));
server.use(express.static(path.join(__dirname, 'public')));

//static files

//listening
server.listen(server.get('port'), ()=>{
    console.log('Escuchando puerto:', server.get('port'));
})