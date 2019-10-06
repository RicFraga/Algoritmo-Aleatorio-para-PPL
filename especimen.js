class especimen {
	constructor(amount) {
		this.values = new Array(amount);
		this.obtained = false;

		for(let i = 0; i < this.values.length; i++)
			this.values[i] = Math.random() * 60;
	}

	show() {
		for(let i = 0; i < this.values.length; i++)
			console.log(this.values[i]);
	}

	setObtained(obtained){
		this.obtained = obtained;
	}

	getObtained(){
		return this.obtained;
	}
}