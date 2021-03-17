function calcularprecio(precio) {
	var precio = Number(prompt("Ingresa el precio"));
	return precio * 0.21 + precio;
}

let precioIVA = calcularprecio();
alert(`El precio con IVA es $${precioIVA}`);
