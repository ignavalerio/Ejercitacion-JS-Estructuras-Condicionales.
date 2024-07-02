// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

function determinarTipoTrianguloRectangulo(a, b, c) {
    if (esTrianguloRectangulo(a, b, c)) {
        // Determinar el tipo de triángulo
        if (a === b && b === c) {
            console.log("El triángulo es equilátero.");
        } else if (a === b || a === c || b === c) {
            console.log("El triángulo es isósceles.");
        } else {
            console.log("El triángulo es escaleno.");
        }
    } else {
        console.log("Los lados proporcionados no forman un triángulo rectángulo.");
    }
}

function esTrianguloRectangulo(a, b, c) {
    // Ordenar los lados para asegurar que a sea el lado más largo (hipotenusa)
    let [x, y, z] = [a, b, c].sort((x, y) => x - y);
    return x * x + y * y === z * z;
}

let lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo rectángulo:"));
let lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo rectángulo:"));
let lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo rectángulo:"));

determinarTipoTrianguloRectangulo(lado1, lado2, lado3);
