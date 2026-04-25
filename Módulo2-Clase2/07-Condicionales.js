// Ahora... ¿Que hacemos con todo esto? ¿Como podemos evaluar una variable en javascript?

// if - else - else if

let edad = 89

let esMayor = edad >= 18

// Como hago para que me muestre en consola "Es mayor de edad" o "Es menor de edad"?
if (esMayor) {
    console.log("Es mayor de edad :)")
} else {
    console.log("Es menor de edad :)")
}

let nombre = "María"

if (nombre == "Kiara") {
    console.log("Hola Kiara")
} else if (edad > 50) {
    console.log("Es mayor de 50")
} else {
    console.log("No permitido")
}