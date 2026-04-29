/* 
Lo ideal y más recomendado en programación es poner la mayor cantidad de variables posibles DENTRO de las funciones (Scope Local) y usar la menor cantidad posible de variables por fuera (Scope Global).

Aquí te explico por qué crear variables dentro de las llaves { } es tu mejor opción:

1. Mantienes el orden y evitas accidentes (Encapsulación)
Imagina que el Scope Global (afuera) es la plaza pública de tu ciudad, y las funciones son los talleres de los artesanos. Si todos los artesanos dejan sus herramientas (variables) tiradas en la plaza pública, eventualmente alguien se va a tropezar con ellas, o alguien más las va a tomar por error y romperá tu trabajo.

Al poner una variable dentro de la función, la mantienes privada y segura. Nadie desde afuera puede modificarla por accidente.

2. Evitas que los nombres choquen (Colisiones)
Si tienes un programa muy grande, es probable que quieras usar variables con nombres comunes como total, contador o resultado.

Si las declaras por fuera, solo puedes usar esos nombres una vez en todo tu archivo. Pero si las declaras por dentro, puedes repetir el nombre en diferentes funciones sin que se peleen entre sí, porque cada una vive en su propio "mundo aislado".

*/

function calcularSuma() {
    let resultado = 5 + 5; // Este "resultado" es privado de esta función
    return resultado;
}

console.log(calcularSuma())

function calcularResta() {
    let resultado = 10 - 2; // No hay problema, este es OTRO "resultado" distinto
    return resultado;
}

console.log(calcularResta())


/* 3. Ahorras memoria de la computadora
Como te mencioné antes, cuando una función termina su trabajo, todas las variables que creaste adentro con let se destruuyen automáticamente. ¡Y eso es algo bueno! Significa que estás liberando la memoria RAM de la computadora.

Si declaras todo por fuera (Global), esas variables vivirán en la memoria de la computadora para siempre (o hasta que cierres el programa/navegador), consumiendo recursos innecesariamente.
*/

/*
¿Entonces, cuándo uso cada una?

Usa let por DENTRO (Local): En el 95% de los casos. Siempre que necesites guardar datos temporales, hacer cálculos dentro de una función, o guardar información que a nadie más le importa fuera de esa tarea específica.

Usa let por FUERA (Global): Solo para cosas que absolutamente todo tu programa necesita saber o compartir. Por ejemplo, configuraciones generales, el nombre del usuario que inició sesión, o el idioma de la aplicación.
*/