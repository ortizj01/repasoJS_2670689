//Importacion de un paquete
const express = require('express')

//Especificar el metodo del paquete a emplear
const app = express();

//Especificar el puerto
const port = 8282

app.get('/', (req, res)=>{
    // res.write('Metodo get')
    // res.end()
    res.sendFile(__dirname+'/public/home.html')
})


app.get('/clientes', (req, res)=>{
    // res.write('Pagina no encontrada')
    // res.end()
    res.sendFile(__dirname+'/public/clientes.html')
  })

app.get('/contacto', (req, res)=>{
    // res.write('Pagina no encontrada')
    // res.end()
    res.sendFile(__dirname+'/public/contacto.html')
})

app.get('/productos', (req, res)=>{
    // res.write('Pagina no encontrada')
    // res.end()
    res.sendFile(__dirname+'/public/productos.html')
})

//Desplegar el 404> Pagina no encontrada.
app.get('*', (req, res)=>{
    // res.write('Pagina no encontrada')
    // res.end()
    res.sendFile(__dirname+'/public/404.html')
  })

//Especificar el puerto a emplear
app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})