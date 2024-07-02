// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.
function determinarSignoZodiacal(dia, mes) {
    // Verificar mes y día para determinar el signo zodiacal
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        return "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        return "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        return "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return "Piscis";
    } else {
        return "Fecha no válida para determinar el signo zodiacal.";
    }
}

// Ejemplo de uso
let dia = parseInt(prompt("Ingrese el día de nacimiento:"));
let mes = parseInt(prompt("Ingrese el mes de nacimiento (como número, ej. 1 para enero):"));

let signoZodiacal = determinarSignoZodiacal(dia, mes);
console.log(`Tu signo zodiacal es ${signoZodiacal}.`);