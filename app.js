var express = require("express");
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

xotArr = [];
xotakerArr = [];
gishatichArr = [];
snowArr = [];
ancrevArr = [];

// xotClec = 0;
// xotakerCnvec = 0;
// gishatichCnvec = 0;
// ancrevEkav = 0;
// cyunEkav = 0;
var ancrev = require('./moduls/class.ancrev.js');
var snow = require('./moduls/class.snow.js');

var matrix = require("./moduls/matrix.js");

var weather = "summer";

var takter = -1;

var frameRate = 1;
var time = 1000 / frameRate;


function andzrevStexcel(x, y,index) {
  var dzg = 10;
  while (dzg > 0) {

    var x1 = Math.floor(Math.random() * x);
    var y1 = Math.floor(Math.random() * y);

    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = new ancrev(x1, y1, 5);
      dzg--;
    }
  }
}

function dzyunStexcel(x, y) {
  var dzg = 10;

  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * x);
    var y1 = Math.floor(Math.random() * y);
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = new snow(x1, y1, 4);
      dzg--;
    }
  }
}

io.on('connection', function (socket) {
  socket.emit("first matrix", matrix);

  socket.emit("exanak", weather);

  setInterval(function () {

    takter++;
    console.log(takter);

    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x].index == 1) {
          matrix[y][x].mul(matrix);
        }
        else if (matrix[y][x].index == 2) {
          matrix[y][x].eat(matrix);
        }
        else if (matrix[y][x].index == 3) {
          matrix[y][x].eat(matrix);
        }
        else if (matrix[y][x].index == 4) {
          matrix[y][x].eat(matrix);
        }
        else if (matrix[y][x].index == 5) {
          matrix[y][x].eat(matrix);
        }
      }

      if (takter % 200 == 0) {
        weather = "summer";
        andzrevStexcel(x, y,index);
        console.log(index);

        if (matrix[y][x].index == 4)
          matrix[y][x] = 0;
      }
      else if (takter % 200 == 100) {
        weather = "winter";

        dzyunStexcel(x, y);

        if (matrix[y][x].index == 5)
          matrix[y][x] = 0;
      }
    }

    socket.emit("redraw matrix", matrix);
    console.log("emit");
  }, time);
});

