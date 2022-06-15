//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function convierteNodeListTiempo(nodelist) {
  let tiempoTotal = 0;

  for (let i = 0; i < nodelist.length; i++) {
    tiempoTotal += Number(nodelist[i].value);
  }

  return tiempoTotal;
}

let $horasNodeList = document.querySelectorAll("#horas-video");
let $minutosNodeList = document.querySelectorAll("#minutos-video");
let $segundosNodeList = document.querySelectorAll("#segundos-video");

document.querySelector("#calcula-tiempo-videos").onclick = function () {
  let horasTotales = convierteNodeListTiempo($horasNodeList);
  let minutosTotales = convierteNodeListTiempo($minutosNodeList);
  let segundosTotales = convierteNodeListTiempo($segundosNodeList);

  if (segundosTotales > 59) {
    minutosTotales += parseInt(segundosTotales / 60);
    segundosTotales = parseInt(segundosTotales % 60);
  }

  if (minutosTotales > 59) {
    horasTotales += parseInt(minutosTotales / 60);
    minutosTotales = parseInt(minutosTotales % 60);
  }

  document.querySelector(
    "#cantidad-tiempo-total-videos"
  ).innerText = `${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos.`;

  return false;
};
