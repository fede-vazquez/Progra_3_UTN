// console.log("Hola mundo", 215, true)

// node --watch archivo.js

// Var // Forma incorrecta,
// Let // Forma correcta de declarar variables. Va con scopes

// Const // Constante de cualquier tipo.

// var nombre = null // Esto no devuelve null, devuelve un object. Por un error del creador que no se pudo arreglar por la retro compatibilidad.

// Hoisting -------------------------------
// {
//     console.log(nombre)
// }
// console.log(nombre);
// var nombre = "Hola"

// Operaciones ----------------------------
// {

//     console.log("---Operaciones---");
//     let a = true
//     let b = false
//     console.log("Not a: ", !a);
//     console.log("Not b: ", !b);

//     console.log("OR a o b: ", a || b);

//     console.log("AND a y b: ", a && b);
// }

// Operaciones ----------------------------
// {
//     console.log("---Operaciones Aritméticas---");

//     let a = 1
//     let b = 2

//     console.log("a: ", a);
//     console.log("b: ", b);

//     console.log("Suma: ", a + b);
//     console.log("Resta: ", a - b);
//     console.log("Multiplicación: ", a * b);
//     console.log("División: ", a / b);
//     console.log("Modulo: ", a % b);
// }

// Concatenación ----------------------------
// let a = "3";
// let b = 1;

// console.log(a - b);
// Como b es número y queremos restar, lo que hace es convertir a en un número.
// Esto con todas las operaciones que no sean +, con la suma lo concatena

// Arrays ----------------------------

const numbers = [1, 2, 3];

let numbers2 = numbers; // Esto no hace que se copie el array. numbers2 va a apuntar al mismo espacio de memoria que numbers.

numbers2 = [1, 2, 3, 4];
console.log(numbers);
console.log(numbers2);

console.log(numbers === numbers2);
// = es definición // == es comparación // === es comparación estricta
