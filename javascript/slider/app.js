import data from "./data.js";
// Hacemos una copia para no modificar el anterior.
let people = [...data];

const containerEl = document.querySelector(".slide-container");
const nextBtnEl = document.querySelector(".next-btn");
const prevBtnEl = document.querySelector(".prev-btn");

if (data.length == 1) {
    nextBtnEl.style.display = "none";
    prevBtnEl.style.display = "none";
}

if (data.length == 2) {
    people = [...data, ...data];
}

nextBtnEl.addEventListener("click", () => startSlider());
prevBtnEl.addEventListener("click", () => startSlider("prev"));

containerEl.innerHTML = people
    .map((person, slideIndex) => {
        let position = "next";
        if (slideIndex === 0) {
            position = "active";
        }
        if (slideIndex === people.length - 1) {
            position = "last";
        }

        if (data.length <= 1) {
            position = "active";
        }

        return genArticle({ position, ...person });
    })
    .join("\n");

function genArticle({ position, img, name, job, text }) {
    return `
    <article class="slide ${position}">
                <img src=${img} alt="${name}" class="img">
                <h4>${name}</h4>
                <p class="title">${job}</p>
                <p class="text">${text}</p>
                <div class="quote-icon">
                    <i class="fas fa-quote-right"></i>
                </div>
    </article>
    `;
}

function startSlider(type) {
    let lastEl = document.querySelector(".last");
    const activeEl = document.querySelector(".active");

    let nextEl = activeEl.nextElementSibling;
    if (!nextEl) {
        nextEl = containerEl.firstElementChild;
    }

    // Elimina las clases que siempre se van a cambiar.
    activeEl.classList.remove("active");
    lastEl.classList.remove("last");

    // Si no se manda un tipo significa que es el botón de next. Entonces eliminarmos la clase del elemento siguiente
    if (!type) {
        nextEl.classList.remove("next");
    }

    if (type === "prev") {
        // Si se va para atras, el elemento activo será el siguiente, y el anterior será el activo.
        activeEl.classList.add("next");
        lastEl.classList.add("active");

        // El nuevo elemento anterior será el anterior del antiguo anterior.
        lastEl = lastEl.previousElementSibling;

        // Si no hay elemento anterior, significa que el activo es el primer hijo del contenedor, entonces el anterior será el ultimo del contenedor.
        if (!lastEl) {
            lastEl = containerEl.lastElementChild;
        }

        // Eliminamos la clase "next" del nuevo elemento anterior y le agregamos la clase "last"
        lastEl.classList.remove("next");
        lastEl.classList.add("last");

        return;
    }

    // Si es next solamente cambiamos el activo que será el anterior, el anteríor que será un siguiente más, y el siguiente que será el nuevo activo.
    nextEl.classList.add("active");
    activeEl.classList.add("last");
    lastEl.classList.add("next");
}
