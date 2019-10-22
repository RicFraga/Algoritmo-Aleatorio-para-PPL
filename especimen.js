class especimen {
	constructor(amount, limits) {
		this.values = [];
		this.obtained = 0;
		this.ofvalue = 0;

		// Generamos los valores con los límites obtenidos de las restricciones
		for(let i = 0; i < limits.length; i = i + 2)
			this.values.push(Math.random() * ((limits[i+1] + 1)  - limits[i]) + limits[i]);
	}

	show() {
		for(let i = 0; i < this.values.length; i++)
			console.log(this.values[i]);
	}

	evaluateOF(of) {
		for(let i = 0; i < this.values.length; i++)
			this.ofvalue += this.values[i] * of.coeficients[i];
	}

	evaluateRest(rest) {		
		var total = 0;		

		try {
			for(let i = 0; i < this.values.length; i++)
				total += this.values[i] * rest.coeficients[i];
		} catch(error) {
			console.log("");
		}		

		// Si la desigualdad es menor o igual
		if(rest.type == "<=")
		{
			if(total <= rest.target)
			{				
				this.obtained++;
			}
		}

		// Si la desigualdad es mayor o igual
		else if(rest.type == ">=")
		{
			if(total >= rest.target)
			{								
				this.obtained++;
			}
		}

		// Si la desigualdad es igual
		else if(rest.type == "=")
		{
			// Se toma en cuenta una tolerancia del 5%
			var allowed = rest.target * 0.05;
			if((total <= (rest.target + allowed)) && (total >= (rest.target - allowed)))
			{				
				this.obtained++;
			}
		}
	}

	
}