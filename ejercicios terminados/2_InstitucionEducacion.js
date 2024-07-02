// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.

function determinarAccion(carrera, notaPresentacion) {
    // Verificar si la carrera es vespertina o diurna
    if (carrera.toLowerCase() === 'vespertina') {
        if (notaPresentacion >= 6) {
            console.log("El estudiante exime.");
        } else if (notaPresentacion >= 3.5) {
            console.log("El estudiante rinde examen.");
        } else {
            console.log("El estudiante reprueba.");
        }
    } else if (carrera.toLowerCase() === 'diurna') {
        if (notaPresentacion >= 3.5) {
            console.log("El estudiante rinde examen.");
        } else {
            console.log("El estudiante reprueba.");
        }
    } else {
        console.log("Carrera no válida.");
    }
}

let carrera = prompt("Ingresa la carrera (vespertina/diurna):");
let notaPresentacion = parseFloat(prompt("Ingresa la nota de presentación:"));
determinarAccion(carrera, notaPresentacion);
