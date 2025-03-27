# Box-model

El modelo de cajas se basa en que cada elemento de HTML tiene:

-   Contenido: La medida del propio elemento.
-   Bordes: Lo puedo hacer más ancho o cambiarle el color/diseño.
-   Padding: La distancia entre el elemento y el borde.
-   Margin: La distancia entre cada una de sus cajas (cada caja tiene su propio margin).

## Medidas:

-   Absolutas: Una medida que no va a cambiar. px.
-   Relativas: Una medida que cambia dependiendo de algo. %, vw, vh.

## Tamaño de los elementos

Que el contenido tenga cierto tamaño no significa que el elemento vaya a tener si o si dicho tamaño.
Esto debido a algunos atributos, por ejemplo el borde y padding.
Ya que cada uno es una sumatoria, elemento + padding + border.

#### Box-sizing:

-   Content-box: Es el valor por defecto. Ancho + padding + border
-   Border-box: (ancho y/o alto) - (padding + border) (Solo si definimos dicho ancho y/o alto)

#### Casos de uso:

Por ejemplo, si queremos hacer un icono o logo, es recomendable el border-box, ya que con este podemos controlar más el tamaño del mismo.

# Position

-   static: Valor por defecto. El elemento va a ocupar su lugar.
-   absolute: Sale del "árbol" del elementos, una "fruta/rama flotante", no se sostiene con nada.
-   fixed: Parecido al absolute, pero va con el viewport, permitiendo que podamos hacer scroll por la página.
-   Relative: posición relativa al contenedor si no hay contenedor, se busca el ancestro más cercano con posición relative (body es el padre de todo)
    Funciona para poder utilizar los posicionamientos absolute y sticky dentro del elemento.

Solo los elementos posicionados en el HTML pueden ser movidos por el eje Z (z-index), por ejemplo, los elementos absolute siempre estarán por encima de los demás.
