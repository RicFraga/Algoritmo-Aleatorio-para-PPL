function init(){

	var var_ingresadas = document.getElementById("variables").value;
	var variables = 2;	

	// Construimos la función objetivo 12a + 5b
	var fo = new funcionObjetivo([12, 5]);

	// Construimos la restricción 2a + 3b <= 50

	var rest = new Array(2);	
	rest[0] = new restriccion([1,1], "=", 10);
	rest[1] = new restriccion([0,1], ">=", 4);

	// Construimos una población de n especimenes

	var cantidad = 2;
	var poblacion = new Array(cantidad);

	for(let i = 0; i < cantidad; i++)
		poblacion[i] = new especimen(variables);

	// Evaluamos la restricción con la población generada
	for(let j = 0; j < 2; j++)
	{
		for(let i = 0; i < cantidad; i++)
		{
			if(rest[j].evaluate(poblacion[i]) == true)
				poblacion[i].setObtained(fo.evaluate(poblacion[i]));
		}
	}

	for(let i = 0; i < cantidad; i++)
	{
		poblacion[i].show();
		console.log("-----------------------------");
	}

	for(let i = 0; i < cantidad; i++)
	{
		// Usar una variable aparte para evitar problemas de referencia
		var ok = poblacion[i].getObtained();

		if(ok != false)
		{
			console.log("Cumplió las restricciones con un valor de : " + ok);
			poblacion[i].show();
		}
	}	
}