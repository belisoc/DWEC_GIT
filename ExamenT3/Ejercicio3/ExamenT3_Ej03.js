/*Crear una función que, a partir de un texto, obtenga un array con las palabras que lo forman. 

Posteriormente, crear una función que muestre en un cuadro de diálogo la siguiente información: 
número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, 
las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. La definición será:

function muestraArray(cadena) { }

Las funciones se almacenarán en un archivo llamado ExamenT3_Ej03.js

*/
//En esta función mostramos los resultados. Se podría haber hecho todo en una sola función
//pero por claridad en su comprensión he añadido una función muestraPalabras()
function muestraPalabras(
  miArray,
  primeraPalabra,
  ultimaPalabra,
  palabrasInv,
  palabrasSort,
  palabrasSortInv
) {
  console.log("Dentro... " + palabrasInv);
  alert(
    `array: ${miArray}\nPrimera palabra: ${primeraPalabra},\nÚltima palabra: ${ultimaPalabra},\nInversa: ${palabrasInv},\nOrdenado a-z: ${palabrasSort},\nOrdenado z-a: ${palabrasSortInv}`
  );
}
//En esta función realizamos los cálculos
function muestraArray(cadena) {
  //Obtenemos un array de cadenas donde cada cadena es una palabra
  let miArray = cadena.split(" ");
  //Primera palabra
  let primeraPalabra = miArray[0];
  console.log("La primera palabra es... " + primeraPalabra);
  //Ultima Palabra
  let ultimaPalabra = miArray[miArray.length - 1];
  //IMPORTANTE. Los siguientes métodos no crean un array nuevo, si no que modifican el original.
  //Es por ello que usaremos el método slice() para copiar el array y realizar la modificaión
  //que queramos.

  //La inversa
  let palabrasInv = miArray.slice(); //Así creamos una copia. Recuerda que reverse() modifica
  palabrasInv.reverse(); //el array original

  //Ordenadas
  let palabrasSort = miArray.slice(); //Copio y ordeno
  palabrasSort.sort(function (a, b) {
    return a.localeCompare(b);
  });
  //Ordenadas inversa. También podríamos haber hecho b.localeCompare(a)
  let palabrasSortInv = palabrasSort.slice();
  palabrasSortInv.reverse(); //Invierto el array anterior

  //Los imprimimos en un cuadro de diálogo
  muestraPalabras(
    miArray,
    primeraPalabra,
    ultimaPalabra,
    palabrasInv,
    palabrasSort,
    palabrasSortInv
  );
}
