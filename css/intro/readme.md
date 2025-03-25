#### CSS (Cascading Styles Sheets)

CSS es la parte que le da estilo a la página web.
Para utilizarlo se utiliza el formato key/value;

### Tipos de formas de vincular el CSS

-   En linea: Uso de la propiedad style en las etiquetas. Ejemplo: style="color=red;" (Son más específicos a los estilos en el propio HTML)

-   En el propio HTML. Dentro de head, y dentro de la etiqueta style

-   En un archivo style.css

### shorthand

Se pueden representar los valores hexadecimales que se repiten utilizando solo un número o color por cada par de colores.
ejemplo: #ff ff ff -> #f f f (todo junto)
A la hora de poner colores en css se puede colocar un cuarto atributo, el cual sería la opacidad.

### Selectores

Selector{
propiedad: valor;
propiedad: valor;
}

Selectores:

-   De etiqueta: h1, h2, etc.
-   De id: #nombre-id. (Solo puede tenerlo una etiqueta).
-   De clase: .nombre-clase. (Se pueden repetir)

## Especificidad de los selectores

Cuando pasamos el mouse por encima de un selector, vs code nos va a mostrar 3 números. Estos nos dan info sobre que tan específico es.

### Box-model

El modelo de cajas se basa en que cada elemento de HTML tiene:

-   Contenido: La medida del propio elemento.
-   Bordes: Lo puedo hacer más ancho o cambiarle el color/diseño.
-   Padding: La distancia entre el elemento y el borde.
-   Margin: La distancia entre cada una de sus cajas (cada caja tiene su propio margin).

## Medidas:

-   Absolutas: Una medida que no va a cambiar. px.
-   Relativas: Una medida que cambia dependiendo de algo. %, vw, vh.
