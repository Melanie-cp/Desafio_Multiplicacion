//hace el calculo del factorial
const factorial = (numero) => {
    if (numero <= 1) return 1
    return numero * factorial(numero - 1)
}

const main = numero => {

    //no existe el número
    if (!numero) {
        console.log('No ingresaste un número')
        return
    }

    //rango del número
    if (numero < 1 || numero > 20) {
        console.log('Número fuera del rango')
        return
    }

    //pinta 1 x numero = resultado
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }

    //pinta el factorial
    for (let i = 1; i <= numero; i++) {
        console.log(`El Factorial de ${i} = ${factorial(i)}`)
    }
}

let continuar = true
while (continuar) {
    const input = +prompt("Ingrese un número de 1 al 20")
    main(input)
    continuar = confirm("¿Deseas continuar con el programa?")
}
