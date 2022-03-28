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

let monto = parseFloat(prompt("Ingrese el monto del respuesto"));

if (monto < 500) {
    console.log("Monto menores a $500 no tienen descuentos");
} else if (monto >= 500 && monto <= 1000){
    console.log("El descuento es del %5");
//Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
}else if(monto > 1000 && monto <= 7000){
    console.log("El descuento es del %11");
//Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
}else if(monto > 7000 && monto <= 15000){
    console.log("El descuento es del %18");
} else{
    console.log("El descuento es del %25");
}