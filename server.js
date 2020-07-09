require ('./models/db');

const express = require('express');
const path = require('path');
const exphdbs = require ('express-handlebars');
const cadastroControler = require ('./controllers/cadastroController');
const bodyparser = require ('body-parser')

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphdbs({extname:'hbs', defaultLayout:'mainLayout', layoutDir: __dirname + '/views/layouts'},{allowedProtoMethods:{trim:true}
}));
app.set('view engine', 'hbs');

app.listen(3001,()=>{
    console.log ("servidor on: 3001")
})

app.use('/cadastro', cadastroControler)