class restriccion {
	constructor(coeficientes, tipo, objetivo) {
		this.coeficientes = coeficientes;
		this.tipo = tipo;
		this.objetivo = objetivo;
	}
	
	evaluar(especimen) {
		// Total del lado que toma valores de la desigualdad
		var total = 0;

		// Se puede recorrer en un solo for ya que ambos vectores tienen la misma longitud
		for(let i = 0; i < this.coeficientes.length; i++)
			total += this.coeficientes[i] * especimen.valores[i];

		// Si la desigualdad es menor o igual
		if(this.tipo == "<=")
		{
			if(total <= this.objetivo)
				return true;

			else
				return false;
		}

		// Si la desigualdad es mayor o igual
		else if(this.tipo == ">=")
		{
			if(total >= this.objetivo)
				return true;

			else
				return false;
		}

		// Si la desigualdad es igual
		else
		{
			if(total == this.objetivo)
				return true;

			else
				return false;
		}
	}

}