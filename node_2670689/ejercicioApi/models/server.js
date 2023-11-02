const express = require('express')
let Rutinas = [
    {
        "IdRutina":111,
        "nombreRutina": "Ectomorfo",
        "CantidadEjercicios": 5,
        "DiaSemana": "Lunes",
        "Estado": true
    },

    {
        "IdRutina":222,
        "nombreRutina": "Mesomorfo",
        "CantidadEjercicios": 6,
        "DiaSemana": "Martes",
        "Estado": true
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
                msg: Rutinas
            })
        })

        //Consultar aprendiz
        this.app.get('/consultarRutinas', (req, res) =>{
            const {IdRutina, nombre} = req.query //Recibir parametros
            let resultado = ''
            //Buscar si el documento recibido existe en el array de 'aprendices'
            resultado = Rutinas.find(Rutina => Rutina.IdRutina === parseInt(IdRutina))
            res.json({
                msg: resultado
            })
        })

        // Metodo para agregar datos
        this.app.post('/', (req, res) => {
            const {IdRutina, nombreRutina, CantidadEjercicios, DiaSemana,Estado} = req.query
            Rutinas.push({
                "IdRutina": parseInt(IdRutina),
                "nombreRutina": nombreRutina,
                "CantidadEjercicios": parseInt(CantidadEjercicios),
                "DiaSemana": DiaSemana,
                "Estado": Estado
            }) 
            res.json({
                msg: Rutinas
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