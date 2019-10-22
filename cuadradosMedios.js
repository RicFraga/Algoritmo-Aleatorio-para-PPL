class cuadradosMedios {
	constructor(seed) {
		var squared = seed ** 2;
		var squared_string = squared.toString();
		var l = squared_string.length;
		var random_string = ".";

		for(let i = 2; i < l - 2; i++)
			random_string += squared_string[i];		

		this.random = parseFloat(random_string);
	}

	get() {
		return this.random;
	}
}