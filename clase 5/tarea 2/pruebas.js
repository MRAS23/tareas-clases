function probarValidarPrimerNombre() {
  console.assert(
    validarPrimerNombre("") === "Primer nombre debe tener al menos 1 caracter",
    "Validar primer nombre no esta validando que primerNombre no sea vacío"
  );
}

function probarValidarSegundoNombre() {
  console.assert(
    validarSegundoNombre("") === "Segundo nombre debe tener al menos 1 caracter",
    "Validar segundo nombre no esta validando que segundoNombre no sea vacío"
  );
}

function probarValidarApellido() {
  console.assert(
    validarApellido("") === "Apellido debe tener al menos 1 caracter",
    "Validar apellido no esta validando que apellido no sea vacío"
  );
}

function probarValidarEdad() {
  console.assert(validarEdad("") === "Edad no puede ser vacío", "Validar edad no esta validando que edad no sea vacío");
}

probarValidarPrimerNombre();
probarValidarSegundoNombre();
probarValidarApellido();
probarValidarEdad();
