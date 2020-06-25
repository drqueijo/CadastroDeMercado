require ('./models/db');

const express = require('express');
const path = require('path');
const exphdbs = require ('express-handlebars');
const cadastroControler = require ('./controllers/cadastroController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphdbs({extname:'hbs', defaultLayout:'mainLayout', layoutDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

app.listen(3000,()=>{
    console.log ("SERVER PORT: 3000")
})

app.use('/cadastro', cadastroControler)