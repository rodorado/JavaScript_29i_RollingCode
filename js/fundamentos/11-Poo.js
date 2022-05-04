//Usuarios modelo

class Usuario {
    constructor(nombre, username, password, estado = true) {
      this.nombre = nombre;
      this.username = username;
      this.pass = password;
      this.estado = estado;
    }
  
    presentacion() {
      console.log("-----Tarjeta de presentación-----");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Nombre de usuario: ${this.username}`);
    }
  }
  let user1 = new Usuario("Pepito", "pepe", "123456", false);
  let user2 = new Usuario("Josefina", "jose2022", "123ttt");
  
  Usuario.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre}`);
  };
  
  //Herencia
  
  class Administrador extends Usuario {
    constructor(nombre, username, password, puesto, estado = true) {
      super(nombre, username, password, estado);
      this.puesto = puesto;
    }
    cambiarEstado() {
      this.estado = !this.estado;
    }
    superPresentacion() {
      this.presentacion();
      console.log(`Puesto: ${this.puesto}`);
    }
  }
  
  let admin = new Administrador(
    "Gabriela Perez",
    "gabyCopada",
    "holamiundo",
    true,
    "Gerente regional"
  );
  
  let admin2 = new Administrador(
    "Jose",
    "josecito",
    "123456",
    undefined,
    "Gerente de ventas"
  );
  
  /*
      Cuenta bancaria
      1-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
      - Una propiedad titular.
      - Una propiedad saldo, teniendo como valor inicial 0.
      - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
      - Un método extraer() que permita retirar la cantidad pasada como parámetro.
      - Un método informar() que retorne la información del estado de la cuenta. 
      - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
      
      */
  
  class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
    ingresar(valor = 0) {
      if (valor > 0) {
        this.saldo += valor;
      } else {
        console.error("El monto debe ser mayor que 0");
      }
      this.informar();
    }
    extraer(valor = 0) {
        if (valor > this.saldo || valor < 0) {
            console.error("Monto inválido o Saldo insuficiente ");
          } else {
            this.saldo -= valor;
          }
          this.informar();
        }
        informar() {
          console.log(`-----Estado de Cuenta-----`);
          console.log(`Titular: ${this.titular}`);
          console.log(`Saldo: $${this.saldo}`);
        }
      }
      
      let cuenta001 = new Cuenta("Alejandro Gordillo", 80000);
      let cuenta002 = new Cuenta("Lucia Perez");
      
      /*
      2- Crea una clase llamada Persona que siga las siguientes condiciones:
      Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
      Los métodos que se debe poder utilizar  son:
      mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
      mostrarDatos: devuelve toda la información del objeto.
      generaDNI(): genera un número aleatorio de 8 cifras.
      */
      
      class Persona {
        constructor(nombre, edad, sexo, peso, altura, nacimiento, dni = "") {
          this.nombre = nombre;
          this.edad = edad;
          this.dni = dni;
          this.sexo = sexo;
          this.peso = peso;
          this.altura = altura;
          this.nacimiento = nacimiento;
        }
        mostrarGeneracion() {
          switch (true) {
            case this.nacimiento >= 1930 && this.nacimiento <= 1948:
              console.log(
                `Perteneces a la generación Silent Generation y tu razgo característico es la Austeridad 😐`
              );
              break;
            case this.nacimiento >= 1949 && this.nacimiento <= 1968:
              console.log(
                `Perteneces a la generación Baby Boom y tu razgo característico es la Ambicion 🤑`
              );
              break;
            case this.nacimiento >= 1969 && this.nacimiento <= 1980:
              console.log(
                "Perteneces a la generación X y tu razco característico es Obsesión por el Éxito 😎"
              );
              break;
            case this.nacimiento >= 1981 && this.nacimiento <= 1993:
              console.log(
                "Perteneces a la generación Y y tu razco característico es Frustación 😖"
              );
              break;
            case this.nacimiento >= 1994 && this.nacimiento <= 2010:
              console.log(
                "Perteneces a la generación Z y tu razco característico es Irreverencia 😜"
              );
              break;
            default:
              console.log(
                "Perteneces a una generación nueva y tu rasgo característico está por descubrirse 🤔"
              );
              break;
          }
        }
        mostrarDatos() {
          console.log("------Datos personales------");
          console.log(`Nombre: ${this.nombre}`);
          console.log(`Edad: ${this.edad}`);
          console.log(`Dni: ${this.dni}`);
          console.log(`Sexo: ${this.sexo}`);
          console.log(`Peso: ${this.peso}`);
          console.log(`Altura: ${this.altura}`);
          console.log(`Año de nacimiento: ${this.nacimiento}`);
        }
        generarDni() {
          if (!this.dni) {
            for (let i = 0; i < 8; i++) {
              let numerito = Math.round(Math.random() * 9);
              this.dni += String(numerito);
            }
            console.log(`El DNI generado es: ${this.dni}`);
          }
        }
      }
      
      // - Escribe una clase **Producto** para crear objetos. Estos objetos, deben presentar las **propiedades** código, nombre y precio, además del **método** imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
      // Posteriormente, cree **tres instancias** de este objeto y guárdalas en un array.
      // Por último, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados.
      
      class Producto {
        constructor(codigo, nombre, precio) {
          this.codigo = codigo;
          this.nombre = nombre;
          this.precio = precio;
        }
        imprimeDatos() {
          document.write(`<b>------Datos del producto------</b>`);
          document.write(`<br><b>Código:</b> ${this.codigo}`);
          document.write(`<br><b>Nombre:</b> ${this.nombre}`);
          document.write(`<br><b>Precio:</b> $${this.precio}<br><br>`);
        }
      }
      
      let productos = [];
      
      function agregarProducto() {
        for (let index = 0; index < 3; index++) {
          let codigo = new Date().getTime();
          let nombre = prompt("Ingrese el nombre del producto");
          let precio = prompt("Ingrese el precio del producto");
          productos.push(new Producto(codigo, nombre, precio));
        }
      }
      
      function mostrarDatos() {
        for (let i = 0; i < productos.length; i++) {
          productos[i].imprimeDatos();
        }
      
        // productos.forEach(function (producto) {
        //   producto.imprimeDatos();
        // });
      }
      
      /*
      3- Crear una clase Libro que contenga al menos las siguientes propiedades:
      ISBN
      Título
      Autor
      Número de páginas
      Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
      “El libro xxx con ISBN xxx creado por el autor xxx tiene  xxx páginas”
      Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
      Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
      */
      
      class Libro {
        constructor(isbn, titulo, autor, numpag) {
          this.isbn = isbn;
          this.titulo = titulo;
          this.autor = autor;
          this.numpag = numpag;
        }
        mostrarLibro() {
          console.log(
            `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numpag} páginas`
          );
        }
        compararPaginas(libro) {
          if (this.numpag > libro.numpag) {
            let cantidadPaginaDif = this.numpag - libro.numpag;
            return `El libro ${this.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${libro.titulo}`;
          }
          if (this.numpag < libro.numpag) {
            let cantidadPaginaDif = libro.numpag - this.numpag;
            return `El libro ${libro.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${this.titulo}`;
          }
      
          return "Ambos libro tienen la misma cantidad de páginas";
        }
      }
      
      let libro1 = new Libro(
        "987-566-131-7",
        "Cómo hacer amigos",
        "Dale Carnegie",
        303
      );
      
      let libro2 = new Libro("978-987-1949-58-8", "PHP desde cero", "Users", 192);
      
      // function compararPaginas(){
      
      // }