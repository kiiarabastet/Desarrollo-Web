//Imaginemos que queremos agregar o sacar elementos del array

let numeros = [1, 2, 3, 4, 5, 6, 7,]

console.log(numeros)

// Supongamos que le quiero agregar un numero más, el 8

// Uso el metodo push, que lo que hace, es agregar al final del array, un nuevo elemento

numeros.push(8)

console.log(numeros)

// Supongamos que tenemos otro array y le queremos quitar el último elemento

let animales = ["Zorro", "Pájaro", "Gato", "Tigre"]

// con el método pop, le eliminamos el último elemento 
animales.pop()

console.log(animales)

/* Recorres el array con un for y vas "pasando en limpio" todos los elementos que no sean el que queres eliminar
al terminar el for, reemplazas el array con esos valores

let array1 = ["Zorro", "Pájaro", "Gato", "Tigre"]
let array2 = []

for(let i = 0; i < array.length; i++){
    if(array1[i) !== "Gato"){
        array2.push(array1[i])
    }
}

array1 = array2
*/
// -----------------------------------------------

// Ahora imaginemos que queremos agregar un elemento al principio

// lo hacemos con el metodo unshift

let ciudades = ["París", "Venecia", "La Plata"]

ciudades.unshift("Lima")
console.log(ciudades)      // node 02-Métodos,js para compronar que funciona antes de que el próximo código de abajo lo elimine

// Ahora queremos eliminarle el primer elemeto
// lo hacemos con el metodo shift

ciudades.shift()
console.log(ciudades)