const proceso1 = () => {
    let suma1 = 0
    
        for (let i = 0; i <= 5000; i++) {
            suma1+=i;
            
        }
        return console.log(`Proceso1 La suma es ${suma1}`)
        
    }
    
const proceso2 = () => {
    let suma1 = 0
        for (let i = 0; i <= 20000; i++) {
            suma1+=i;
        }
        return console.log(`Proceso2 La suma es ${suma1}`)
    }
     
const proceso3 = () => {
    let suma1 = 0
        for (let i = 0; i <= 1000; i++) {
            suma1+=i;
        }
        return console.log(`Proceso3 La suma es ${suma1}`)
    }
    


document.querySelector('#btnBuscar')
.addEventListener('click', () => {
        proceso1();
        proceso2();
        proceso3();
});