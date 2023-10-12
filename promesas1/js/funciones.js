const buscarCliente = (dato) => {
    const documentos = [1010, 1011, 1020, 1030, 1957, 5550]
    const nombres = ['Carmen','Ines','Juan','Daniela','Maria','Janeth']
    let encontrado = false
    let i = 0
    for (i= 0; i<documentos.length; i++) {
        if (dato == documentos[i]) {
            encontrado = true
            alert ("El codigo "+ dato + " corresponde a "+nombres[i])
        }
    }
    return new Promise((resolve,reject)=>{
        if (encontrado) {
            resolve('Dato encontrado, el nombre es: ')
        }else{
            reject('Dato no encontrado')
        }
    })

}

document.querySelector('#btnBuscar')
.addEventListener('click', 
() => buscarCliente(document.getElementById('dato').value)
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))
)