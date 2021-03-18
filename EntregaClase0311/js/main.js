function coniva() {
	let precio = Number(prompt("Ingresa el precio"));
	return precio * 0.21 + precio;
}

function descuento() {
	let descuento = prompt("¿Tenes un descuento?");
	switch (descuento) {
		case "si":
			return 100;
			break;
		case "no":
			return 0;
			break;
		default:
			return alert("Ingresa si o no");
	}
}

function conenvio() {
	let envio = prompt("¿Vivís en Capital Federal o GBA?");
	switch (envio) {
		case "si":
			return 200;
			break;
		case "no":
			return 400;
			break;
		default:
			return alert("Ingresa si o no");
	}
}

let precioFinal = coniva() - descuento() + conenvio();
alert("El precio total de tu compra es $" + precioFinal);
