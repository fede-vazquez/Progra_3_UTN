export function sumar(n1, n2) {
    return n1 + n2;
}

export function restar(n1, n2) {
    return n1 - n2;
}

// Esto para poder importar todo junto.
export default {
    sumar,
    restar,
};

// Exportar módulos por default y nombrados

// default -> Solo se puede uno por modulo.
// export default sumar;

// nombrado -> Se hace solo agregando "export" al inicio de cada function
