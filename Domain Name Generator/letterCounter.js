// 4Geeks - Practices Letter Counter

/* 
    Se necesita un programa que cuente las repeticiones de letras en un string dado. 

    INSTRUCCIONES:
    1. Crea un objeto, las letras son las propiedades y los valores son el numero de veces que esa letra se repite en toda la cadena.

      EJEMPLO:
        const  word = "Hello World";
        Se deberia imprimir en la consola {H:1, e:1, l:3, o:2, W:1, r:1, d:1}

      PISTA:

        * Recorre todo el string (Usa un bucle).
        * En cada iteracion verifica si el objeto counts tiene la letra inicializada como una propiedad.
        * Si no esta inicializada, hazlo y establece el valor en 1 (La primera vez que se encuentra).
        * Si ya se inicializo, simplemente incrementa el valor de la propiedad en uno.
        * Recuerda ignorar los espacios en blanco en el string.
        * Debes colocar en minuscula (lowercase) todas las letras para tener un conteo exacto de letras.
*/

// CODE START

let par = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius justo sem, ac consequat libero volutpat sed. Donec gravida orci id porttitor scelerisque. Pellentesque eget vestibulum lorem. Donec sollicitudin mauris venenatis tellus rutrum varius. Ut pellentesque vitae enim fringilla condimentum.';

let counts = {};

par = par.toLowerCase(); // Sec coloca todo el string en minuscula

for (let i in par) {

  if (par[i] == " " || par[i] == "," || par[i] == ".")
    continue;
  else if (counts[par[i]] == undefined) {
    counts[par[i]] = 1;

  } else {
    counts[par[i]] += 1;
  }
}

console.log(counts);

// CODE END