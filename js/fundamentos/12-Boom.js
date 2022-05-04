//BOM
//Browser Object Model

// window

//Navigator
const obtenerUbicacion = function () {
    navigator.geolocation.getCurrentPosition(function (posicion) {
      console.log(posicion.coords.latitude, posicion.coords.longitude);
    });
  };
  
  //Location
  
  // location.reload() //recargar la página
  // location.href="https://google.com"
  // location.assign('https://google.com')
  
  // location.replace('https://rollingcodeschool.com')
  
  //history
  // history.go(1) //me lleva a la página siguiente en el historial
  // history.go(-2) //me lleva dos páginas para atras en el historial
  
  //Funciones de tiempo
  
  //setTimeout
  //nos permite ejecutar acciones DESPUÉS de transcurrido un cierto tiempo
  
  const redireccionar = function () {
    setTimeout(function () {
      // location.href = "https://rollingcodeschool.com";
      console.log("Hola que tal");
    }, 3000);
  };
  
  //setInterval
  //Nos permite ejecutar acciones CADA cierto tiempo
  let repetir;
  
  function contador() {
    let num = 0;
    repetir = setInterval(function () {
      console.log(num++);
    }, 1000);
  }
  
  function segundero() {
    repetir = setInterval(function () {
      console.log(new Date().getSeconds());
    }, 1000);
  }
  
  //clearInterval
  //Detener los intervalos que yo defina
  
  const detenerIntervalo = function () {
    clearInterval(repetir);
  };