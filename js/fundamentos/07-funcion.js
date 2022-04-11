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