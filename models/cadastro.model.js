const mongoose = require('mongoose');

var cadastroSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: "Este campo e mandatorio."
    },
    email: {
        type: String
    },
    celular:{
        type:String
    }
});

cadastroSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'email invalido');



mongoose.model('Cadastro', cadastroSchema);