// Parametros o props, o propiedades, etc

function saludar(nombre) {
    console.log("Buenas Noches", nombre)
}


saludar("Violeta")



// Retorno de valores

function sumar(a, b) {
    return a + b // Sin esta linea, sumar no devolveria nada
}

let resultado1 = sumar(10, 5)
console.log(resultado1) // 7


// Qué pasa si llamo una funcion sin darle las propiedades:

console.log(sumar()) // Estoy queriendo sumar dos cosas que no le escribí nada, necesito un valor por defecto de A y B


// Como agregamos un valor por defecto(default) a las props?

function sumar2(a = 0, b = 0) { // ahora las props si yo no le paso alguna de ellas, va a tener el valor de 0
    return a + b
}

console.log(sumar2(2))
console.log(sumar2())   // B = 0 por lo que acá se convoca al 0
console.log(sumar2(3, "a")) // "3a" //Concatenado