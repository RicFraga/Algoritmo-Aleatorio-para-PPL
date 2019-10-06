class restriccion {
	constructor(coeficients, type, target) {
		this.coeficients = coeficients;
		this.type = type;
		this.target = target;
	}
	
	evaluate(especimen) {
		// Total del lado que toma valores de la desigualdad
		var total = 0;
		var check = false;

		// Se puede recorrer en un solo for ya que ambos vectores tienen la misma longitud
		for(let i = 0; i < this.coeficients.length; i++)
			total += this.coeficients[i] * especimen.values[i];

		// Si la desigualdad es menor o igual
		if(this.type == "<=")
		{
			if(total <= this.target)
			{
				check = true;
				especimen.setObtained(total);
			}
		}

		// Si la desigualdad es mayor o igual
		else if(this.tipo == ">=")
		{
			if(total >= this.objetivo)
			{
				check = true;
				especimen.setObtained(total);
			}
		}

		// Si la desigualdad es igual
		else
		{
			if(total == this.objetivo)
			{
				check = true;
				especimen.setObtained(total);
			}
		}

		return check;
	}

}