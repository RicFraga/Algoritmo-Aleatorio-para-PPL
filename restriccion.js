class restriccion {
	constructor(coeficients, type, target) {
		this.coeficients = coeficients;
		this.type = type;
		this.target = target;
	}

	obtainType()
	{
		return this.type;
	}
	
	evaluate(especimen) {
		// Total del lado que toma valores de la desigualdad
		var total = 0;
		var check = false;

		// Se puede recorrer en un solo for ya que ambos vectores tienen la misma longitud
		try
		{
			for(var i = 0; i < this.coeficients.length; i++)
				total += this.coeficients[i] * especimen.values[i];
		} catch(error)
		{
			console.log("");
		}

		// Si la desigualdad es menor o igual
		if(this.type == "<=")
		{
			if(total <= this.target)
			{
				check = true;
				especimen.setObtained(true);
			}
		}

		// Si la desigualdad es mayor o igual
		else if(this.type == ">=")
		{
			if(total >= this.target)
			{
				check = true;
				especimen.setObtained(true);
			}
		}

		// Si la desigualdad es igual
		else if(this.type == "=")
		{
			// Se toma en cuenta una tolerancia del 5%
			var allowed = this.target * 0.05;			
			if((total <= (this.target + allowed)) && (total >= (this.target - allowed)))
			{
				check = true;
				especimen.setObtained(true);
			}
		}
		
		return check;
	}

	show(){
		console.log(this.coeficients[0] + "a " + this.coeficients[1] + "b " + this.type + " " + this.target);
	}

}