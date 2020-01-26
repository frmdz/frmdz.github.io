function generarweb () {
  //save the inputs.
  let titulo = document.getElementById("tituloweb").value;
  let url = document.getElementById("url").value;

  document.getElementById("cita-web").innerHTML  = (titulo.length && url.length) ? `${titulo.charAt(0).toUpperCase() + titulo.slice(1)}. Recuperado de ${url}.` : "Debes llenar el URL y El Título";  
}

function generarlibro() {
  //save the inputs.
  let nombre = document.getElementById("nombre").value, 
      apellido = document.getElementById("apellido").value,
      editorial = document.getElementById("editorial").value,
      titulo = document.getElementById("titulo").value,
      pais = document.getElementById("pais").value,
      ciudad = document.getElementById("ciudad").value,
      año = document.getElementById("año").value;
    
    //formatting
    apellido = (apellido.length) ? `${apellido.charAt().toUpperCase() + apellido.slice(1)}, ` : "";
    nombre = (nombre.length) ?  `${nombre.charAt().toUpperCase()}. ` : "";
    año = (año.length) ? `(${año}). ` : "";
    titulo = (titulo.length) ? `${titulo.charAt().toUpperCase() + titulo.slice(1)}. ` : "";
    editorial = (editorial.length) ? `${editorial.charAt().toUpperCase() + editorial.slice(1)}.` : ""

    if (pais.length) {
      pais = pais.charAt().toUpperCase() + pais.slice(1);
      if (ciudad.length != 0) {
        pais = pais + ", ";
        ciudad = ciudad.charAt().toUpperCase() + ciudad.slice(1) + ": ";
      } else {
        pais = pais + ": ";
      }
    }
    
    document.getElementById("cita-libro").innerHTML = apellido + nombre + año + titulo + pais + ciudad + editorial;
  }
