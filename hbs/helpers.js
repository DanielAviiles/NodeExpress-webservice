const hbs = require('hbs');

// helpers
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' '); // Identificar la palabra mediante un espacio
  palabras.forEach((letra, idx) => {
    palabras[idx] = letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();
    // Metodo JavaScript para capitalizar la primera letra de una palabra
  });

  return palabras.join(' ');
});
