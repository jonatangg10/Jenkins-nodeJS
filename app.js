var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hola grupo Devops, Soy Jonatan Gutierrez y esto es una prueba de Jenkins - Node.js - github - docker.hub');
  res.sendFile(__dirname + '/index.html')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuchando a http://%s:%s', host, port);
});
