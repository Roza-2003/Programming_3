var express = require("express");
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('./public/index.html');
});

server.listen(3000, function () {
  console.log("port is runninng")
});


Weather = "Summer";
Weatherinit = 1;
// xotClec = 0;
// xotakerCnvec = 0;
// gishatichCnvec = 0;
// ancrevEkav = 0;
// cyunEkav = 0;

// var frameRate = 1;
// var time = 1000 / frameRate;
var Grass = require("./moduls/class.grass.js");
var GrassEater = require("./moduls/class.eatgrass.js");
var Predator = require("./moduls/class.gishatich.js");
// var ancrev = require('./moduls/class.ancrev.js');
// var snow = require('./moduls/class.snow.js');

grassArr = [];
grasseaterArr = [];
predatorArr = [];
// snowArr = [];
// ancrevArr = [];

var w = 50;
var h = 60;

function genMatrix(w, h) {
  var matrix = [];
  for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
      var r = Math.floor(Math.random() * 60);
      if (r < 20) r = 0;
      else if (r < 45) r = 1;
      else if (r < 55) r = 2;
      else if (r < 60) r = 3;
      matrix[y][x] = r;
    }
  }
  return matrix;
}

Random = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

matrix = genMatrix(w, h);

for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {

    if (matrix[y][x] == 1) {
      grassArr.push(new Grass(x, y, 1));
    }
    else if (matrix[y][x] == 2) {
      grasseaterArr.push(new GrassEater(x, y, 2));
    }
    else if (matrix[y][x] == 3) {
      predatorArr.push(new Predator(x, y, 3));
    }
  }
}
// io.on('connection', function (socket) {
//   socket.emit("first matrix", matrix);

//   // socket.emit("exanak", weather);

//   setInterval(function () {

//     // takter++;
//     // console.log(takter);

//     for (var y = 0; y < matrix.length; y++) {
//       for (var x = 0; x < matrix[y].length; x++) {

//         if (matrix[y][x].index == 1) {
//           matrix[y][x].mul(matrix);
//         }
//         else if (matrix[y][x].index == 2) {
//           matrix[y][x].eat(matrix);
//         }
//         else if (matrix[y][x].index == 3) {
//           matrix[y][x].eat(matrix);
//         }
//         else if (matrix[y][x].index == 4) {
//           matrix[y][x].eat(matrix);
//         }
//         else if (matrix[y][x].index == 5) {
//           matrix[y][x].eat(matrix);
//         }
//       }

// if (takter % 200 == 0) {
//   weather = "summer";
//   andzrevStexcel(x, y,index);
//   console.log(index);

//   if (matrix[y][x].index == 4)
//     matrix[y][x] = 0;
// }
// else if (takter % 200 == 100) {
//   weather = "winter";

//   dzyunStexcel(x, y);

//   if (matrix[y][x].index == 5)
//     matrix[y][x] = 0;
// }
// }

function drawserever() {

  for (var i in grassArr) {
    grassArr[i].mul();
  }
  for (var i in grasseaterArr) {
    grasseaterArr[i].move();
    grasseaterArr[i].mul();
    grasseaterArr[i].eat();
    grasseaterArr[i].die();
  }
  for (var i in predatorArr) {
    predatorArr[i].move();
    predatorArr[i].mul();
    predatorArr[i].eat();
    predatorArr[i].die();
  }
  io.sockets.emit("matrix", matrix);
}
function draw_wheater() {
  Weatherinit++;
  if (Weatherinit == 5) {
    Weather = 1;
  }
  if (Weatherinit == 4) {
    Weather = "Autumn";
  }
  if (Weatherinit == 3) {
    Weather = "Winter";
  }
  if (Weatherinit == 2) {
    Weather = "Spring";
  }
  if (Weatherinit == 1) {
    Weather = "Summer";
  }
  io.sockets.emit("exanak", Weather);
}
io.on('connection', function (socket) {
  socket.on("Sxmvec", function (arr) {
    // var x = arr[0];
    // var y = arr[1];

    // var directions = [
    //   [x-1, y-1],
    //   [x, y-1],
    //   [x+1, y-1],
    //   [x-1, y],
    //   [x+1, y],
    //   [x-1, y+1],
    //   [x, y+1],
    //   [x+1, y+1]
    // ];

    // if (matrix[y][x] == 1){
    //   for (var i in grassArr){
    //     if(y == grassArr[i].y && x == grassArr[i].x){
    //       grassArr.splice(i,1);
    //       break;
    //     }
    //   }
    // }
    // else if (matrix[y][x] == 2){
    //   for (var i in grasseaterArr){
    //     if(y == grasseaterArr[i].y && x == grasseaterArr[i].x){
    //       grasseaterArr.splice(i,1);
    //       break;
    //     }
    //   }
    // }
    // else if (matrix[y][x] == 3){
    //   for (var i in predatorArr){
    //     if(y == predatorArr[i].y && x == predatorArr[i].x){
    //       predatorArr.splice(i,1);
    //       break;
    //     }
    //   }
    // }
    // else if (key.keyup == "up"){
    //   GrassEater.up()
    // }
    // else if (key.keydown == "down"){
    //   GrassEater.down()
    // }
    // console.log(key);
  });
});
setInterval(drawserever, 1000);
setInterval(draw_wheater, 5000);
