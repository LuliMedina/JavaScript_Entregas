class Producto {
	constructor(nombre, precio, envio) {
		this.nombre = nombre;
		this.precio = precio;
		this.envio = envio.toLowerCase();
	}

	coniva() {
		return this.precio * 1.21;
	}

	conenvio() {
		if (this.envio == "si") {
			return Number(300);
		} else this.envio == "no";
		{
			return Number(0);
		}
	}
}

let nombre1 = prompt("¿Cuál es el nombre de tu producto?");
let precio1 = prompt("¿Cuál es el precio de tu producto?");
let envio1 = prompt("¿Necesitas envío a domicilio?");
let Producto1 = new Producto(nombre1, precio1, envio1);

console.log(Producto1);
console.log(Producto1.coniva());
console.log(Producto1.conenvio());

alert(
	`Tu producto ${nombre1} tiene un costo total de $${
		Producto1.coniva() + Producto1.conenvio()
	}`
);
