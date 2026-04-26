let nombre = "Kiara"
let país = "Argentina"
let edad = 24
let esMayor = edad >= 18
let tieneTrabajo = true

//Punto 1)

console.log("Nombre: " + nombre + " - País: " + país + " - Edad: " + edad + " - Trabajo: " + tieneTrabajo)

// Punto 2)

if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

// Punto 3)

if (tieneTrabajo) {
    console.log("Tiene trabajo")
} else {
    console.log("No tiene trabajo")
}

// Punto 4)

if (edad >= 18 && tieneTrabajo) {
    console.log("Es mayor de edad, puede trabajar");
} else if (edad < 18) {
    console.log("Es menor de edad, no puede trabajar");
}
