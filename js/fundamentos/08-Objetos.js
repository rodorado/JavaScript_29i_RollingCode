//Objetos

let  alumno = {
    nombre: 'Josefina Alvarez', 
    edad: 38,
    dni: 41961187,
    curso: 'Fullstack',
    saludar:function() {
        console.log(`Hola soy ${this.nombre}`);
    },

    calcularVejez: function(){
        if(this.edad > 35){
            console.log('Tamos cerca de los 40 amigo!');
        } else {
            console.log('Tranquilo, todavía hay esperanzas!');
        }
    },
};

//Obtener valores

console.log(alumno.nombre);
console.log(alumno["curso"]);

//Agregar una nueva propiedad al objeto
alumno.domicilio = 'Esquina Norte';

//Modificar un valor de alguna propiedad
alumno.nombre ="Josefina Gonzalez";

//Eliminar una propiedad del objeto
//delete alumno.edad; 

//Como recorrer un objeto
for (const atributo in alumno) {
    if(atributo !== 'saludar' && atributo !== 'calcularVejez'){
console.log(`${atributo}: ${alumno[atributo]}`);
}
}

/*
1- Objeto Persona con las propiedades nombre, edad y genero, y el 
metodo obtDetalles(), que muestre por pantalla las propiedad de
la persona
*/

let persona = {

    nombre: 'Florencia Espeche',
    edad: 34,
    genero: 'Femenino',
    obtDetalles: function(){
        if(propiedad !== "obtDetalles"){
        for(const propiedad in this){
            console.log(`${propiedad}: ${this[propiedad]}`);
        }
    }
    }
}

/*
2- Crea un objeto llamado auto que tenga algunas 
características como el color, marca, modelo y si 
está encendido o apagado. Crea los métodos necesarios 
para permitir encender y apagar el auto.
*/

let auto ={
    color: 'rojo',
    marca: 'Fiat',
    modelo: 'Palio',
    anio: 2018,
    encendido: false,
    encenderApagar: function(){
        this.encendido =! this.encendido
        if(this.encendido){
            console.log("El vehículo está encendido")
        } else{
            console.log("El vehículo está apagado");
        }
    }
}
