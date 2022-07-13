const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

/* console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo); */

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "El campo nombre debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "El campo nombre debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    //regular expression
    return "el campo nombre solo acepta letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo ciudad no puede estar vacio";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "El campo descripción regalo deberia tener al menos 1 caracter";
  }
  if (descripcionRegalo.length >= 255) {
    return "El campo descripción regalo debe tener menos de 255 caracteres";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo,
  };

  manejarErrores(errores);

  event.preventDefault();
}

function manejarErrores(errores) {
  errorNombre = errores.nombre; //nombre
  errorCiudad = errores.ciudad; //ciudad
  errorDescripcionRegalo = errores.descripcionRegalo; //descripcion regalo

  if (errorNombre) {
    // este if pregunta si errorNombre esta vacio, retorna boolean
    $form.nombre.className = "error";
  } else {
    $form.nombre.className = "";
  }
  if (errorCiudad) {
    $form.ciudad.className = "error";
  } else {
    $form.ciudad.className = "";
  }
  if (errorDescripcionRegalo) {
    $form["descripcion-regalo"].className = "error";
  } else {
    $form["descripcion-regalo"].className = "";
  }
}

$form.onsubmit = validarFormulario;
