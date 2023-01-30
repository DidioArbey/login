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

console.log(__dirname);

app.get('/' ,(req, res)=>{
    res.send('Hola mundo')
})
app.listen(3000, (req , res)=>{
    console.log('servidor corriendo en http://localhost:3000')
})