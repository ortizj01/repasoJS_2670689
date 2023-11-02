const express = require('express')
const path = require('path') //Trabajar con rutas
const hbs = require('hbs') //Incorporar motor de plantillas

const app = express()
const port = 8383

app.use(express.static('public'))

// Asignar la ubicacion de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
// Ingenieria de las vistas hbs
app.set('view engine', 'hbs')
// Configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', (req, res)=>{
    res.render('index', {
        "nombre":"Juan Ortiz",
        "email":"juanes@gmail.com"
    })//Redireccionar hacia el archivo hbs
})

app.get('/contacto', (req, res)=>{
    res.render('contacto')//Redireccionar hacia el archivo blade
})

app.get('/productos', (req, res)=>{
    res.render('productos')//Redireccionar hacia el archivo blade
})
app.get('/dashboard', (req, res)=>{
    res.render('dashboard')//Redireccionar hacia el archivo blade
})

app.get('*', (req, res)=>{
    res.render('404')
})


app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})