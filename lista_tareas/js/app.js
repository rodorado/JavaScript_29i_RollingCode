let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
// El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis. Retorna el objeto que se corresponde con el texto JSON entregado.

let counter = document.getElementById("contador");
let contenedorTarjetas = document.getElementById("contenedor");

const handleSubmit = function (e) {
  e.preventDefault();
  let tarea = document.getElementById("text_tarea");
  tareas.push(tarea.value);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  // El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON

  tarea.value = "";
  tarea.select();
  agregarTarjeta();
};

const agregarTarjeta = function () {
  contenedorTarjetas.innerHTML = "";

  tareas.forEach(function (tarea, index) {
    let tarjeta = document.createElement("div");
    tarjeta.classList = "card mb-1";

    let contenidoTarjeta = `<div
    class="card-body d-flex justify-content-between align-items-center"
  >
    <span>📌 ${tarea}</span>
    <button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">x</button>
  </div>`;

    tarjeta.innerHTML = contenidoTarjeta;

    contenedorTarjetas.appendChild(tarjeta);
  });
  counter.innerText = tareas.length;
};

function borrarTarea(index) {
  //   console.log(index);
  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  agregarTarjeta();
}

document.getElementById("formulario").addEventListener("submit", handleSubmit);

agregarTarjeta();