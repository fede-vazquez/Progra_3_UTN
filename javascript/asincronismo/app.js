const req = fetch(
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

// optional chaining -> objeto?.posibleAtributo // Si no hay atributo devuelve undefine.
