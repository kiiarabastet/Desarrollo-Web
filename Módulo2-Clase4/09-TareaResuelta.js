// 🎯 Parte 1

// Crear función calcularAreaRectangulo(base, altura) → retornar área

function calcularAreaRectangulo(base, altura) {
        return base * altura
}
console.log(calcularAreaRectangulo(5, 6))


// Crear función esMayorDeEdad(edad) → retornar true/false

function esMayorDeEdad(edad) {
    if (edad >= 18){
        return true
    }  else {
        return false
    }
}
console.log(esMayorDeEdad(15))
console.log(esMayorDeEdad(25))


// Usar variable global pais y local ciudad dentro de función → mostrar ambas

let pais = "Argentina"; 
function mostrarUbicacion(ciudad) { 
    return "Se encuentra en " + pais + " y " + ciudad
} 
console.log(mostrarUbicacion("Buenos Aires"))


// Crear una funcion, que repita un texto, la cantidad de veces que se mande por props, ejemplo: repetirTexto("Hola", 3) esto deberia repetirse 3 veces

function repetirTexto(texto, cantidad) {
    return texto.repeat(cantidad)
}
console.log(repetirTexto("Violeta ", 5))


//🎯 Parte 2 — Bonus

//Crear función repetirTexto(texto, veces) → mostrar el texto repetido la cantidad de veces indicada

function repetirTexto2(texto, veces) {
    console.log(texto.repeat(veces))
}
repetirTexto2("Hola ", 8)

