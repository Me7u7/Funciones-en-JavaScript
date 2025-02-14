/*
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/
let librosLeidos = [];
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    alert(`Libros leídos: ${librosLeidos[0]}, ${librosLeidos[1]}, ${librosLeidos[2]}`);
}

//PopUp para ingresar datos
let usuario = prompt("¿Cuál es tu nombre?");
let libro1 = prompt("Ingresa el título de un libro que hayas leído:");
agregarLibro(libro1);
let libro2 = prompt("Ingresa otro libro que hayas leído:");
agregarLibro(libro2);
let libro3 = prompt("Ingresa un último libro que hayas leído:");
agregarLibro(libro3);
//PopUp resultado
mostrarLibrosLeidos();
