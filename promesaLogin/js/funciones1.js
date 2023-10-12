const validarDatos = () => {
    let user = document.querySelector('#usuario').value
    let password = document.querySelector('#contrasena').value

    let usuario = "juanortiz"
    let contrasena = "123"
    let encontrado = false
    
    if (user==usuario && password==contrasena) {
        encontrado = true
        
    }

    return new Promise((resolve,reject)=>{
        if (encontrado) {
            resolve('Bienvenido al sistema')
        }else{
            reject('Datos incorrectos')
        }
    })

}

document.querySelector('#btnBuscar')
.addEventListener('click', 
() => validarDatos(document.getElementById('usuario', 'contrasena').value)
.then(mensaje => alert(mensaje))
.catch(error => alert(error))
)