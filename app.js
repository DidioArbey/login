const express = require ('express');
const app = express();
app.listen(3000, (req , res)=>{
    console.log('servidor corriendo en http://localhost:3000')
})