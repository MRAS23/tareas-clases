//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function convierteNodeListArrayNumeros(nodelist) {
  let listaNumeros = [];
  for (let i = 0; i < $NumerosNodeList.length; i++) {
    listaNumeros[i] = Number($NumerosNodeList[i].innerText);
  }

  return listaNumeros;
}

function calculaPromedioNumeros(numeros) {
  let promedio = 0;

  for (let i = 0; i < numeros.length; i++) {
    promedio += numeros[i];
  }

  return promedio / numeros.length;
}

function calculaMayorNumero(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function calculaMenorNumero(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function calcularNumeroMasRepetido(numeros) {
  let contador = 0;
  let contadorMasRepetido = 0;
  let repetido;
  let masRepetido;
  for (let i = 0; i < numeros.length; i++) {
    repetido = numeros[i];
    for (let j = 0; j < numeros.length; j++) {
      if (repetido === numeros[j]) {
        contador++;
      }
    }
    if (contador > contadorMasRepetido) {
      contadorMasRepetido = contador;
      masRepetido = repetido;
    }
    contador = 0;
  }
  return masRepetido;
}

let $NumerosNodeList = document.querySelectorAll("li");

document.querySelector("#calcula-promedio").onclick = function () {
  let listaNumeros = convierteNodeListArrayNumeros($NumerosNodeList);

  document.querySelector("#promedio").innerText = `${calculaPromedioNumeros(listaNumeros)}`;
  document.querySelector("#mayor").innerText = `${calculaMayorNumero(listaNumeros)}`;
  document.querySelector("#menor").innerText = `${calculaMenorNumero(listaNumeros)}`;
  document.querySelector("#frecuente").innerText = `${calcularNumeroMasRepetido(listaNumeros)}`;

  return false;
};
