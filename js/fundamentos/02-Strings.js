//Strings

let nombre = 'Eugenio Daniel Rosendo Ignacio';
let apellido = 'Perez';

let frases = "            Bienvenido a la clase";

//Cuantos caracteres

console.log("El nombre tiene", nombre.length, "caracteres");
console.log(frases.length);

//Como quitar los espacios en blanco adelante y atrás
console.log(frases);
frases = frases.trim();

console.log(frases.length);
console.log(frases);

nombre.trim();

//Mayúsculas
console.log(apellido.toUpperCase());

//Minusculas
console.log(nombre.toLowerCase());

//Extraer una letra
console.log(frases.charAt(5));
//Extraer una parte de la frase
console.log(frases.substring(0,2));
console.log(nombre.substring(15));

//Separar letras
console.log(apellido.split(""));
//console.log(frases.split(" "));

let texto = 'Hola-que-asi';
console.log(texto.split("-"));

//Unir letras (solo con arreglo)
let arregloTexto = texto.split("-");
console.log(arregloTexto.join(" "));

//Obtener la última letra de una palabra o frase
console.log(apellido.charAt(apellido.length-1));

//Tarea dentro de clase

let palabra = "marmota"; //pasarla a mayuscula
                         //pasarla a minuscula
                         //capitalizar la palabra (la 1era letra en mayúscula)

//1. 
console.log(palabra.toUpperCase());
//2.
console.log(palabra.toLowerCase());
//3.
let primerLetra = palabra.charAt(0);
let primeraLetraMayus = primerLetra.toUpperCase();
let restoPalabra = palabra.substring(1);
let palabraCapitalizada = primeraLetraMayus + restoPalabra;
console.log(palabraCapitalizada);

//Template String
let edad = 22;
console.log('Bienvenido nombre apellido, gracias por tu visita');
console.log(`Bienvenido ${nombre} ${apellido}, gracias por tu visita, tu edad es ${edad}`);



