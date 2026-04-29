// Scope global

let nombre = "Kiara" // Global

function mostrarNombre() {           //Como que esto es un contexto, lo que está por fuera puede meterse en una función (bajando) y ser accesible dentro de encapsulamientos o scopes más anidados.
    console.log(nombre)
}

mostrarNombre()

/* 
¿Por qué dentro de la función puedo utilizar la varialbe "nombre"?
Al estar declarado por fuera, esta variable ingresa a todos los "scopes" o encapsulamientos

*/


// Scope local

function prueba() {
    let edad = 24         //Esta variable existe solo en el contexto o scope de esta funcion, no puede escalar al estar adentro, su alcance es local.
    console.log(edad)     // Solo existe y vive mientras esa función se está ejecutando. Una vez que la función termina su trabajo, la variable se destruye.
}

prueba() // Esto si me muestra en consola la edad
// console.log(edad) // Error

if (true) {
    let ciudad = "Buenos Aires"
    console.log(ciudad) // Este si muestra en consola, porque ciudad aca existe
}

// console.log(ciudad) // Error

/*-----------------------------------*/

// Diferencia entre var vs let/const

// var        -> scope global
// let/const  -> scope de bloque

if (true) {
    var x = 5
    let y = 10
}

console.log(x) // Este da, el var puede "escalar"
console.log(y) // Error, el let, no escala