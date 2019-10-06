
// Construimos la función objetivo 12a + 5b
var fo = new funcionObjetivo([12, 5]);

// Construimos la restricción 2a + 3b <= 50

var rest = new restriccion([2,3], "<=", 50);

// Construimos una población de n especimenes

var cantidad = 100;
var poblacion = new Array(cantidad);

for(let i = 0; i < cantidad; i++)
	poblacion[i] = new especimen(2);	

// Evaluamos la restricción con la población generada
var indice_max;

for(let i = 0; i < cantidad; i++)
{
	if(rest.evaluate(poblacion[i]) == true)
		poblacion[i].setObtained(fo.evaluate(poblacion[i]));	
}

for(let i = 0; i < cantidad; i++)
{
	if(poblacion[i].getObtained)
	{
		console.log("Cumplió las restricciones con un valor de : " + poblacion[i].getObtained());
		poblacion[i].show();
	}
}
