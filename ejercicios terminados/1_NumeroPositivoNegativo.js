// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. 
//El número cero no es ni positivo ni negativo ni par ni impar.

// Función para verificar el número
function verificarNumero(N) {
    // Verificar si el número es cero
    if (N === 0) {
        console.log("El número es cero.");
        return;
    }
    
    // Verificar si el número es positivo o negativo
    if (N > 0) {
        console.log("El número es positivo.");
    } else {
        console.log("El número es negativo.");
    }
    
    // Verificar si el número es par o impar
    if (N % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

// Ejemplo de uso
let N = parseInt(prompt("Ingresa un número:"));
verificarNumero(N);

