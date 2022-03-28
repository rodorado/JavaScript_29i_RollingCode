//TAREA 1

//Obtener un número aleatorio entre 1 y 100
let numero = Math.ceil(Math.random()*100);
console.log(`El número aleatorio obtenido es ${numero}`);

//Calcular su ráiz cuadrada y mostrar en consola el resultado
console.log(`La raiz cuadrada de ${numero} es ${Math.sqrt(numero)}`);

//Elevarlo a la quinta potencia y mostrar en consola el resultado
let exponente = 5;

console.log(`El número ${numero} agregado a la potencia ${exponente} es de ${Math.pow(numero,exponente)}`);


//TAREA 2

//Según la siguiente lista de números: 120,250,78,96,-38,45,72,1450,2380
      //Mostrar en consola el menor
      console.log(`El número menor de la lista es ${Math.min(120,250,78,96,-38,45,72,1450,2380)}`);

      //Mostrat en consola el mayor
      console.log(`El número máximo de la lista es ${Math.max(120,250,78,96,-38,45,72,1450,2380)}`);


//TAREA 3

//Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:

//45.895025
let nro1 = 45.895025;
console.log(`El número ${nro1} mostrado en 2 decimales es ${parseFloat(nro1.toFixed(2))}`);
console.log(`Redondeado es ${Math.round(nro1)}`);

//56.788789
let nro2 = 56.788789;
console.log(`El número ${nro2} mostrado en 2 decimales es ${parseFloat(nro2.toFixed(2))}`);
console.log(`Redondeado es ${Math.round(nro2)}`);

//78.413582
let nro3 = 78.413582;
console.log(`El número ${nro3} mostrado en 2 decimales es ${parseFloat(nro3.toFixed(2))}`);
console.log(`Redondeado es ${Math.round(nro3)}`);

//PLUS: devolver las consignas de las tareas en un template string que indique qué es lo que estamos obteniendo.
//LISTO.