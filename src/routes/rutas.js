var express = require('express');
var router = express.Router();
var email = require('../email');
const nodemon = require('nodemon');

const oEmail = new email({

   "host":"SMTP",
   "service":'GMAIL',
   "auth":{
        "user":"armakaisen@gmail.com",
        "pass":"domingoarmando"
    }
});


router.get('/', (req, res)=>{
    //res.send('hola');
    //res.render('index', {titulo: 'Pagina Web Nodejs', saludo: 'Bienvenido', subsaludo: 'Aprenda Página Web'});
    res.render('index',{titulo: 'Arape Multitienda', categoria: 'Boutique'});
    //console.log(path.join(__dirname, 'views'));
});

router.get('/contact', (req, res)=>{
    res.render('contact', {titulo: 'Arape Multitienda'});
    
});

router.post('/contact', (req, res)=>{

    const lcCorreo = req.body.lccorreo;   
    const lcNombre = req.body.lcnombre;
    var lcMensaje = req.body.lcmensaje;
            
    //var lcMsg = "<div><p>Correo:" + lcCorreo + "</p>"+"<p>Nombre:"+lcNombre + "</p>" + "<p>Mensaje:"+lcMensaje + "</p></div>";
    
    var lcMsg = "";
    
    let email = {           
        to: "armakaisen@gmail.com",
        subject: "nuevo mensaje de usuario "+lcNombre,
        text: lcMensaje+" correo origen: "+lcCorreo
  			//html: lcMsg       
    };
            
    oEmail.enviarCorreo(email)
    console.log('Enviado');
    res.redirect('/');

});

router.get('/bazar', (req, res)=>{   
    res.render('bazar', {titulo: 'Arape Multitienda', categoria: 'Bazar'});    
});

router.get('/escolar', (req, res)=>{   
    res.render('escolar', {titulo: 'Arape Multitienda', categoria: 'Escolar'});    
});

module.exports = router;