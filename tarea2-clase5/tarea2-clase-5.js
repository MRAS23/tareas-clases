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
