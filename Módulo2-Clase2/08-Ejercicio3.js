let edad = 24
let nombre = "Kiara" // es indistinto si el string lo declaro con comillas simples o dobles

if (edad > 18 || nombre == "Maria") {
    console.log(1)
} else {
    console.log(2)
}

if (edad < 18 && nombre == "Maria") {
    console.log("a")
} else if (edad > 18) {
    console.log("b")
} else {
    console.log("c")
}