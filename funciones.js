// Función para sumar
function Sumar(num1 = 0, num2 = 0){
    let total = num1 + num2;
    console.log(`Total: ${total}`);
    return total;
}

// Llamada a la función Sumar
let resultado = Sumar(10, 10);
console.log(resultado);
console.log(Sumar(12, 20));
console.log(Sumar(2, 3)); 

// Función para saludar
function Saludar(nombre){
    console.log(`Hola, bienvenido(a) ${nombre}`);
}

Saludar("Akeri");
Saludar("Alondra");

// Función para restar
function Restar(a, b){
    let total = a - b;
    console.log("Restar:");
    console.log(total);
}

Restar(13, 2);

// Variables globales
let nombre = "Ana";
let apellido = "Villanueva";

// Función sin parámetros
function Casita(){
    console.log(`Esta es una casita de ${nombre} ${apellido}`);
}
Casita();

// Solicitar datos al usuario
let usuario = prompt("¿Cuál es tu nombre?");
let gatos = prompt("¿Cuántos gatos tienes?");
let perros = prompt("¿Cuántos perros tienes?");

console.log(`Tienes ${perros} perros y ${gatos} gatos.`);
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros.`);
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros.`);



/*
// Función para calcular el área de un triángulo, rectángulo y círculo
function areaCirculo(){
    let radio = prompt("Ingresa el radio del círculo");
    let resultado = Math.PI * parseFloat(radio)**2;
    alert(`El área del círculo es ${resultado}`);
}
function areaTriangulo(){
    let base = prompt("Ingresa la base del triángulo");
    let altura = prompt("Ingresa la altura del triángulo");
    let resultado = parseFloat(base) * parseFloat(altura) / 2;
    alert(`El área del triángulo es ${resultado}`);
}
function areaRectangulo(){
    let base = prompt("Ingresa la base del rectángulo");
    let altura = prompt("Ingresa la altura del rectángulo");
    let resultado = parseFloat(base) * parseFloat(altura);
    alert(`El área del cuadrado es ${resultado}`);
}
*/