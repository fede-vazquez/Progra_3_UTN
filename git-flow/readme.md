# GitFlow

Flujo de trabajo con respecto a git

## Ramas

Funciona como una cronología de nuestro proyecto.
En cada rama existen diferentes versiones.
La unión entre 2 ramas se llama merch.

Lo normal es dividir la rama por cada persona del equipo, las cuales se irán agregando a la develop (o a otra).

### Algunas de estas ramas podrían ser:

1- Master/Main
Rama de producción, donde está el programa funcionando.

2- Release
En esta rama se verá que tan bien está el código (test de integración, con el QA), ya que será nuestra rama antes de la main.
Por ejemplo, las versiones betas.

3- Develop
En esta rama se va a ir enviando cada rama de los miembros del equipo.

4- Hot fix
5- Feature

### Tags

Los tags son el número de version en la cual estamos

1.2.23

1: Major
Un cambio grande en el programa, que cambia todo.

2: Feature
Cambios significativos, pero no tantos como major (ejemplo, agregue un footer).

23: Fix
Aca se trabaja con las ramas de Hot fix, ya que son arreglos que encontramos ya enviada la versión (los corner-case).

## Corner-case

Casos que no paso en ninguna rama, pero los usuarios lo encontraron en producción

# Merch

Hay 2 opciones para hacer esto, una es merchear directamente la rama, esto por mi propia cuenta. Pero otra opción es la Pull Request.

## Pull Request (PR)

Estas van a ocurrir cuando paso a otras ramas, develop, release, main.
La idea es que vos mandas una petición por GitHub, y luego otra persona tiene que aceptar dicha petición.

En el caso de que no se acepte, el responsable de que se niegue dicha PR se tiene que encargar de explicar por qué no se acepta (En GitHub existe una especie de foro para esto).

## CI/CD o DevOps

Continuos Integration y Continuos Delivery
Es un rol dentro de desarrollo, se encarga de construir, testear, y desplegar el proyecto.

## Test

Son muy importantes en cada una de las instancias del desarrollo, son los que ayudan a saber si puede o no aceptarse una PR.

# Estos temas serán teoría en los parciales, no prácticos.
