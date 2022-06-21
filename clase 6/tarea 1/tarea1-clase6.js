/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#agrega-inputs").onclick = function (event) {
  const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  crearVariosIntegrantes(cantidadIntegrantes);

  event.preventDefault();
};

function crearVariosIntegrantes(cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement("div");
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "Edad del integrante número " + (indice + 1) + " ";
  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector("#integrantes");
  $integrantes.appendChild($div);
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

document.querySelector("#calcular").onclick = function (event) {
  const edades = obtenerEdadesIntegrantes();
  const mayorEdad = calcularMayorEdad(edades);
  const menorEdad = calcularMenorEdad(edades);
  const promedioEdades = calculaPromedioEdades(edades);

  document.querySelector("#mayor-edad").value = `${mayorEdad}`;
  document.querySelector("#menor-edad").value = `${menorEdad}`;
  document.querySelector("#promedio-edad").value = `${promedioEdades}`;

  event.preventDefault();
};

function calcularMayorEdad(edades) {
  let mayorEdad = edades[0];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > mayorEdad) {
      mayorEdad = edades[i];
    }
  }

  return mayorEdad;
}

function calcularMenorEdad(edades) {
  let menorEdad = edades[0];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] < menorEdad) {
      menorEdad = edades[i];
    }
  }

  return menorEdad;
}

function calculaPromedioEdades(edades) {
  let promedio = 0;
  for (let i = 0; i < edades.length; i++) {
    promedio += edades[i];
  }
  promedio = promedio / edades.length;

  return promedio;
}
