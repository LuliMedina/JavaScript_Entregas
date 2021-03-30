class Alumnos {
	constructor(nombre, sede, promedio) {
		this.nombre = nombre;
		this.sede = sede;
		this.promedio = promedio;
	}
}

const Alumnos1 = new Alumnos("Santiago", "Belgrano", 10);
const Alumnos2 = new Alumnos("Sofía", "Palermo", 5.6);
const Alumnos3 = new Alumnos("Belén", "Palermo", 8.5);

const ArrayDeAlumnos = [Alumnos1, Alumnos2, Alumnos3];

let nombre4 = prompt("Ingresa tu Nombre");
let sede4 = prompt("¿A qué sede asistis?");
let pomedio4 = Number(prompt("¿Cuál es tu promedio?"));
let Alumnos4 = new Alumnos(nombre4, sede4, pomedio4);

ArrayDeAlumnos.push(Alumnos4);

ArrayDeAlumnos.sort(function (a, b) {
	if (a.promedio > b.promedio) {
		return -1;
	}
	if (a.promedio < b.promedio) {
		return 1;
	}
	return 0;
});

console.log(ArrayDeAlumnos);
