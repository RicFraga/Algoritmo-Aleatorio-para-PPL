class funcionObjetivo {
	constructor(coeficientes) {
		this.coeficientes = coeficientes;
	}

	evaluar(especimen) {
		var valor = 0;
		for(let i = 0; i < this.coeficientes.length; i++)
			valor += this.coeficientes[i] * especimen.valores[i];

		return valor;
	}
}