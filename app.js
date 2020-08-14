const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');
// require('./routes/routes');

// Middleware
app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

// Configuracion de rutas a renderizar
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'daniel aviles'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(3000, () => {
  console.log('Escuchando peticiones en el puerto 3000');
});