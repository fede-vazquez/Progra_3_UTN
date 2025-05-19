// asincronismo

const mainEl = document.querySelector(".container");

// setTimeout() Es como una espera antes de que pase.
// Recibe un handler (es un callback) y un timeout (se mide en mili-segundos)

/* setTimeout(() => {}, 3000);
const pEl = document.createElement("p");
pEl.textContent = "Hola";
mainEl.appendChild(pEl); */

// setInterval() Es como un for infinito

/* setInterval(() => {
    const pEl = document.createElement("p");
    pEl.textContent = "Hola";
    mainEl.appendChild(pEl);
}, 3000); */

// --- Objeto Date

// const horas = fecha.getTime() / 1000 / 60 / 60;
// console.log(horas);

// Hoy es Lunes 19 de Mayo, y son las ...

function getLindoDate() {
    const fecha = new Date();

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    return {
        numeroDia: fecha.getDate(),
        dia: dias[fecha.getDay()],
        mes: meses[fecha.getMonth()],
        time: {
            hora: fecha.getHours(),
            minutos: fecha.getMinutes(),
            segundos: fecha.getSeconds(),
        },
    };
}

const formatTime = n => (n < 10 ? "0" + n : n);

const pEl = document.createElement("p");

mainEl.appendChild(pEl);

setInterval(() => {
    const { numeroDia, dia, mes, time } = getLindoDate();

    const { hora: horas, minutos, segundos } = time;
    pEl.textContent = `Hoy es ${dia} ${numeroDia} de ${mes}, y son las ${horas}:${minutos}:${formatTime(
        segundos
    )}`;
}, 1000);
