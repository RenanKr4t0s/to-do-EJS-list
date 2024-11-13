import express from "express";
import bodyParser from "body-parser";


//forma de enviar um html sem usar o __dirname
import path from 'path';

// Trabalhar com EJS para Template Engine
import ejs from "ejs";

const app = express()

// Configurando uma rota para o ejs
app.set("view engine", 'ejs');

//Pegando o dia de hoje
const dia = new Date().getDay()


app.get("/peole",(req,res)=>{
    res.render("people", {foo:'Renan'})
})

app.get("/",(req,res)=>{

    //trabalhando condição do dia de hoje
    if(dia === 0 || dia === 6){
        res.status(200).send("Estamos no fim de semana "+dia)        
    }else{
        res.status(200).sendFile(path.resolve('./views/index.html'))       
    }    
})

app.listen(3000,()=>{
    console.log("conectado na porta 3000");
})
