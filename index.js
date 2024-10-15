// Generar contraseñas
// Deben tener 4 Mayusculas
// Deben tener 4 números
// Deben tener 2 caracter especial

// "Diccionarios"
const minusLetters = 'abcdefghijklmnñopqrstuvwxyz';
const mayusLetters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbers = '0123456789';
const specials = '!#$%&=?¡_:;]*[()/°|<>{}+-.,';
// Longitudes
const mayusLettersPassLen = 4;
const minusLettersPassLen = 6;
const numLen = 3;
const specialLen = 2;
// Contraseña
let pass = '';

const buttonHandler = () => {
  let pass = '';

  for (let i = 0; i < mayusLettersPassLen; i++) {
    const randomMayus = Math.floor(Math.random() * mayusLetters.length);
    pass += mayusLetters[randomMayus];
  }
  // Se generan 4 letras mayusculas

  for (let i = 0; i < minusLettersPassLen; i++) {
    const indiceAleatorio = Math.floor(Math.random() * minusLetters.length);
    pass += minusLetters[indiceAleatorio];
  }
  // Se generan 6 letras minúsculas

  for (let i = 0; i < numLen; i++) {
    const indiceNums = Math.floor(Math.random() * numbers.length);
    pass += numbers[indiceNums];
  }
  // Se generan 3 números

  for (let i = 0; i < specialLen; i++) {
    const indiceAleatorio = Math.floor(Math.random() * specials.length);
    pass += specials[indiceAleatorio];
  }
  // Se generan 2 cáracteres especiales

  pass = pass
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  // Se "desordenan" para que sean totalmente aleatorias.

  const input = document.getElementById('inputPass');

  input.value = pass;
};
