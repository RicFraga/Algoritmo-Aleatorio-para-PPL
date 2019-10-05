class especimen {
	constructor(n) {
		this.valores = new Array(n);
	}

	iniciar() {
		for(let i = 0; i < this.valores.length; i++)
			this.valores[i] = Math.random() * 60;
	}

	mostrar() {
		for(let i = 0; i < this.valores.length; i++)
			console.log(this.valores[i]);
	}
}