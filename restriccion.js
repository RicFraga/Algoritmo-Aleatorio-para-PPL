class restriccion {
	constructor(coeficients, type, target) {
		this.coeficients = coeficients;
		this.type = type;
		this.target = target;
	}	

	show() {
		for(let i = 0; i < this.coeficients.length; i++)
			console.log(this.coeficients[i]);

		console.log(this.type);
		console.log(this.target);
	}
}