const h1El = document.querySelector("h1");
const bodyEl = document.querySelector("body");

const nombreUsuario = "pepe";

h1El.addEventListener("click", () => {
    h1El.innerText = `Hola ${nombreUsuario}`;
});

const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
    bodyEl.classList.toggle("dark-mode");
    darkModeButton.innerText = bodyEl.classList.contains("dark-mode")
        ? "Modo claro"
        : "Modo oscuro";
});

const textareaEl = document.querySelector("textarea");
const pEl = document.querySelector("p");
const limite = 50;

textareaEl.addEventListener("input", () => {
    const largoFrase = textareaEl.value.length;

    if (largoFrase <= limite) {
        pEl.innerText = `Te quedan: ${limite - largoFrase} caracteres`;
        pEl.style.color = "inherit";
    } else {
        pEl.innerText = `Tenes ${
            largoFrase - limite
        } caracteres de más, no se puede mandar el comentario.`;
        pEl.style.color = "red";
    }
});
