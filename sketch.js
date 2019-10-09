function init(){

	// Construimos la función objetivo 12a + 5b
	var fo = new funcionObjetivo([12, 5]);
	// Construimos las restricciones
	var rest = new Array(2);
	// a + b = 10
	rest[0] = new restriccion([1,1], "=", 10);
	// b >= 4
	rest[1] = new restriccion([0,1], ">=", 4);

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
	for(let i = 0; i < cantidad; i++)
	{
		poblacion[i].show();
		console.log("------------------------");
	}

	// Evaluamos las restricciones
	var m;

	// Recorremos las especies
	for(let i = 0; i < rest.length; i++)
	{
		for(let j = 0; j < cantidad; j++)
		{
			// Obtenemos el valor de evaluar la restricción
			m = rest[i].evaluate(poblacion[j]);			

			// Si se cumple entonces le asigna el valor de la función objetivo
			if(m != false)
				poblacion[j].setObtained(fo.evaluate(poblacion[j]));

			// Si es falso le asigna false al resultado de la función objetivo
			else if(m == false)
			{
				poblacion[j].setObtained(false);
				i++;
			}
		}
	}

	// Mostramos a los especímenes que cumplieron las restricciones
	for(let i = 0; i < cantidad; i++)
	{
		// Variable para guardar dato obtenido
		var check = poblacion[i].getObtained();
		if(check != false)
		{
			console.log("Cumplió las condiciones con un valor de : " + check);
			poblacion[i].show();
		}
	}
}
