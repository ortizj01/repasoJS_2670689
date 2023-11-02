const {Route} = require('express')

const route = Route()

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

    //Listar los datos
    route.get('/', (req, res) =>{
        res.json({
            msg: aprendices
        })
    })

    //Consultar aprendiz
    route.get('/consultarAprendiz', (req, res) =>{
        const {documento, nombre} = req.query //Recibir parametros
        let resultado = ''
        //Buscar si el documento recibido existe en el array de 'aprendices'
        resultado = aprendices.find(aprendiz => aprendiz.documento === parseInt(documento))
        res.json({
            msg: resultado
        })
    })

    // Metodo para agregar datos
    route.post('/', (req, res) => {
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

    route.put('/', (req, res) => {
        
        res.json({
            msg: "Modificacion exitosa"
        })
    } )

module.exports = route
 