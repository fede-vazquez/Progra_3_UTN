// Tipos de funciones - declaraciones

// Default function nombrada -> admite hoisting
// Declaración
function sumar(a, b) {
    return a + b;
}

// Invocación -> ()
const suma = sumar(1, 2);

// console.log(suma);

// Function anónima
// No admite hosting
// Se usa const porque no va a cambiar su lugar de memoria. Se usa con objetos, arrays, y funciones anónimas.
const resta = function (a, b) {
    return a - b;
};

// console.log(resta(6, 2));

// function auto-invocable, IIFE
// No admite hoisting
/* (function () {
    console.log("hola");
})(); */

// Arrow function
// No admite hoisting. -> Ver los 7 bindings de la palabra "this".
// No se puede utilizar como métodos de una clase/objeto. Al igual que la auto-invocable.

/* const myFunction = (a, b) => {
    // Esto se hace solo si la función tiene más de una linea.
    return a + b;
}; */

const myFunction = a => a.toUpperCase();

console.log(myFunction("Hola"));
