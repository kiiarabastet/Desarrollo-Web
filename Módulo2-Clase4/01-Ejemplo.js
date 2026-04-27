//  Declaración         
/*
La declaración es el momento en el que le presentas al sistema los elementos que vas a usar en tu programa (variables, funciones, clases, etc.). Básicamente, le dices a la computadora: "Oye, voy a usar un dato, resérvame un espacio en la memoria y llámalo X", o "Aquí están las instrucciones para hacer una tarea específica, guárdalas por si las necesito".
*/  
/*
Asignación de memoria: Sin la declaración, la computadora no sabría cuánta memoria necesita ni cómo encontrar la información más tarde

Previene errores: Establece las reglas desde el principio. Si intentas usar una variable o función que no has declarado, el programa no sabe qué hacer y colapsa (este es el clásico error de "variable no definida").
*/

// Entonces la DECLARACIÓN es:

function saludar() {
    // Aca va el código
    console.log("Hola")
}

//Ejecución

/*
Es el momento en que la computadora (el procesador, el navegador o el intérprete) lee tu código paso a paso y realiza las acciones reales. Aquí es donde las matemáticas se calculan, la información se guarda en bases de datos y los textos se muestran en la pantalla.
*/
/*
Da vida al código: Un código escrito, por muy bien declarado que esté, no es más que texto muerto hasta que se ejecuta. La ejecución es lo que convierte tus palabras en software funcional.

Evalúa la lógica: Durante la ejecución es donde realmente se pone a prueba tu lógica. Es cuando el programa toma decisiones (como si un usuario puso bien o mal su contraseña) basándose en las reglas que declaraste.
*/


// ¿Cómo se ejecuta?

// Ejecución         // Si no hacemos la declaración jamás de ejecutará
saludar()

saludar()

saludar()

// console.log()

// Hagamos una función un poquitin más compleja
function saludarNombre(nombre) {
    console.log("Hola " + nombre)
}

saludarNombre("Kiara")

saludarNombre("María")

saludarNombre("Violeta")

// ¿Como devuelvo un valor?
function suma(numero1, numero2) {
    numero1 + numero2
}

console.log(suma(4, 5)) // aca me da undefined porque suma no me devuelve ningun numero, aunque los sume

function suma2(numero1, numero2) {
    // usamos la palabra reservada "return"
    return numero1 + numero2
}

console.log(suma2(11, 4))

/* 
La funcionalidad del return es "devolver" un valor cuando la funcioon sea llamada
ademas, "corta" la ejecucion de la funcion, es decir, cuando llega al return, se concluye la ejecucion
*/