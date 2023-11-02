const express = require('express')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.app.aprendizPath = '/api/aprendiz' //Ruta de la API
        this.routes()
        
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            }
        )
    }

        routes(){
            this.app.use(this.app.aprendizPath, require('../routes/aprendiz'))
        }
    

                // // Metodo para agregar datos
                // this.app.delete('/eliminaraprendiz', (req, res) => {
                //     const {documento} = req.query //Recibir parametros
                //     let resultado = ''
                //     resultado = aprendices.find(aprendiz => aprendiz.documento === parseInt(documento)) 
                //     res.json({
                //         msg: aprendices
                //     })
                // })

    }


module.exports = {Server} //Exportacion de la clase