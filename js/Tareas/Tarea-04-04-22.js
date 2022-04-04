//TAREA 4-04-22
//1. 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

 /*let numero1 = parseFloat(prompt("Ingrese el primer número"));
   let numero2 = parseFloat(prompt("Ingrese el número 2"));
    
 console.log(`El número mayor ingresado es ${Math.max(numero1, numero2)}`);*/

 //--------------------------------------------------------------------------------------------------------------

 //7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

 /*let num1 = parseFloat(prompt("Ingrese el primer número"));
 let num2 = parseFloat(prompt("Ingrese el segundo número"));
 let num3 = parseFloat(prompt("Ingrese el tercer número"));

    console.log(`El número menor ingresado es ${Math.min(num1, num2, num3)}`);*/
//-----------------------------------------------------------------------------------------------------------------

//8.- Escribe un programa que pida un número y diga si es divisible por 2

/*let numb = parseFloat(prompt("Ingrese un número"));
let div = numb % 2;

if (div === 0) {
     console.log(`El número ${numb} es divisible por dos`);
} else {
    console.log(`El número ${numb} no es divisible por dos`);
}*/

//-----------------------------------------------------------------------------------------------------------------

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase");
console.log(`Las vocales que aparecen en la frase: ${frase}`);

if(frase.includes("a")){
  console.log("a");
}
if(frase.includes("e")){
  console.log("e");
}

if(frase.includes("i")){
  console.log("i");
}

if(frase.includes("o")){
  console.log("o");
}

if(frase.includes("u")){
  console.log("u");
}


//-------------------------------------------------------------------------------------------------------------------

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//11.Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


/*let number1 = parseFloat(prompt("Ingrese un número"));

if (number1 % 2 === 0) {
  console.log(`El número ${number1} es divisible por dos`);
} else if(number1 % 3 === 0) {
  console.log(`El número ${number1} es divisible por tres`);
} else if(number1 % 5 === 0){
  console.log(`El número ${number1} es divisible por cinco`);
} else if(number1 % 7 === 0){
  console.log(`El número ${number1} es divisible por siete`);
} else {
  console.error("No es divisible por ninguno de los números propuestos");
}*/
