let nombre = prompt("Ingresa tu Nombre");
let apellido = prompt("Ingresa tu Apellido");
let numeroSecreto = Number(prompt("Ingresa el Número Secreto"));

if (nombre !== "" && apellido !== "" && numeroSecreto === 33) {
	alert(`Hola, ${nombre}! Haz pasado la prueba de identidad!`);
} else if (nombre == "" && apellido == "") {
	alert("Hola! Debes ingresar tu nombre o apellido");
} else {
	alert(
		"No hemos podido comprobar tu identidad. ¿Estás seguro que ese es el Número Secreto?"
	);
}
