const express = require('express');
require('dotenv').config();

// crear el servidor
const app = express();

//directorio publico
app.use(express.static('public'))

//rutas
app.get('/api', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
})

//escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log('servidor corriendo en puerto 4000')
})