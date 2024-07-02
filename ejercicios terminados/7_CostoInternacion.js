// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.
function calcularCostoTotal(tipoEnfermedad, diasInternacion) {
    // Definir el costo por día según el tipo de enfermedad
    let costoPorDia = 0;
    switch (tipoEnfermedad) {
        case 1:
            costoPorDia = 125;
            break;
        case 2:
            costoPorDia = 116;
            break;
        case 3:
            costoPorDia = 120;
            break;
        case 4:
            costoPorDia = 132;
            break;
        case 5:
            costoPorDia = 138;
            break;
        default:
            console.log("Tipo de enfermedad no válido.");
            return;
    }

    // Calcular el costo total de internación
    let costoTotal = costoPorDia * diasInternacion;

    // Mostrar el costo total
    console.log(`El costo total de internación para un paciente con enfermedad tipo ${tipoEnfermedad} durante ${diasInternacion} días es: $${costoTotal}`);
}

let tipoEnfermedad = parseInt(prompt("Ingrese el tipo de enfermedad del paciente (1-5):"));
let diasInternacion = parseInt(prompt("Ingrese la cantidad de días de internación:"));

calcularCostoTotal(tipoEnfermedad, diasInternacion);
