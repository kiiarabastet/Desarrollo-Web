/* 
do {
    CODIGO
} while (CONDICION)
*/

// La diferencia clave con el While es que DoWhile SE EJECUTA AL MENOS UNA VEZ por más que la condición nunca se cumpla

let i = 0

do {
    console.log(i)
    i++
} while (i < 5)

do {                                               //Primero ejecuta la condición
    console.log("ESTO SE EJECUTA UNA SOLA VEZ")
} while (i === "HOLA")                            //Luego pregunta si se cumple la condición

while (i === "HOLA") {
    console.log("ESTO NO SE VA A EJECUTAR")
}

/* 
Bucle, Cuando usar:

for             repeticiones conocidas (Tengo que ejecutar este codigo X veces) // EL QUE MAYOR VECES VAMOS A UTILIZAR

while           depende de la condición // ENCONTRAREMOS OTRAS OPCIONES DE USAR FOR PARA CASI NUNCA UTILIZAR WHILE 

do while        se ejecuta al menos una vez (Aunque nunca se cumpla la condicion) // SE UTILIZA MUY RARA VEZ // PROBABLEMENTE OLVIDAREMOS SU EXISTENCIA
*/