//ARREGLOS O ARRAYS
//Listas o matrices

let alumnos = ['Pablo', 'Fabricio', 'Gabriela', 'Lucas'];

//Mostrar un elemento
alumnos[2]//Gabriela

//Mostrar el último elemento
alumnos[alumnos.length - 1];

//Concatenar elementos en un String

console.log(alumnos.join(", "));

//Iterar los elementos de un arreglo

for (let i = 0; i < alumnos.length; i++) {
    
    console.log(`Hola soy ${alumnos[i]}`)
    
}

for (const alumno of alumnos) {
    console.log(`Hola soy ${alumno}`);
}

//Agregar un elemento al arreglo

alumnos.push("Daniel", "Nayru");
alumnos.unshift("Joaquin");

//Eliminar elementos del arreglo
alumnos.pop();
alumnos.shift();

//Encontrar la posición a indice de un elemento
console.log(alumnos.indexOf("Daniel"));

//Saber si un elemento existe en el arreglo
console.log(alumnos.includes("Daniel"));

//Eliminar un elemento por su posición
let pos = alumnos.indexOf("Lucas");
alumnos.splice(pos, 1);

alumnos.splice(0, 3);

//Agregar alumnos
alumnos.push("Jose", "Alberto", "Juan", "Joaquín");
alumnos.splice(3, 0), "Franco", "Pablo";

//Reemplazar elementos en una posición
alumnos.splice(3, 2), "Edmundo", "Rarito";


//Nuevo arreglo
let alumnas = ['Gabriela', 'Rosita', 'Nayru', 'Rocio', 'Dami', 'Agustina'];

//Concatenar arreglos

let comision = alumnos.concat(alumnas);

//Ordenar arreglos de la a-z
console.log(comision.sort());

//Ordene de la z a la a 
console.log(comision.reverse());

//Extraer en un nuevo arreglo

let ausentes = comision.slice(3, 7);

//ENIGMA UNIVERSAL 
console.log(["🥚","🐔"].sort());

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras 
- primera palabra
- última palabra 
- las palabras colocadas en orden inverso
- las palabras ordenadas de la a la z  
- las palabras ordenadas de la z a la a. 
- Sacar toda esta información en consola
*/

let frase = "La sonrisa es la mejor respuesta para una mirada";

let palabras = frase.toLowerCase().split(" ");

console.log(`La cantidad de palabras es de ${palabras.length}`);
console.log(`La primera palabra es "&{palabras[0]}"`);
console.log(`La ultima palabra es ${palabras[palabras.length - 1]}`);
console.log(palabras.reverse());
console.log(palabras.sort());
console.log(palabras.sort().reverse());

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [23, 45, 78, 96, 145, 745]
let numero = parseInt(prompt("Ingrese un número"));

if(lista.includes(numero)){
    console.log(`El número ${numero} se encuentra en la lista`);
} else {
    console.log(`El número ingresado no está en la lista`);
}