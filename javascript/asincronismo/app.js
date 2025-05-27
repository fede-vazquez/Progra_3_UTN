/* const req = fetch(
    "https://dragonball-api.com/api/characters",
    // En este caso este objeto no es necesario.
    {
        method: "GET",
        headers: {
            "Content-type": "Application/JSON",
        },
    }
);

const res = req.then(res => res.json());
res.then(data => console.log(data));
 */
// optional chaining -> objeto?.posibleAtributo // Si no hay atributo devuelve undefine.

// async/await
// top level await -> Cuanto el scope de lo que estamos haciendo es global, no es necesario la función async, se puede poner directo

// async function obtenerDatosGatos() {
// }

// const res1 = await fetch("https://meowfacts.herokuapp.com");
// const data1 = await res1.json();
// console.log(data1);

async function getMany() {
    console.time("Tiempo carga");
    const promise1 = fetch("https://meowfacts.herokuapp.com").then(r =>
        r.json()
    );
    const promise2 = fetch("https://meowfacts.herokuapp.com").then(r =>
        r.json()
    );
    const promise3 = fetch("https://meowfacts.herokuapp.com").then(r =>
        r.json()
    );

    // all -> si falla una se rompe el hilo de ejecución.
    // allSettled -> te devuelve todas, ya sea que este bien o no.

    const data = await Promise.all([promise1, promise2, promise3]).catch(err =>
        console.log(err)
    );
    console.timeEnd("Tiempo carga");
}

getMany();

// obtenerDatosGatos();
