let persona = {
    edad: 25,
    nombre: "Fede",
    apellido: "Vazquez",
    fechaNacimiento: "04/04/2000",
    activo: true,
};

let persona2 = persona; // binding (Enlace)

// console.log("Persona: ", persona);

persona.activo = false; // -> setter
// console.log(persona.activo); // -> getter

// Para crear un atributo.
persona.id = 123;

// Para eliminar un atributo.
delete persona.activo;

// console.log("Persona2: ", persona2);

// Otra forma de seleccionar un atributo.
const a = "nombre";

console.log(persona[a]);

// Clases ------------------------
class Persona {
    #_nombre;
    #_apellido;

    constructor(nombre, apellido) {
        (this._nombre = nombre), (this._apellido = apellido);
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let personaClase = new Persona("Juan", "Perez");

console.log(personaClase);
