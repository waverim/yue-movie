var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.get('/movie_list.json', function(req, res) {
  fs.readFile(path.join(__dirname, 'js/movie_list.json'), function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, function () {
  console.log('Server started: http://localhost:3000/');
});
