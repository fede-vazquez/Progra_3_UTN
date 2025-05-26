# eventLoop

En el navegador tenemos solo un hilo de procesamiento, es por esto que las llamadas se guardan en una **callStack**
Estas llamadas se harán en un loop, compartiendo el único hilo que hay hasta que se terminen de cumplir.

## callback hell

Esto ocurre cuando una función toma un callback como argumento, y este recibe otro callback, y así sucesivamente.

# Promesas

Las promesas de ES6 tiene 3 estados.

Pendiente: todavía no se completo
Resuelta: completa y aprobada
Rechazada: completa y rechazada
