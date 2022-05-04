//DOM
// DOCUMENT OBJECT MODEL

//obtener elemento por su etiqueta
let titulo1 = document.getElementsByTagName("h1");

//obtener elemento por su id
let titulo2 = document.getElementById("title");

//obtener elemento por su clase
let titulo3 = document.getElementsByClassName("titulo_bonito");

let parrafo1 = document.querySelector("h3");
let parrafo2 = document.querySelector("#parrafito");
let parrafo3 = document.querySelector(".text-center");

//cambiar el valor de un elemento
titulo2.innerText = "Bienvenidos al DOM";
parrafo2.innerText = "Clase práctica de javascript";

//Agregar un elemento al DOM
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Esto es un párrafo creado con javascript";

document.body.appendChild(nuevoParrafo);

let imagen = document.createElement("img");
imagen.src =
  "https://imagenes.razon.com.mx/files/image_940_470/uploads/2020/06/03/5ed7fc823c5e8.jpeg";
imagen.alt = "imagen bonita";
imagen.classList = "img-dom";
imagen.id = "imagencita";

document.body.appendChild(imagen);

//Insertar un elemento antes de otro

//reemplazar elemento
let span = document.createElement("span");
span.innerText = "Esto es una etiqueta span";

document.body.replaceChild(span, parrafo2);

//quitar un elemento
document.body.removeChild(nuevoParrafo);

//clonar un elemento
document.body.appendChild(imagen.cloneNode(true));
document.body.appendChild(imagen.cloneNode(true));

//-----------------------------------------------
let lista = document.getElementById("lista");
let item = document.createElement("li");
item.innerText = "Hacer la tarea que mandó Gaby";
let ul = document.querySelector("ul");

ul.appendChild(item);
//-------------------------------------------------

//Eventos-----------------------
function mostrarMensaje() {
  alert("Esto es un mensaje importante!!");
}

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function cambiarColor() {
  document.querySelector("#campo").classList = "fondo";
}

function quitarColor() {
  document.querySelector("#campo").classList = "";
}

function cambioInput(e) {
  console.log(e.target.value);
  console.log(e.target.name);
}

let nombre = "";

function obtenerNombre(e) {
  nombre = e.target.value;
}

function inputSaludar() {
  alert(`Bienvenido ${nombre}`);
}

let darkmode = false;

function modoOscuro() {
  if (!darkmode) {
    document.body.classList = "dark-mode";
    darkmode = true;
  } else {
    document.body.classList = "";
    darkmode = false;
  }
}

document
  .getElementById("text_nombre")
  .addEventListener("change", obtenerNombre);

document.getElementById("toggle").addEventListener("click", modoOscuro);