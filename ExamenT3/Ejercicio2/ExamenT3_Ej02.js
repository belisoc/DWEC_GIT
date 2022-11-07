/*Crear una función que reciba una cadena y devuelva true o false dependiendo de si es o no un 
palíndromo, es decir, una frase que se lee igual del derecho que del revés. Ej.- “Dábale arroz 
la zorra al abad”, “Yo hago yoga, hoy”, “Sé verlas al revés”, ….

En nuestro caso, la función deberá obviar el uso de caracteres diacríticos, signos de puntuación 
y al uso de mayúsculas o minúsculas.

La función se almacenará en un archivo denominado ExamenT3_Ej02.js, y tendrá la siguiente 
definición:

function esPalindromo(cadena) { }*/

function esPalindromo(cadena) {
  //Para que sea más fácil de resolver la pondremos en minúsculas, quitaremos espacios y caracteres diacríticos
  ///La ponemos en minúsculas:
  cadenaMinus = cadena.toLowerCase();

  //El modo más sencillo es usando expresiones regulares y el método replace()
  //Quitamos los espacios con un regExp
  let cadenaNoSP = cadenaMinus.replace(/\s+/g, "");
  //Fijaos que también podriamos haber hecho cadena.toLoweCase().replace(...)
  //Quitamos los diacríticos. Hay otros modos más sofisticados pero con los métodos que conocemos
  //usaremos el más simple aunque más pesao (y de paso quitamos las mayúsculas):
  let cadenaSinSPniDiac = cadenaNoSP
    .replace(/[á]/g, "a")
    .replace(/[é]/g, "e")
    .replace(/[í]/g, "i")
    .replace(/[ó]/g, "o")
    .replace(/[úü]/g, "u");
  //Esto se puede hacer porque algo.replace() nos da como resultado una cadena, la cual
  //también tendrá el método replace()

  //Le quitamos los signos de puntuación
  let cadenaSinPunt = cadenaSinSPniDiac.replace(/[,.;]/g, "");

  //Por último ponemos ahora la cadena al revés para iniciar la comparación
  //Tal vez haya algún método que lo haga, pero como no lo he puesto en los apuntes pues
  //nos lo fabricamos nosotros
  let cadenaRev = ""; //Vamos a crear la cadena al revés para luego compararla
  //con la original usando la función localeCompare
  for (let i = cadenaSinPunt.length - 1; i >= 0; --i) {
    cadenaRev += cadenaSinPunt[i];
  } //También lo podríamos haber hecho pasándolo a array y haciendo reverse(). Luego join para pasarlo a cadena
  console.log("La cadena original pelaíta es... " + cadenaSinPunt);
  console.log("La cadena al revés es... " + cadenaRev);
  return cadenaSinPunt.localeCompare(cadenaRev); //si devuelve un cero es que son iguales, es decir, palíndromo.
}
