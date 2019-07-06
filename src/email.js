const nodemailer = require('nodemailer');

class email{
    constructor(oConfig){
        this.createTransport = nodemailer.createTransport(oConfig);
    }

    enviarCorreo(oEmail){
        try {
            this.createTransport.sendMail(oEmail, (err, info)=>{
                if(err){
                    console.log('Correo no se pudo enviar');                   
                    //console.log(err);
                }else{
                    
                    console.log('Correo enviado satisfactoriamente');                    
                    //res.send('<script>alert("Correo enviado")</script>');
                }
                this.createTransport.close();
            })
        } catch (error) {
            
        }
    }
}

module.exports = email;
