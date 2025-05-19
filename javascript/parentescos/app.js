const padreEl = document.querySelector(".familia");

// -- Los textos sin etiquetas se pueden considerar como hijos
// -- En este caso, si padreEl tiene un:
/*
    div.familia >
        hola
        div.hijo
        <
*/
// -- Esto me va a traer "hola", si no hay nada lo que hace es traer un salto de linea.
// console.log(padreEl.firstChild); // Esto hace lo anterior.

// -- Para traer el primer elemento hijo hay que usar:
// console.log(padreEl.firstElementChild);

// -- En caso de traer muchos hijos podemos usar:
// -- Esto se trae también los textos sin etiquetas.
// -- Los saltos de línea también cuenta como línea
// console.log(padreEl.childNodes);

// -- Para traer solo elementos:
// console.log(padreEl.children);

const hijoEl = document.querySelector(".hijo");

// console.log(hijoEl);

// --- ir del hijo al padre ---

console.log(hijoEl.parentNode);
// --- ir del hijo al abuelo ---
console.log(hijoEl.parentNode.parentNode);

const hermanoEl = document.querySelector(".hermano");

// Para los hermanos se usa Sibling, y la lógica es igual a las anteriores.
console.log(hermanoEl.previousElementSibling);
