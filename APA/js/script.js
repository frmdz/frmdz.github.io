function generarweb () {
  //save the inputs.
  let titulo = document.getElementById("tituloweb").value;
  let url = document.getElementById("url").value;

  //check if the strings are not empty and generates the citation.
  if (titulo.length && url.length) {
    document.getElementById("cita-web").innerHTML = `${titulo.charAt(0).toUpperCase() + titulo.slice(1)}. Recuperado de ${url}.`;
  } else{
    document.getElementById("cita-web").innerHTML = "Debes llenar el URL y El Título";
  }    

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
    
    //check if the strings are not empty and generates the citation.
    //TODO: i think there's a better way to implement this, there's a lot of if statements.
    if (apellido.length) {
      apellido = apellido.charAt().toUpperCase() + apellido.slice(1) + ", ";
    }
    if (nombre.length) {
      nombre = nombre.charAt().toUpperCase() + ". ";
    }
    if (año.length) {
      año = "(" + año + "). ";
    }
    if (titulo.length) {
      titulo = titulo.charAt().toUpperCase() + titulo.slice(1) + ". ";
    }
    if (pais.length) {
      pais = pais.charAt().toUpperCase() + pais.slice(1);
      if (ciudad.length != 0) {
        pais = pais + ", ";
        ciudad = ciudad.charAt().toUpperCase() + ciudad.slice(1) + ": ";
      } else {
        pais = pais + ": ";
      }
    }
    if (editorial.length) {
      editorial = editorial.charAt().toUpperCase() + editorial.slice(1) + ".";
    }

    document.getElementById("cita-libro").innerHTML = apellido + nombre + año + titulo + pais + ciudad + editorial;
  }
