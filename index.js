const express = require('express');
require('dotenv').config();

// crear el servidor
const app = express();

//directorio publico
app.use(express.static('public'))

//lectura y parseo del body
app.use(express.json())

//rutas
//auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'))

// TODO: CRUD: eventos

//escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log('servidor corriendo en puerto 4000')
})