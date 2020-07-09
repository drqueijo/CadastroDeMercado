const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CadastroDB', {useNewUrlParser:true}, (err)=>{

if (!err) { console.log('DB Mongoose OK!')}

else{
    console.log('Erro na conexão '+ err)
}

});

require('./cadastro.model');