class especimen {
	constructor(amount) {
		this.values = new Array(amount);
		this.obtained = false;		

		for(let i = 0; i < this.values.length; i++)
			this.values[i] = Math.random() * 100;			
	}

	show() {
		for(let i = 0; i < this.values.length; i++)
			console.log(this.values[i]);
	}

	showBinary() {
		for(let i = 0; i < this.binaries.length; i++)
			console.log(this.binaries[i]);	
	}

	setObtained(obtained){
		var ob = obtained;
		this.obtained = ob;
	}

	getObtained(){
		if(this.obtained == false)
			return false;

		else
			return this.obtained;
	}

}