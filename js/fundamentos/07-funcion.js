//Funciones:

//son procedimientos encapsulados

/*function nombre(parametros){
    //instrucciones o lo que hará la funcion
}*/

//FUNCION DECLARATIVA: lleva nombre

let nombre = 'Santiago';

function saludarPersona(parametro){
 //console.log("Hola persona");
 console.log(`Hola ${parametro}!`);
}

saludarPersona(nombre);

let num1 = 35;
let num2 = 78;

function sumarValores(valor1, valor2) {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
}

sumarValores(num1, num2);

//FUNCIONES ANÓNIMAS O DE EXPRESIÓN: no tiene nombre, por lo tanto tengo definirla en una constante

const multiplicacion = function(){
    console.log(num1 + num2)
}


const calculadora = function( valor1, valor2, operacion){
    if(isNaN(valor1) || isNaN(valor2)){
        console.error("Falta un valor requerido");
    } else{
        switch(operacion){
            case '+':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
            case '-':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`); 
            break;
            case '*':
            console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);    
            break;
            case '/':
            console.log(`${valor1} % ${valor2} = ${valor1 / valor2}`);  
            break;
            default:
                console.warn("La operación ingresada no es valida");   
        }
    }
}

//Return: corta el proceso de la función y me devuelve el resultado declarado

const calculadoraReturn = function( valor1, valor2, operacion){
    if(isNaN(valor1) || isNaN(valor2)){
        return "Falta un valor requerido";
    }
        switch(operacion){
            case '+':
            return "${valor1} + ${valor2} = ${valor1 + valor2}";
    
            case '-':
            return "${valor1} - ${valor2} = ${valor1 - valor2}"; 
            
            case '*':
            return "${valor1} x ${valor2} = ${valor1 * valor2}";    
        
            case '/':
            return "${valor1} % ${valor2} = ${valor1 / valor2}";  
            
            default:
              return "La operación ingresada no es valida";   
        }

}

//podemos llamar una función dentro de otra función

function cubo(num){
 return Math.pow(num, 3);
}

let numeros = [23, 45, 2, 79];

function convertirACubo(arreglo, funcion){
    let numerosAlCubo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAlCubo = funcion(arreglo[i]);
        numerosAlCubo.push(numeroAlCubo);
    }

    return numerosAlCubo;
}

console.log(convertirACubo(numeros, cubo));

//Scape de una funcion

let heroe = "Superman"; //Variable global

function presentarHeroe(){

    let heroe = "Batman";
    return `Bienvenido ${heroe}`
}

console.log(presentarHeroe());

//Diferencias entre declarativas y anónimas

function calcularDescuento(precio, descuento){
    //cual es el precio con descuento
 let descuentoCalculado = 100 - descuento; 
 let montoConDescuento = (precio * descuento) / 100; 

 return `El importe a abonar es de ${montoConDescuento}`

}

console.log(calcularDescuento(2500, 15));
let montoConDescuento = (precio * descuentoCalculado) / 100;

  return `El importe a abonar es de $${montoConDescuento}`;
}

const calcularDescuento2 = function (precio, descuento) {
  //cual es el precio con descuento
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  return `El importe a abonar es de $${montoConDescuento}`;
};

/*
1- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
- A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
// let cadena='pepe el hombre de al lado'

const examinarCadena = function (cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "El texto está en mayúsculas";
  }

  if (cadena === cadena.toLowerCase()) {
    return "El texto está en minúsculas";
  }

  return "El texto tiene mayúsculas y minúsculas";
};

console.log(examinarCadena("hola funcion como estás"));

/*
2- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
*/

let ladoA = Number(prompt("Ingrese la altura del rectángulo"));
let ladoB = Number(prompt("Ingrese el ancho del rectángulo"));

const perimetroRectangulo = function (alto = 25, ancho = 10) {
  return 2 * (alto + ancho);
};

document.write(`El perímetro del rectángulo es de ${perimetroRectangulo()}`);
