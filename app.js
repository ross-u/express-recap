const express = require('express');

const app = express();

app.use(express.static('public'));

// ROUTES

app.get('/', (request, response, next) => {
  console.log(__dirname);

  response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

// START SERVER
app.listen(3000, () => {
  console.log('Server running');
});
