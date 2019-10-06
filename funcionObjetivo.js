class funcionObjetivo {
	constructor(coeficients) {
		this.coeficients = coeficients;
	}

	evaluate(especimen) {
		var value = 0;
		for(let i = 0; i < this.coeficients.length; i++)
			value += this.coeficients[i] * especimen.values[i];

		return value;
	}
}