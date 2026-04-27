//1️⃣ Mostrar números del 1 al 100

console.log("Números del  1 al 100")
let repeticiones = 100
for (let i = 1; i <= repeticiones; i++) {
    console.log(i)
}

// 2️⃣ Mostrar solo impares

console.log("-----------------------")
console.log("Números impares del  1 al 100")
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// 3️⃣ Mostrar múltiplos de 3 hasta el 30

console.log("-----------------------")
console.log("Múltiplos de 3")
for (let i = 3; i <= 30; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// 4️⃣ Calcular suma del 1 al 10

console.log("-----------------------")
console.log("Suma del 1 al 10")
let contador = 0
for (let i = 10; i >= 1; i--) {
    contador += i
}
console.log(contador)

// Desafío extra

console.log("-----------------------")
let desafíoExtra = 4
for (let i = 1; i <= desafíoExtra; i++) {
    let recorrido = ""
    for (let j = 1; j <= i; j++) {
        recorrido += i 
    } 
    console.log(recorrido)
}
