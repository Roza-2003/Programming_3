var express = require("express");
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {


 

});

//setInterval(draw, 500);

function draw() {
  takter++;
  console.log(takter);
  if (takter % 200 == 0) {
    weather = "summer";
    andzrevStexcel();

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 4)
          matrix[y][x] = 0;
      }
    }
    console.log(ancrevArr);
  }
  else if (takter % 200 == 100) {
    weather = "winter";
    dzyunStexcel();

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 5)
          matrix[y][x] = 0;
      }
    }
    console.log(snowArr);

  }
  for (var i in xotArr) {
    xotArr[i].mul();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
  }
  if (weather == "summer") {
    for (var i in gishatichArr) {
      gishatichArr[i].eat();
    }
  }
  if (weather == "winter") {
    for (var i in snowArr) {
      snowArr[i].eat();
    }
  }
}

function andzrevStexcel() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 5;
      ancrevArr.push(new ancrev(x1, y1, 5));
      dzg--;

    }
  }
}
function dzyunStexcel() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      snowArr.push(new snow(x1, y1, 4));
      dzg--;
    }
  }
}
function xot() {
  var dzg = 20;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 1;
      xotArr.push(new Grass(x1, y1, 1));
      dzg--;
    }
  }
}
function xotaker() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 2;
      xotakerArr.push(new StandardCritter(x1, y1, 2));
      dzg--;
    }
  }
}
function gishishatich() {
  var dzg = 5;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      gishatichArr.push(new Gishatich(x1, y1, 3));
      dzg--;
    }
  }
}


