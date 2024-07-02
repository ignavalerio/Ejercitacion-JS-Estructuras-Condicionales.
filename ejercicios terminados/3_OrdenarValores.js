// 3. Ordenar en forma creciente tres valores diferentes A, B, C.
function ordenarTresValores(A, B, C) {
    let primero, segundo, tercero;

    // Comparaciones para determinar el orden creciente
    if (A <= B && A <= C) {
        primero = A;
        if (B <= C) {
            segundo = B;
            tercero = C;
        } else {
            segundo = C;
            tercero = B;
        }
    } else if (B <= A && B <= C) {
        primero = B;
        if (A <= C) {
            segundo = A;
            tercero = C;
        } else {
            segundo = C;
            tercero = A;
        }
    } else {
        primero = C;
        if (A <= B) {
            segundo = A;
            tercero = B;
        } else {
            segundo = B;
            tercero = A;
        }
    }
    console.log("Orden creciente: " + primero + ", " + segundo + ", " + tercero);
}

// Ejemplo de uso
let A = parseFloat(prompt("Ingresa el valor de A:"));
let B = parseFloat(prompt("Ingresa el valor de B:"));
let C = parseFloat(prompt("Ingresa el valor de C:"));
ordenarTresValores(A, B, C);