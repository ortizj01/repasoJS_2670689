
const validarFormulario = () =>{
    //validar campos vacios
    
    let nombres = document.querySelector('#nombres').value
    let apellidos = document.querySelector('#apellidos').value
    let telefono = document.querySelector('#telefono').value
    let correo = document.querySelector('#correo').value
    let contrasena = document.querySelector('#contrasena').value

    if (nombres.value.length == 0 ) {
        // alert('El nombre esta vacio. Verifique') 
        Swal.fire({
            icon: 'error',
            title: 'Advertencia',
            text: 'El nombre esta vacio, verifique!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }else if (apellidos.value.length == 0) {
        alert('El apellido esta vacio. Verifique')
    }else if (telefono.value.length == 0) {
        alert('El telefono esta vacio. Verifique')
    }else if (correo.value.length == 0) {
        alert('El correo esta vacio. Verifique') 
    }else if (contrasena.value.length == 0) {
        alert('La contraseña esta vacia. Verifique')   
    }else if (contrasena.value.length < 8) {
        alert('La contraseña tiene que tener minimo 8 caracteres. Verifique')
   
    }else{
        Swal.fire(
            'Listo!',
            'Los datos se enviaron correctamente',
            'success'
          )
    }

}

function ValidaSoloNumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
     event.returnValue = false;
}


// Capturar el objeto al cual se le dara clic.
const boton = document.querySelector('#btnEnviar')
boton.addEventListener('click',validarFormulario)