/*
    ---- ejemplo 1 ----
const persona = {
    nombre: "Pepe",
    edad: 23,
};


const objetoTexto = JSON.stringify(persona); // para guardar

const objetoDato = JSON.parse(objetoTexto); // para recuperar

localStorage.clear();
localStorage.setItem("usuario", JSON.stringify(persona));

const nombreEl = document.createElement("p");
const edadEl = document.createElement("p");

const { nombre, edad } = JSON.parse(localStorage.getItem("usuario"));

nombreEl.textContent = nombre;
edadEl.textContent = edad;

document.body.appendChild(nombreEl);
document.body.appendChild(edadEl);

const userEl = document.createElement("p");
userEl.textContent = `Nombre: ${nombre}. Edad: ${edad}`;

document.body.appendChild(userEl); */
const persona = {
    nombre: "Juan",
    edad: 23,
    dni: 12345678,
    hobby: "Pescar",
    ocupacion: "Programador",
};

for (const key in persona) {
    const clave = String(key);
    const valor = String(persona[key]);

    localStorage.setItem(clave, valor);
}

for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const valor = localStorage.getItem(clave);
    console.log(clave + ": " + valor);
}
