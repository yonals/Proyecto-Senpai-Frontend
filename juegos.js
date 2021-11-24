/* Me guardo en variables los elementos necesarios */
const listaDeInscriptosUL = document.getElementById("lista-inscriptos");
const botonAgregar = document.getElementById("agregar");
const barrita = document.getElementById("nombre");
const listaDeBoton = document.getElementById("juego");

/* Crear un elemento y colocarlo en pantalla */
function crearNuevoInscripto(nombre, juego) {
  // Crear un nuevo elemento li y guardarlo en una variable
  const nuevoInscripto = document.createElement("li");
  // Cambiar el texto interno del li
  nuevaInscripto.textContent = `${juego} - Autor: ${nombre}`;

  // Agregar una clase CSS al li
  nuevoInscripto.classList.add(play);

  // Agregar el li a la lista de tareas
  listaDeInscriptosUL.appendChild(nuevoInscripto);
}

botonAgregar.addEventListener("click", function () {
  fetch("http://localhost:3000/juegos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({
      nombre: barrita.value,
      juego: listaDeBoton.value,
    }),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuestaJSON) {
      const inscriptoNuevo = respuestaJSON.inscriptoNuevo;

      crearNuevoInscriptoHTML(
        nuevoInscripto.nombre,
        nuevoInscripto.juego,
      );
    });
});

lista-inscriptosUL.addEventListener("click", function (evento) {
  evento.target.remove();
});

function cargarNombre() {
  /* Utilizar fetch para acceder a las tareas */
  fetch("http://localhost:3000/juegos", {
    method: "GET",
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuestaJSON) {
      const inscriptos = respuestaJSON.inscriptos;
      const cantidadDeInscriptos = inscriptos.length;

      for (i = 0; i < cantidadDeInscriptos; i++) {
        crearNuevaInscriptoHTML(
          inscripto[i].nombre,
          inscripto[i].juego,
        );
      }
    });
}

cargar();