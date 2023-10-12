const proceso1 = async() => {
    let suma1 = 0
    return new Promise( (resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 5000; i++) {
            suma1+=i;
        }
        resolve(`Proceso1 La suma es ${suma1}`)
    }, 5000)
    )
    
}


const proceso2 = async() => {
    let suma1 = 0
    return new Promise( (resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 20000; i++) {
            suma1+=i;
        }
        resolve(`Proceso2 La suma es ${suma1}`)
    }, 8000)
    )
    
}


const proceso3 = async() => {
    let suma1 = 0
    return new Promise( (resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
            suma1+=i;
        }
        resolve(`Proceso3 La suma es ${suma1}`)
    }, 3000)
    )
    
}

document.querySelector('#btnBuscar')
.addEventListener('click', () => {
    proceso1().then(mensaje => console.log(mensaje))
    proceso2().then(mensaje => console.log(mensaje))
    proceso3().then(mensaje => console.log(mensaje))
})