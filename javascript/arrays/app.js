const persona1 = {
    nombre: "Juan",
    apellido: "Doe",
};

const persona2 = {
    nombre: "Jose",
    apellido: "Doe",
};

const persona3 = {
    nombre: "Jane",
    apellido: "Doe",
};

const personas = [persona1, persona2, persona3];

const response = {
    status: 200,
    message: "OK",
    data: personas,
};

// console.log(response);

// Métodos de arrays ---------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.unshift(0); // Agrega elemento al inicio del array. "shift" elimina y devuelve el primero.

let newNumbers = numbers.slice(4, 7); // slice no modifica el array, splice si.

// console.log(newNumbers);

// For ----------------
/* for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
} */

/* for (const element of numbers) {
    console.log(element);
} */

/* for (let i in numbers) {
    console.log(numbers[i]);
} */
