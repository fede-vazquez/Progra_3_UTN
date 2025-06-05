const persona = {
    nombre: "Juan",
    apellido: "Perez",
    apodo: "El dios de la programación",
};

console.log(Number(true));
console.log(String(false));
console.log(Boolean("algo"));

console.log(Object.values(persona));
console.log(Object.keys(persona));
console.log(Object.entries(persona));

// Simulación de enum
const TYPES = Object.freeze({
    admin: "ADMIN",
    user: "USER",
});

TYPES.admin = "no admin";

console.log(TYPES);
// Esto funciona para evitar los magic strings y magic numbers

// if(variable == TYPES.admin)
