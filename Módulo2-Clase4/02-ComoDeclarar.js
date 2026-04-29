// DECLARACIÓN TRADICIONAL

function suma(numero1, numero2) {
    return numero1 + numero2
}

/*----------------------------------*/

// LLAMADO O EJECUCIÓN

suma(2, 3) // 5
function suma(numero1, numero2) {         
    return numero1 + numero2            
}                                      
                                       
console.log(suma(56, 44))            // ¡¡Esto se lo agregué yo para probar, no estaba en el Git original!!!!

/*----------------------------------*/

// FUNCIONES ANÓNIMAS

const multiplicar = function (numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplicar(5, 4))       // ¡¡Esto se lo agregué yo para probar, no estaba en el Git original!!!!

/*------------------------------------*/

// LLAMADO

multiplicar(3, 3) 

console.log(multiplicar(3,3))         // ¡¡Esto se lo agregué yo para probar, no estaba en el Git original!!!!

/*------------------------------------*/

// ARROW FUNCTION (MODERNO)

const restar = (num1, num2) => num1 - num2 
console.log(restar(5, 2))            // ¡¡Esto se lo agregué yo para probar, no estaba en el Git original!!!!

/* 
Es importante entender que en la arrow function, cuando es de una sola linea, y no usamos las llaves {}
podemos luego de la flecha, escribir lo que se va a devolver sin la palabra return
ahora, si tiene mas de una linea, necesita las llaves, y el return
*/

const restar2 = (num1, num2) => {
    console.log("Hola")
    return num1 - num2
}
console.log(restar2(80, 30))

/* Las funciones son las mismas, sólo que cambia la manera de declarar*/
/* En un proyecto no se van combinando, por lo general, se usa una misma para todo el código*/ 
