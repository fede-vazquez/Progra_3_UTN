// if ternario -----------------------------------------------

// let edad = 18;
// let msg = "";

// Se pueden concatenar varios operadores ternarios, pero no es lo indicado.

// edad >= 18 ? (msg = "Si") : (msg = "No");

// spread operator -----------------------------------------------
// ...algo
// Funciona en cualquier iterable
// Esto hace que copie la estructura que sea usada con el spread. Ayudando a la Inmutabilidad.

/* let cadena = "Hola mundo";
let array = [...cadena.replace(" ", "")];
console.log(array);

let numbers = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

// Inmutabilidad
let result = [...numbers, ...numbers2];

console.log(result);
*/

// -----------------------------------------------

/* const persona = {
    nombre: "Juan",
    apellido: "Perez",
};

const personaConEdad = {
    ...persona,
    edad: 22,
};

console.log(persona, personaConEdad);
*/

// Estructura Set (Cada valor dentro de la estructura será único) --------------------------

/* const conjunto = "ABCabc";
const conjunto2 = "ABCDEFdef";

const result = [...new Set([...conjunto, ...conjunto2])];

console.log(result);
 */

// destructuring -------------------------------------------

/* const persona = {
    nombre: "Juan",
    apellido: "Perez",
    direccion: {
        nombre: "Calle falsa",
        numero: 123,
    },
}; */

// const nombre = persona.nombre;
// const apellido = persona.apellido;

/* const {
    direccion: { numero },
} = persona;

console.log(numero.at(-1)); */

// rest operator y destructuring -------------------------------------------
// rest es con "..." pero no es lo mismo que el spread. Ya que el rest se utiliza solo dentro de un restructuring.
// el rest operator será el último dentro del destructuring.
const numbers = [1, 2, 3, 4, 5];

// const result = numbers.slice(2, 4);

/* const [n1, n2, ...resto] = numbers;
console.log(n1);
console.log(n2);

console.log(resto); */
// console.log(result);

// Diferencia:
// rest: Está a la izquierda del "=".
// spread: Está a la derecha del "=".
