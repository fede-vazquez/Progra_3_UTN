// function sumar(a, b, cb) {
//     cb && cb(); // Si cb está definido. Lo ejecuta.
//     return a + b;
// }

// function mostrarMensaje() {
//     console.log("Hola");
// }

// console.log(sumar(3, 5, mostrarMensaje));
// console.log(sumar(3, 5, () => console.log("Holaa")));

// Aplicando en arrays. -----------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function multiplyTwo(n) {
// return n * 2;
// }

// .map -> no muta el array original. -----------------
// const result = numbers.map(multiplyTwo);
// const result = numbers.map(n => n * 2);

// console.log(result);

// .filter ------------------------------------

// const pares = numbers.filter(e => e % 2 == 0);
// const impares = numbers.filter(e => e % 2 != 0);
// const restult2 = numbers.filter(e => e >= 2 && e <= 8);

// console.log(pares);
// console.log(impares);
// console.log(restult2);

// .reduce ------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Practicar un poco esto, solo porque si.
// const result = numbers.reduce((prev, act) => {
// return prev + act;
// }, []);

// console.log(result);

// .find ------------------------------------

const numbers = [3, 5, 7, 8, 9, 597, 876];

const result = numbers.find(n => n <= 9); // Trae solo el primer resultado.

console.log(result);

// La recursividad es parte del paradugma funcional.
