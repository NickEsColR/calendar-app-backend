const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// crear el servidor
const app = express();
app.use(cors());

dbConnection();
//directorio publico
app.use(express.static('public'))

//lectura y parseo del body
app.use(express.json())

//rutas
//auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'))

// TODO: CRUD: eventos
app.use('/api/events', require('./routes/events'))

//escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log('servidor corriendo en puerto 4000')
})