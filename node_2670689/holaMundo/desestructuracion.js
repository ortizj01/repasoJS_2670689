const productos = ['Agua','Leche', 'Sal']

const [p1, p2, p3] = productos

console.log(p1)

// Desestrucuturacion de un objeto

const vehiculo = {
    placa:"DIE777",
    color:"Verde",
    modelo:23
}

const {placa, color, modelo} = vehiculo

console.log(placa)