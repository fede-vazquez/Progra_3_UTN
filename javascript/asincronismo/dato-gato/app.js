/*
    Crear un index.html y un app.js
    crear un p que tenga un dato random de un dato que se va a llenar cuando le demos a un botón "Dato random de gato"
*/

const btnEl = document.getElementById("boton-generar");
const pEl = document.getElementById("dato-random");

btnEl.addEventListener("click", () => {
    fetch("https://meowfacts.herokuapp.com/")
        .then(res => res.json())
        .then(({ data }) => {
            console.log(data);
            pEl.textContent = data[0];
        });
});

// Buscar una api que traduzca texto y ponerlo en español.
