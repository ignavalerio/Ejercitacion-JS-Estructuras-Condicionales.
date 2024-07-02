// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

function calcularPrecioFinal(precioCompra, colorBolita) {
    let descuento = 0;

    // Determinar el descuento según el color de la bolita
    switch (colorBolita.toLowerCase()) {
        case 'blanco':
            descuento = 0;
            break;
        case 'verde':
            descuento = 0.1; // 10%
            break;
        case 'amarilla':
            descuento = 0.25; // 25%
            break;
        case 'azul':
            descuento = 0.5; // 50%
            break;
        case 'anaranjada':
            descuento = 1; // 100% (descuento total)
            break;
        default:
            console.log("Color de bolita no válido.");
            return;
    }

    // Calcular el precio final con descuento
    let precioFinal = precioCompra * (1 - descuento);

    // Mostrar el precio final
    console.log(`El cliente deberá pagar $${precioFinal.toFixed(2)} después del descuento.`);
}


let precioCompra = parseFloat(prompt("Ingrese el valor total de la compra:"));
let colorBolita = prompt("Ingrese el color de la bolita (blanco, verde, amarilla, azul, anaranjada):");

calcularPrecioFinal(precioCompra, colorBolita);
