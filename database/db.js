const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
    if (error){
        console.log('El error de conexion es: ' + error);
        return;
    }
    console.log('¡La base de datos se conecto exitosamente!');
});
//exportar el modulo y poder usarlo sin necesidad de setiar los parametros
module.exports = connection;