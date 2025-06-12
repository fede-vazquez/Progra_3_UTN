# React

Los apuntes que hagamos no son de mucha ayuda, ya que cambia constantemente
Es una biblioteca, no un framework

React se identifica como una biblioteca para crear interfaces de usuario
Hace interfaces intuitivas y **reutilizables**

## Dom con React

Ya sabemos que es el DOM, y que el elemento principal de un html es la **raíz**
En React lo que hacemos es **hidratar** nuestra raíz con interactividad
basado en un concepto de la programación web moderna, los **componentes**

## Componente

Es una parte que es reutilizable siempre y cuando sea compatible.

## Jsx

Es una extensión y una manera de interpretar HTML
objetos: {}
arrays: []
strings: ""
jsx: ()
**jsx no es HTML**

## Compilador transpilador

Esta vez vamos a usar **babel**
Ejemplo de lo que hace en (https://babeljs.io/)

## Renderizar y Re-Renderizar

**sinónimos**

**Renderizar** -> Pintar / Construir / Montar / Hidratar

**Re-Renderizar** -> Actualizar / Re-hidratar

Un elemento jsx o componente debe renderizar un y solo un elemento jsx.

## Incrustar - Que? - Donde?

Que? -> Se incrustan expresiones
Sintaxis -> {aca dentro va la expresión}

Donde? -> Jsx

## Tipos de componentes

componentes de clase y componentes funcionales

**de clase:**

**funcionales:**

# Virtual dom

Crea una copia del dom, lo que hace después es comparar ambos, el dom y el virtual
Busca lo que cambió y luego lo modifica en el dom original.
Esto se llama SPA (Single Page Application)

# hooks

Lo que va a hacer es "enganchar" una funcionalidad específica
Todos arrancan con "use" y son funciones

## useState(valor)

Lleva el estado de un componente.

Los estados son asíncronos, por eso si tenemos un estado contador y lo seteamos con un contador++ no se actualiza correctamente

el setState te permite pasarle una función, la cual tiene como parámetro el estado anterior.
ejemplo: setContador(prevCont => prevCont + 1)
Esto gracias al callStack
