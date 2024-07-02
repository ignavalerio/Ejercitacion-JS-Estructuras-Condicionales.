//Este método se utiliza para convertir una cadena de texto en un número entero. Elimina los caracteres no numéricos al principio de la cadena y devuelve el número entero resultante.//

let num1 = "10"; 
let num2 = "20";

let suma = parseInt(num1) + parseInt(num2);
console.log(suma);

//Parsear datos “parseFloat{}”
//Este método se utiliza para convertir una cadena de texto en un número decimal (de punto flotante). 
//También elimina los caracteres no numéricos al principio de la cadena y devuelve el número decimal resultante.

let num3 = "3.14";
let num4 = "2.5";
let suma1= parseFloat(num3) + parseFloat(num4);
console.log(suma1);

//Parsear datos “boolean{}”
//Este constructor de objetos se utiliza para convertir un valor en su equivalente booleano. Puede convertir valores como cadenas de texto, números, objetos y más.
var valor1 = "hola";
var valor2 = "";
var valor3 = 0;
console.log(Boolean(valor1));
console.log(Boolean(valor2));
console.log(Boolean(valor3));


//Operadores de comparación//
//En JavaScript, existen varios operadores de comparación que se utilizan 
//para comparar valores y producir un resultado booleano (verdadero o falso) según la evaluación de la comparación.

//Operadores de igualdad (‘==’)
//El operador de igualdad compara si dos valores son iguales, sin tener en cuenta el tipo de dato. Si los valores son iguales, devuelve true; de lo contrario, devuelve false.

console.log(5==5); //true
console.log("5"=="5") //true 
console.log(5==10); //false

//Operadores de desigualdad (‘!=’)
//El operador de desigualdad compara si dos valores no son iguales, sin tener en cuenta el tipo de dato. Si los valores son diferentes, devuelve true; de lo contrario, devuelve false.

console.log(5 != 3); // true
console.log(5 != 5); // false
console.log('5' != 5); // false
console.log('hello' != 'Hello'); // true

//Operador de Desigualdad Estricta (!==)
//Para comparar valores considerando también el tipo de dato, se usa el operador de desigualdad estricta !==. Este operador devuelve true si los valores y/o los tipos de dato son diferentes, y false si los valores y los tipos de dato son iguales.

console.log(5 !== 3); // true
console.log(5 !== 5); // false
console.log('5' !== 5); // true
console.log('hello' !== 'Hello'); // true

//Operadores de igualdad estricta (‘===’)
//El operador de igualdad estricta compara si dos valores son iguales y del mismo tipo de dato. Si los valores son iguales y del mismo tipo, devuelve true; de lo contrario, devuelve false.

console.log(5===5);
console.log("5"==="5");

//Operadores de desigualdad estricta (‘!==’)
//El operador de desigualdad estricta compara si dos valores no son iguales o si son de diferente tipo de dato. Si los valores son diferentes o de diferente tipo, devuelve true; de lo contrario, devuelve false.

console.log(5!== 5); // false
console.log("5"!== 5); // true

//“Operador de mayor que (>)”
//El operador de mayor que compara si el valor de la izquierda es mayor que el de la derecha. Si la condición es verdadera, devuelve true; de lo contrario, devuelve false.

console.log(5 > 3); // true
console.log(5 > 5); // false

//“Operador de mayor o igual que (>=)”
//El operador de mayor o igual que compara si el valor de la izquierda es mayor o igual que el de la derecha. Si la condición es verdadera, devuelve true; de lo contrario, devuelve false.

console.log(5 >= 5); // true
console.log(5 >= 3); // true
console.log(2 >= 5); //false

//“Operador de menor o igual que (<=)”
//El operador de menor o igual que compara si el valor de la izquierda es menor o igual que el de la derecha. Si la condición es verdadera, devuelve true; de lo contrario, devuelve false.     

console.log(5 <= 5); // true
console.log(5 <= 3); // false
console.log(2 <= 5); // true

//Operadores lógicos//
//Estos operadores lógicos se utilizan para combinar y evaluar expresiones lógicas más complejas en JavaScript. Pueden ser útiles para tomar decisiones condicionales basadas en múltiples condiciones.
//Los operadores lógicos en JavaScript se utilizan para combinar y evaluar múltiples expresiones lógicas. Hay tres operadores lógicos principales: 
//&& (AND lógico), || (OR lógico) y ! (NOT lógico). //


//Operador AND lógico (&&)
//El operador && devuelve true si ambas expresiones que se evalúan a su izquierda y a su derecha son verdaderas. Si al menos una de las expresiones es falsa, devuelve false.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//Operador OR lógico (||)
//El operador || devuelve true si al menos una de las expresiones que se evalúan a su izquierda o a su derecha es verdadera. Solo devuelve false si ambas expresiones son falsas.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//Operador NOT lógico (!)
//El operador  “ ! ”  Invierte el valor de una expresión lógica. Si la expresión es true, devuelve false. Si la expresión es false, devuelve true.
 
console.log(!true); // false
console.log(!false); //true

