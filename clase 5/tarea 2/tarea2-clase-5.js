document.querySelector("#muestra-datos-usuario").onclick = function () {
  const primerNombre = document.querySelector("#primer-nombre-usuario").value;
  const segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
  const apellido = document.querySelector("#apellido-usuario").value;
  const edad = document.querySelector("#edad-usuario").value;

  document.querySelector("#datos-usuario").value = `${primerNombre} ${segundoNombre} ${apellido} ${String(edad)}`;

  cambiaTitulo(primerNombre);

  return false;
};

function cambiaTitulo(primerNombre) {
  const titulo = document.querySelector("h1");
  titulo.textContent = "Bienvenido, " + primerNombre + "!";

  return titulo;
}

function validarPrimerNombre(primerNombre) {
  if (primerNombre.length === 0) {
    return "Primer nombre debe tener al menos 1 caracter";
  }

  return " ";
}

function validarSegundoNombre(segundoNombre) {
  if (segundoNombre.length === 0) {
    return "Segundo nombre debe tener al menos 1 caracter";
  }

  return " ";
}

function validarApellido(apellido) {
  if (apellido.length === 0) {
    return "Apellido debe tener al menos 1 caracter";
  }

  return " ";
}

function validarEdad(edad) {
  if (edad.length === 0) {
    return "Edad no puede ser vacío";
  }

  return " ";
}
