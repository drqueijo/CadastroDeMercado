const express = require('express');
const { Router } = require('express');
const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('cadastro/addOrEdit', {
        viewTitle: "Cadastre-se"
    });
});

router.post('/', (req,res)=>{
    insertRecord(req,res);

});

function insertRecord(req,res){
    var cadastro = new Cadastro();
    cadastro.nome = req.body.nome;
    cadastro.email = req.body.email;
    cadastro.telefone = req.body.telefone;
    cadastro.save((err, doc) =>{
        if (!err)
            res.redirect('cadastro/list');
        else{
            if(err.name == 'ValidationError'){
            handleValidationError(err,req.body)
            res.render('cadastro/addOrEdit', {
                viewTitle: "Cadastre-se",
                cadastro: req.body
            });
            console.log(err);
            }
            else{
                console.log(err)
            }
        }
    });
}
router.get('/list',(req,res)=>{
        Cadastro.find((err, docs)=>{
            if (!err){
                res.render('cadastro/list',{
                    list: docs.map(doc => doc.toJSON())
                });
            }
            else{
                console.log("erro ao recer dados " + err);
            }
        });
    });


    function handleValidationError(err, body){
        for (field in err.errors){
            switch(err.errors[field].path){
                case 'nome': body['nomeError'] = err.errors[field].message;
                break;
            
                case 'email': body['emailError'] = err.errors[field].message;
                break;

                default: break;
            }
        }
    }

module.exports = router; 