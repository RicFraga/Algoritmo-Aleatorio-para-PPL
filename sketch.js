
// Construimos la función objetivo 12a + 5b
var fo = new funcionObjetivo([12, 5]);

// Construimos la restricción 2a + 3b <= 50

var rest = new restriccion([2,3], "<=", 50);

// Construimos una población de n especimenes

var cantidad = 100;
var poblacion = new Array(cantidad);

for(let i = 0; i < cantidad; i++)
{
	poblacion[i] = new especimen(2);
	poblacion[i].iniciar();	
}

// Evaluamos la restricción con la población generada

var max = -1000;
var indice_max;

for(let i = 0; i < cantidad; i++)
{
	if(rest.evaluar(poblacion[i]) == true)
	{
		console.log("Cumplí la restricción!");
		poblacion[i].mostrar();
		
		if(fo.evaluar(poblacion[i]) > max)
		{
			max = fo.evaluar(poblacion[i]);
			indice_max = i;
		}
	}
}

console.log("Max z = " + max + " con el especimen ");
poblacion[indice_max].mostrar();