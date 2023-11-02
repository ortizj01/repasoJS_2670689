const express = require('express')
let aprendices = [
    {
        "documento":111,
        "nombre": "Juanito ",
        "apellido": "AlimaÑa"
    },

    {
        "documento":222,
        "nombre": "Rasputin",
        "apellido": "Builes"
    },
]
class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
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
        this.app.get('/', (req, res) =>{
            res.json({
                msg: aprendices
            })
        })

        //Consultar aprendiz
        this.app.get('/consultarAprendiz', (req, res) =>{
            const {documento, nombre} = req.query //Recibir parametros
            let resultado = ''
            //Buscar si el documento recibido existe en el array de 'aprendices'
            resultado = aprendices.find(aprendiz => aprendiz.documento === parseInt(documento))
            res.json({
                msg: resultado
            })
        })

        // Metodo para agregar datos
        this.app.post('/', (req, res) => {
            const {documento, nombre, apellido} = req.query
            aprendices.push({
                "documento": parseInt(documento),
                "nombre": nombre,
                "apellido": apellido
            }) 
            res.json({
                msg: aprendices
            })
        })

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
}

module.exports = {Server} //Exportacion de la clase