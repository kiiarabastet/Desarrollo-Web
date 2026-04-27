// Mostrar del 1 al 10
console.log("Mostrar del 1 al 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Mostrar pares del 1 al 20
console.log("-----------------------")
console.log("Mostrar numeros pares del 1 al 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Mostrar impares del 1 al 20
console.log("-----------------------")
console.log("Mostrar numeros impares del 1 al 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Tabla del 5
console.log("-----------------------")
console.log("Mostrar tabla del 5")
for (let i = 1; i <= 10; i++) {       // el número que fijo es el 5, multiplicaré 5 x i // <= determina hasta dónde querés que llegue tu tabla.
    console.log(i * 5)                // La variable i es el multiplicador: Representa la secuencia de números por los que multiplicaremos 5
}

// Del 10 al 1
console.log("-----------------------")
console.log("contar hacia atras del 10 al 1")
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Suma del 1 al 5
console.log("-----------------------")
console.log("Sumar del 1 al 5")
let contador = 0
for (let i = 5; i >= 1; i--) {      // let i = 5: que arranque con i valiendo 5 // i--: Es lo opuesto a i++. Significa que, al final de cada vuelta, a i se le va a restar 1 en lugar de sumarle.
    contador += i                   // es exactamente lo mismo que escribir: contador = contador + i //
}                                   

/* 
El paso a paso (cómo lo piensa la computadora)
Si miramos lo que pasa adentro de la computadora en cada vuelta, se ve así:

Antes de empezar: contador vale 0.

Vuelta 1: i vale 5.
La computadora hace: 0 + 5. Ahora contador vale 5.

Vuelta 2: i baja a 4.
La computadora hace: 5 + 4. Ahora contador vale 9.

Vuelta 3: i baja a 3.
La computadora hace: 9 + 3. Ahora contador vale 12.

Vuelta 4: i baja a 2.
La computadora hace: 12 + 2. Ahora contador vale 14.

Vuelta 5: i baja a 1.
La computadora hace: 14 + 1. Ahora contador vale 15.
*/