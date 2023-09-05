const express = require('express'); //Importando o express
const app = express(); // Iniciando o express


app.get("/", function(req, res){
    res.send("Bem vindo ao meu site!")
});

app.get('/blog', function(req,res){
    res.send('Bem vindo ao meu blog')
})


app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro") 
    } else { 
        console.log("Servidor iniciado com sucesso")
    }
})