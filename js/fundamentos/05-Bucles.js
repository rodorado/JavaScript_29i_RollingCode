//BUCLES

//--------------

//WHILE

/*let vecesSumar = 10;
let totalSuma = 0;

while (vecesSumar > 0) {
    totalSuma += 1;
    //totalSuma = totalSuma + 1;
    vecesSumar -= 1;
    console.log(`Total de la suma: ${totalSuma} | veces que se sumó: ${vecesSumar}`);
}
console.log(`Total: ${totalSuma}`);*/

//TAREA: Crear un script que calcule la tabla del 2

/*let tabla = 2;
let valor = 1;

while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);
}

//DO WHILE
let vueltas = 3;
let respuesta = ""

do{
    respuesta = prompt("Ingrese un nombre");
    console.log(`Hola ${respuesta}! Bienvenido/a`);
} while (vueltas > 0);*/

//TAREA: 
/*
Crear un script tipo trivia que pregunte al usuario la capital de un pais. El usuario tendrá tres intentos, si falla pierde.
*/

/*let respuestaCorrecta = "HELSINKI";
let acierto = false;
let contador = 0;

while (contador < 3 && acierto === false) {
    let respusario = prompt("Capital de Finlandia");
    if(respusario.toUpperCase() === respuestaCorrecta){
    acierto = true; 
    console.log("MUY BIEN! ACERTASTE");
    }

    contador ++; 
}

if(acierto === false){
    console.error("Lo siento, perdiste... loose
}*/

//FOR

/*for (let i = 0; i < 10; i++) {
    //tareas o acciones
    
}*/

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla

/*let tabla = parseFloat(prompt("Ingrese la tabla a calcular"));

for (let index = 1; index <10; index++){
    console.log(`${tabla} x ${index} = ${tabla * index}`);
}*/

//Tarea: según la cantidad de alumnos ingresados, cargar los nombres

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));

let lista = "";
let nombre = "";

if (!isNaN(cantidadDeAlumnos)) {
    
    for(let i = 0; i > 0; i++){
    nombre =prompt("Ingrese el nombre del alumno");
    //Volviendo si no vale nada
    lista += `${nombre}\n`;
    }
   console.log(lista);
} else{
    console.log("La cantidad ingresada no es valida");
}


//Ejercicio: obtener las vocales de una frase

let frase = prompt("Ingrese una frase");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i).toLowerCase();

    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        vocales += letra;
    }
    
}

console.log(vocales);
console.log(`La cantidad de vocales en la frase ${frase} es de ${vocales.length}`);
