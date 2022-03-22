//Codigo de JavaScript
//En el navegador
      //alert("Bienvenidos a JavaScript");
      //En la consola
      console.log("Bienvenidos a JavaScript");
      console.log(5+7);
      //Navegador
      document.write("Buenas");

//Variables
//Las variables son espacios en memoria que usamos para guardar datos

//declara: se las crea
//inicializa: se le asigna un valor  

//Primera forma y que no se usa:
var nombre;
nombre = 'Pepito';

//Segunda forma y la que usaremos:
let apellido = 'Gonzalez';

//Tecera forma en constante:
const pi =3.14;

//Tipos de datos

//1.String: son los de textos
let cliente = 'Fabricio';
let alumnno = "Roberto Gonzales";
let mensaje = "Hola mundo"; 

//2. Number: son los números
let numero1 =34;
let numero2 =-52;
let numero3 = 56.89;

//3.Booleanos: son los verdaderos o falso. Boolean
let comprar = true;
let comer = false;

//4.null: es un valor nulo
let billetera = null;

//5.undefined: cuando declaro un valor, pero no está definido
let caja;

//Arrays: son los arreglos
let arreglo = ['Rocio', 22, true];
let alumno =['Namjoon', 'Seokjin', 'Yoongi'];

//6.Object: son los objectos
let persona = {
    nombre: 'Hoseok',
    apellido: 'Jung',
    edad: '28'
}

//Operadores
let num1 = 20;
let num2 = 2;

//1.Operadores aritmeticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero3;
let div = numero1 / numero2;
let resto = num1 % num2;

//2. Operadores Unitarios
++num2
--num2

//3. Operadores Relacionales
num1 = 22;
num2 = '22';
console.log(num1 == num2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("El resultado de la suma es " + suma);
console.log("El resultado de la suma es ", resta); //mantiene el tipo de dato

//4. Negación
let activado = true;
console.log(!activado);
