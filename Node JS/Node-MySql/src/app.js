const express = requiere('express');
const cors = requiere('cors');

//Inicializar express
const app = expres();
app.use(cors())

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extend: true}))

//Ruta
app.use(requiere('./route/personasRoute'))

//Base de datos
requiere('./config/connection')

//Levantar el servidor
app.listen(app.get('port'), (error) => {
    if(error){
        console.log('Ha ocurrido un error: ', error);
    } else {
        console.log('Servidor en puerto: ', app.get('port'));
    }
})