/*Crear una función que reciba una cadena y la devuelva transformada en Cani. Por ejemplo, si 
le pasamos a la función la cadena "una cadena cani es como esta" obtendremos "UnA KaDeNa kAnI Es 
kOmO EsTaHHH" . Para ello, hay que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la 
letra C por la K y, en caso de terminar la frase en vocal, añadir tres letras H al final. 

La función se almacenará en un archivo denominado ExamenT3_Ej01.js, y tendrá la siguiente 
definición:

function toCani(cadena) { }
*/
//Lo ideal es hacer una función por cada petición pero igual el enunciado lleva a confusión, con
//lo que lo haré todo en una sola función. Si usáis varias mucho mejor.
function toCani(cadena) {
  //1.- Intercalamos mayúsculas y minúsculas
  //Creamos una cadena en mayúsculas de donde sacaremos las letras que necesitemos
  //Otra solución sería usar split() y transformarlo en array. Eso nos dará un poco de libertad.
  let cadMayus = cadena.toUpperCase();
  let cadMinus = cadena.toLowerCase().substr(0); //Creamos una copia en minúscula
  let cadInter = ""; //La idea es crear una nueva cadena con elementos de una u otra.
  //Los pares los cogemos minúsculas, los impares mayúsculas
  for (let i = 0; i < cadena.length; ++i) {
    cadInter += i % 2 == 0 ? cadMinus.charAt(i) : cadMayus.charAt(i);
  }

  //2.-Sustituimos c por k. Podríamos hacerlo con un for pero queda mejor con una regexp
  //replace() deja la cadena original inalterada así que su resultado hay que
  //asignárselo a otra cadena.
  let cadCK = cadInter.replace(/[c]/g, "k").replace(/[C]/g, "K");
  //Otro modo de hacerlo:
  /*let cadCK = "";
  if (cadInter.indexOf("c") >= 0) {
    cadCK = cadInter.replace(/c/g, "k");
  } else if (cadInter.indexOf("C") >= 0) {
    cadCK = cadInter.replace(/C/g, "K");
  }*/

  //3.- Si termina con una vocal terminará con HHH
  //Para ver si la última letra es una vocal usaríamos cadena.includes(buscoEsto)
  console.log("El último carácter es... " + cadCK[cadCK.length - 1]);
  //Si el último carácter está en la cadena aeiouAEIOU... le añadimos HHH
  //Sería más adecuado "aeiouAEIOUáéíóúüÁÉÍÓÚ"
  return "aeiouAEIOU".includes(cadCK[cadCK.length - 1]) ? cadCK + "HHH" : cadCK;
}
