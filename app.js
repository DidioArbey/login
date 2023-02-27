//invocar express
const express = require ('express');
const app = express();
// setear para capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocar dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//setiar el directorio publico
app.use('/resource',express.static('public'));
app.use('/resource',express.static(__dirname + 'public'));

//establecer el motor de plantilla ejs
app.set('view engine','ejs');

//invocar a bcryptjs
const bcryptjs = require('bcryptjs');

//variables de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true, //como se guardan la sesiones.
    saveUninitialized: true
}));

console.log(__dirname);

//invocar el modulo de la conexion de la base de datos
const connection = require('./database/db');


app.get('/' ,(req, res)=>{
    res.render('index',{msg:'Esto es un mensaje desde node'});
})

app.get('/login' ,(req, res)=>{
    res.render('login');
})

app.get('/register' ,(req, res)=>{
    res.render('register');
})


app.listen(3000, (req , res)=>{
    console.log('servidor corriendo en http://localhost:3000')
})