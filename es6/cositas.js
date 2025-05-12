// Uso del módulos
// esm -> EcmaScript Modules -> se usa "import/export"
// node -> CommonJS -> se usa "require"

// A la hora de importar se le puede nombrar como quiera
import { sumar, restar } from "./aritmetica.js";

console.log(sumar(4, 2));
console.log(restar(4, 2));
