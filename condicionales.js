//Condicionales
//Los condicionales en JavaScript son estructuras de control que te permiten tomar decisiones basadas en el resultado de una evaluación lógica. Se utilizan para ejecutar diferentes bloques de código según se cumplan o no ciertas condiciones. 
//Los condicionales más comunes son "if", "else", y "else if"

//Cuando utilizas condicionales, se evalúa una expresión o condición que produce un valor booleano (verdadero o falso). Dependiendo de si el valor de la condición es verdadero o falso, se ejecuta el bloque de código correspondiente.


//“estructura if”//
//La estructura if en JavaScript permite tomar decisiones en el flujo de ejecución de un programa basadas en una condición. 
//Se utiliza para ejecutar un bloque de código si la condición especificada es verdadera y, opcionalmente, 
//se puede proporcionar un bloque else para ejecutar otro conjunto de instrucciones en caso de que la condición sea falsa.

if (condición) {
    // Bloque de código a ejecutar si la condición es verdadera
} else {
    // Bloque de código a ejecutar si la condición es falsa (opcional)
}

//EJEMPLO 1:
//En una declaración de if simple, solo se proporciona el bloque de código a ejecutar cuando la condición es verdadera. 
//El bloque de código está delimitado por llaves {} y puede contener una o varias instrucciones.
let edad1 = 18;

if (edad1 >= 18) {
    console.log("Eres mayor de edad.");
}

//EJEMPLO 2:
let edad = 16;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}


//ELSE//
//El bloque else se utiliza en conjunto con la estructura if en JavaScript para proporcionar una alternativa de código que se ejecuta cuando la condición del if es falsa. 
//Proporciona una rama de ejecución alternativa cuando la condición especificada no se cumple.

//En el bloque else, se especifica el código que se ejecutará cuando la condición del if sea falsa.
//El bloque else es opcional, pero puede ser útil para manejar casos alternativos o establecer un comportamiento predeterminado cuando la condición del if no se cumple.

//El bloque else permite definir una rama alternativa de ejecución, lo que significa que se pueden realizar diferentes acciones según el resultado de la condición. 
//Puede haber múltiples bloques else if después del if para evaluar y manejar diferentes condiciones.

//Ejemplo: Determinación de un Número Positivo, Negativo o Cero
//Este ejemplo determina si un número es positivo, negativo o cero, y utiliza el bloque else para manejar el caso en que el número es negativo.

let numero = -5;

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero === 0) {
    console.log("El número es cero.");
} else {
    console.log("El número es negativo.");
}

//Condición inicial (if):
//Se evalúa si numero es mayor que 0.
//Si esta condición es verdadera, se ejecuta el bloque de código dentro del if, imprimiendo "El número es positivo."

//Condición alternativa (else if):
//Si esta condición es verdadera, se ejecuta el bloque de código dentro del else if, imprimiendo "El número es cero."

//Bloque else:
//Si ninguna de las condiciones anteriores es verdadera, se ejecuta el bloque de código dentro del else, imprimiendo "El número es negativo."


//If anidado
//El "if anidado" se refiere a la práctica de incluir una estructura if dentro de otra estructura if. Esto permite evaluar múltiples condiciones de forma jerárquica y tomar decisiones basadas en esos resultados.
if (condición1) {
    // Bloque de código a ejecutar si condición1 es verdadera
    if (condición2) {
        // Bloque de código a ejecutar si condición2 también es verdadera
    } else {
        // Bloque de código a ejecutar si condición2 es falsa
    }
} else {
    // Bloque de código a ejecutar si condición1 es falsa
}

// ejemplo1 
let numer0 = 4;

if (numer0> 0) {
    console.log("El número es positivo.");
    if (numer0 % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
} else if (numer0 === 0) {
    console.log("El número es cero.");
} else {
    console.log("El número es negativo.");
    if (numer0 % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

//Estructura Else If
//La estructura else if se utiliza como una extensión de la estructura if en JavaScript. Permite evaluar múltiples condiciones en secuencia y ejecutar diferentes bloques de código según el resultado de cada una de esas condiciones.

if (condición1) {
    // Bloque de código a ejecutar si condición1 es verdadera
} else if (condición2) {
    // Bloque de código a ejecutar si condición2 es verdadera
} else if (condición3) {
    // Bloque de código a ejecutar si condición3 es verdadera
} else {
    // Bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

//ejemplo:
let puntaje = 85;

if (puntaje >= 90) {
    console.log("Calificación: A");
} else if (puntaje >= 80) {
    console.log("Calificación: B");
} else if (puntaje >= 70) {
    console.log("Calificación: C");
} else if (puntaje >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}


//Estructura switch//
//La estructura switch en JavaScript es una declaración de control de flujo que permite evaluar una expresión y ejecutar diferentes bloques de código en función de los casos coincidentes. 
//Proporciona una alternativa más legible y estructurada cuando se deben tomar múltiples decisiones basadas en el valor de una expresión.

switch (expresión) {
    case valor1:
        // Bloque de código a ejecutar si expresión === valor1
        break;
    case valor2:
        // Bloque de código a ejecutar si expresión === valor2
        break;
    // Puedes tener tantos casos como necesites
    default:
        // Bloque de código a ejecutar si ninguno de los casos anteriores coincide
}

//ejemplo:
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}


//La estructura switch es especialmente útil cuando se necesitan comparar múltiples casos posibles y se quiere evitar una serie de declaraciones if-else anidadas. 
//Proporciona una forma más clara y concisa de estructurar el código.