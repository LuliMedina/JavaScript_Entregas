let añoDeNacimiento = Number(prompt("Ingresa el año de nacimiento"));

for (let i = añoDeNacimiento; i <= 2021; i++) {
	let edad = i - añoDeNacimiento;
	console.log(`en ${i} tenía ${edad}`);
}
