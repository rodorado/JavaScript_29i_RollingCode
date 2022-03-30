//CONDICIONALES: hacer condiciones en nuestros programas

/*

si tal cosa se cumple
entonces hacer algo
sino
hacer otra cosa o no hacer nada

*/

//Condicionales: if y else

/*if(condiction){
    //tareas
}*/

/*let numero = prompt("Ingrese un número");
console.log(numero);
numero = parseInt(numero);
//let numero = parseInt(prompt("Ingrese un número"));*/


//numero par
/*if(isNaN(numero)){
    console.warn("El valor ingresado no es un número");
} else{
 if (numero % 2 === 0){
    console.log("El número es par");
 } else{
    //tarea
    console.error("El número no es par");
 }
}*/

/*
===
>=
<=
<
>
*/

/*let valor = 45;
if (valor) {
    console.log("El valor es verdadero");
} else{
    console.warn("El valor es falso");
}/*

/*
VALORES EVALUADOS COMO FALSOS

- null
- undefined
- ""
- 0
- NaN

*/

/** TAREA EN CLASES
 
 1. En una tienda de respuestos automotrices se tiene que el descuento
 depende del monto de venta, así:
 Se ingresa el monto de venta y el sistema debe calcular el descuento y
 restarlo del total según las reglas
 - Si el monoto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
 - Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
 - Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
 - Si el monto es mayor de 15000 el descuento es del 25%
 por ejemplo si se ingresa un monto de 5000 el descuento será 550, y por lo tanto, el valor a pagar será 4450.

 */

// OR // y AND &&

// si el precio es mayor a 500 o menor o igual a 1000  entonces el descuento es del 5%

/*let monto = parseFloat(prompt("Ingrese el monto del respuesto"));

if (!isNaN(monto)) {
    
 if (monto < 500) {
    console.log("Monto menores a $500 no tienen descuentos");
 } else if (monto >= 500 && monto <= 1000){
    console.log("El descuento es del %5");
    let montoDescuento = monto * 0.05;
    let montoConDescuento = monto - montoDescuento;
    console.log(`El monto a pagar con el descuento del %5 es de ${montoConDescuento}`);
 //Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
 }else if(monto > 1000 && monto <= 7000){
    console.log("El descuento es del %11");
 //Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
 }else if(monto > 7000 && monto <= 15000){
    console.log("El descuento es del %18");
 } else{
    console.log("El descuento es del %25");
 }
} else{
    console.warn("El valor ingresado no es un número");
}*/

//FIESTA
/*
Sólo puede entrar un mayor de edad osea edad >=18
Si no es mayor de edad entonces debe ir acompañado de un tutor
*/

let edad = 15;
let tutor = true;

/*if (edad >= 18) {
   console.log("Bienvenido a la fiesta 🤩");

}else if(true){
   console.log("Puede acceder a la fiesta, pero no te separes de tu tutor 🤐");

} 

else {
   console.warn"Menor de edad, no puede entrar 😓");
}*/

//Segunda forma

/*if (edad < 18 && tutor || tutor) {
   console.log("Bienvenido a la fiesta");
} else {
   console.warn("Es menor de edad, no puede entrar 😔");
}*/

//CONDICIONAL SWITCH

/*switch (variable) {
   case 10:
      //Accion
      break;
   case 20:
      //accion
      break;

   default:
      //mensaje
      break;
}*/

/**
 * Se nos pide hacer una aplicación para una verduleria que segun
 * la fruta ingresada devuelva el precio del kilo
 */

/*let fruta = prompt("Ingrese la fruta que desea consultar");
switch (fruta) {
   case "manzana":
   console.log("El precio del kilo de manzana es de $350");
      break;
   case "naranja":
      console.log("El precio del kilo de naranja es de $180");
      break;
   case "banana":
      console.log("El precio del kilo de banana es de $250");
      break;
   case "pomelo":
   case "mango":
      console.log("El precio del kilo de pomelo o mango es $300");
   break;
   default:
      console.log(`Lo siento, no disponemos de ${fruta} en stock`);
      break;
}*/

//Actividad 2

/**
 Hacer una aplicación que nos devuelva un mensaje diciondo que día de 
 la semana es
 */

 let dia = new Date().getDay();

 switch (dia) {
    case 0:
       console.log("Hoy es domingo");
       break;
   case 1:
      console.log("Hoy es lunes");
      break;
   case 2:
      console.log("Hoy es martes");
      break;
   case 3: 
     console.log("Hoy es miercoles");
     break;
   case 4: 
     console.log("Hoy es jueves");
     break;
   case 5: 
     console.log("Hoy es viernes");
     break;
   case 6: 
     console.log("Hoy es sabado");
     break;
 }

 let resultado = 0;
 let elemento = -5;

 switch (true) {
    case elemento >= 10:
       console.log("Soy muy buena usando switch");
       break;
    case elemento < 10 && elemento > 0:
       resultado = Math.pow(elemento, 2);
       console.log(`El numero ${elemento} elevado al cuadrado es de ${resultado}`);
      break;
    case elemento <= 0:
     resultado = elemento + elemento;
     console.log(`El número ${elemento} sumando consigo mismo es de ${resultado}`);  
     break;

 
    default:
       console.error("No sos tan bueno que digamos");
              break;
 }

 /**
  * Se nos pide hacer un programa donde el usuario ingrese dos
  * numeros y la operacion a realizar.
  * Según la operación (suma, resta, multiplicación y división)
  * devolver en consola el resultado
  */

 let num1 = parseFloat(prompt("Ingrese el primer número"));
 let num2 = parseFloat(prompt("Ingrese el segundo número"));


if(isNaN(num1) || isNaN(num2)){
 console.error("Algunos de los valores ingresados no es válido. Vuelva a ingresar los valores");
}else{
   let operacion = prompt("Ingrese la operación a realizar: suma, resta, multiplicacion, division");


switch (operacion) {
   case "suma":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
      case "resta":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
   case "multiplicacion":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;
   case "division":
         console.log(`${num1} / ${num2} = ${num1 / num2}`);
         break;
   default:
      break;
}
}