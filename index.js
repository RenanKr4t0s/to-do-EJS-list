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

app.get("/",(req,res)=>{

    const weekDay = (dia === 0 || dia === 6)? 
    "Vamos descansar que é fds" :
    "Bora trabalhar que é o momento"

    res.status(200).render('dia',{day:weekDay})
})

app.listen(3000,()=>{
    console.log("conectado na porta 3000");
})
