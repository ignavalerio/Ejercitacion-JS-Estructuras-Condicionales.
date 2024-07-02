// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|
function asignarCalificacion(nombreEstudiante, notaExamen) {
    let calificacion = "";

    // Determinar la calificación según la nota del examen
    if (notaExamen >= 0 && notaExamen <= 2.9) {
        calificacion = "Desaprobado";
    } else if (notaExamen >= 3 && notaExamen <= 5.9) {
        calificacion = "Aprobado";
    } else if (notaExamen >= 6 && notaExamen <= 8.9) {
        calificacion = "Notable";
    } else if (notaExamen >= 9 && notaExamen <= 10) {
        calificacion = "Sobresaliente";
    } else {
        console.log("Nota no válida. La nota debe estar entre 0 y 10.");
        return;
    }

    // Mostrar la calificación asignada
    console.log(`El estudiante ${nombreEstudiante} ha obtenido una calificación de ${calificacion}.`);
}

// Ejemplo de uso
let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
let notaExamen = parseFloat(prompt("Ingrese la nota del examen final (0 a 10):"));

asignarCalificacion(nombreEstudiante, notaExamen);
