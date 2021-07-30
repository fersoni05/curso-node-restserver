const express = require('express')
const cors = require('cors');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // midlewares funciones que se va a ejecutar para las direccionar
        this.middlewares();

        this.routes();

    }

    middlewares(){

        // CORS: sirve para proteger las url de acceso a mi server
        this.app.use(cors());

        //  lectura y parseo del body para obtener lo que manda el cliente
        this.app.use( express.json() );

        //  directorio publico
        this.app.use(express.static('public'));
    }

    // metodo de rutas: get, post, put, delete
    routes(){
     
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
        
    }

    // metodo de escuchar
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }


}


module.exports = Server;