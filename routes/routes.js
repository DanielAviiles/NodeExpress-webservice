// Configuracion de rutas a renderizar
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'daniel aviles'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});