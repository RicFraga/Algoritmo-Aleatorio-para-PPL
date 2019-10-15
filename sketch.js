function init(){

	// Construimos la función objetivo 12a + 5b
	var fo = new funcionObjetivo([4, 2]);
	// Construimos las restricciones
	var rest = new Array(5);
	// a + 2y >= 10
	rest[0] = new restriccion([1,2], ">=", 10);
	// 2a + b <= 25
	rest[1] = new restriccion([2,1], "<=", 25);
	// a >= 3
	rest[2] = new restriccion([1,0], ">=", 3);
	// b <= 10
	rest[3] = new restriccion([0,1], "<=", 10);
	//y >= 0
	rest[4] = new restriccion([0,1], ">=", 0);

	// Obtenemos la cantidad de variables que se tendrán
	var variables = parseInt(document.getElementById("variables").value);
	// Obtenemos la cantidad de elementos que tendrá la población
	var cantidad = parseInt(document.getElementById("poblacion").value);
	// Creamos el arreglo de la población
	var poblacion = new Array(cantidad);

	// Iniciamos los elementos de la población
	for(let i = 0; i < cantidad; i++)
		poblacion[i] = new especimen(variables);

	// Mostramos a los especímenes
	/*for(let i = 0; i < cantidad; i++)
	{
		poblacion[i].show();
		console.log("------------------------");
	}*/

	// Evaluamos las restricciones
	var m;
	var max = -1;
	var min = 999999999999999;

	// Empezamos recorriendo las especies
	for(let i = 0; i < cantidad; i++)
	{
		// Después recorremos las restricciones
		for(let j = 0; j < rest.length; j++)
		{
			// Obtenemos el valor de evaluar la restricción j en el especimen i
			m = rest[j].evaluate(poblacion[i]);

			// Si la cumple le asignamos el valor obtenido de la función objetivo
			if(m != false)
				poblacion[i].setObtained(fo.evaluate(poblacion[i]));

			// Si no la cumple le asignamos el valor false y pasamos al siguiente especimen
			else if(m == false)
			{
				poblacion[i].setObtained(false);
				j = 10;
			}
		}
	}

	var indice_max;
	var indice_min;	

	// Mostramos a los especímenes que cumplieron las restricciones
	for(let i = 0; i < poblacion.length; i++)
	{
		// Variable para guardar dato obtenido
		var check = poblacion[i].getObtained();		

		if(check != false)
		{
			if(check > max)
			{
				max = check;
				indice_max = i;
			}

			if(check < min)
			{
				min = check;
				indice_min = i;
			}
		}	
	}

	console.log("Max z = " + poblacion[indice_max].getObtained());
	console.log(poblacion[indice_max].show());
	console.log("Min z = " + poblacion[indice_min].getObtained());
	console.log(poblacion[indice_min].show());
}