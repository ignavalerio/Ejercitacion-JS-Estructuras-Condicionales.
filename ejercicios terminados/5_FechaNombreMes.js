// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

function mostrarFechaConNombreDiaMesAnio(dia, mes, anio) {
    // Verificar si el mes está dentro del rango válido (1-12)
    if (mes < 1 || mes > 12) {
        console.log("Error: El número ingresado para el mes no es válido.");
        return;
    }

    // Verificar si el día está dentro del rango válido (1-31)
    let diasEnMes = new Date(anio, mes, 0).getDate(); // Obtener cantidad de días en el mes y año dados
    if (dia < 1 || dia > diasEnMes) {
        console.log("Error: El día ingresado no es válido para el mes y año especificados.");
        return;
    }

    // Verificar si el año es mayor que 2000
    if (anio <= 2000) {
        console.log("Error: El año debe ser mayor que 2000.");
        return;
    }

    // Obtener nombre del mes
    let nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let nombreMes = nombresMeses[mes - 1]; // mes - 1 porque el array es base 0

    // Mostrar la fecha en el formato solicitado
    console.log(`${dia}-${nombreMes}-${anio}`);
}

// Ejemplo de uso
let dia = parseInt(prompt("Ingrese el día:"));
let mes = parseInt(prompt("Ingrese el mes (como número, ej. 1 para enero):"));
let anio = parseInt(prompt("Ingrese el año:"));

mostrarFechaConNombreDiaMesAnio(dia, mes, anio);
