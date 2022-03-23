//Match
let numeros =
//Redondeando numeros
console.log(Math.floor(45.89)); //redondea hacia abajo
console.log(Math.ceil(360.52)); //redondea hacia arriba
console.log(Math.round(125.15)); //según el decimal

//Obtener el valor máximo de una lista de números
console.log(`El número máximo de la lista es ${Math.max(56,23,-802,2356,100000,4566665)}`);
//Obtener el valor minimo de una lista de números
console.log(`El número minimo de la lista es ${Math.min(56,14,789)}`);

//Convertir a numero entero
let numero = 67.8523169;
console.log(parseInt(numero));
//Convertir un numero a decimal
let numero2 = "456.256";
console.log(parseFloat(numero2));

//Elevar un número a una potencia
let base = 9;
let exponente = 2;

console.log(`El número ${base} agregado a la potencia ${exponente} es de ${Math.pow(base,exponente)}`);

//Raiz cuadrada
console.log(`La raiz cuadrada de 64 es ${Math.sqrt(64)}`);

//Números aleatorios
console.log(Math.ceil(Math.random()*50 +1));

//Devolver 2 decimales
console.log(Math.round(numero*100)/100); //forma 1
console.log(parseFloat(numero.toFixed(2))); //forma 2

//PARA INTERACTURAR CON EL USUARIO EN UN MENSAJE COMO ALERT

let numerito = prompt("Ingrese un numero entero");
console.log(numerito * 2);
console.log(`El numero ${numerito} redondeado es ${Math.round(numerito)}`);