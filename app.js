var express = require("express");
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('./public/index.html');
});

server.listen(3000, function () {
  console.log("port is runninng")
});


Weather = "Summer";
Weatherinit = 1;

xotClec = 0;
xotakerCnvec = 0;
gishatichCnvec = 0;
xotakerMahacav = 0;
predatorMahacav = 0;

var Grass = require("./moduls/class.grass.js");
var GrassEater = require("./moduls/class.eatgrass.js");
var Predator = require("./moduls/class.gishatich.js");

grassArr = [];
grasseaterArr = [];
predatorArr = [];

var w = 50;
var h = 50;

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
      xotClec++;
    }
    else if (matrix[y][x] == 2) {
      grasseaterArr.push(new GrassEater(x, y, 2));
      xotakerCnvec++;
    }
    else if (matrix[y][x] == 3) {
      predatorArr.push(new Predator(x, y, 3));
      gishatichCnvec++;
    }
  }
}

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
  if (Weatherinit == 1) {
    Weather = "Summer";
  }
  else if (Weatherinit == 2) {
    Weather = "Spring";
  }
  else if (Weatherinit == 3) {
    Weather = "Winter";
  }
  else if (Weatherinit == 4) {
    Weather = "Autumn";
  }
  else if (Weatherinit == 5) {
    Weather == 1;
  }
  io.sockets.emit("exanak", Weather);
}

io.on('connection', function (socket) {
  socket.on("Sxmvec", function (arr) {
    var x = arr[0];
    var y = arr[1];

    kordinatner = [
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1]
    ];

    if (matrix[y][x] == 1) {
      for (var i in grassArr) {
        if (y == grassArr[i].y && x == grassArr[i].x) {
          grassArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[y][x] == 2) {
      for (var i in grasseaterArr) {
        if (y == grasseaterArr[i].y && x == grasseaterArr[i].x) {
          grasseaterArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[y][x] == 3) {
      for (var i in predatorArr) {
        if (y == predatorArr[i].y && x == predatorArr[i].x) {
          predatorArr.splice(i, 1);
          break;
        }
      }
    }
    matrix[y][x] = 0;

    for (var i in kordinatner) {
      var kordX = kordinatner[i][0];
      var kordY = kordinatner[i][1];
      if (kordX >= 0 && kordX < matrix[0].length && kordY >= 1 && kordY < matrix[1].length) {
        if (matrix[kordY][kordX] == 1) {
          for (var i in grassArr) {
            if (kordY == grassArr[i].y && kordX == grassArr[i].x) {
              grassArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[kordY][kordX] == 2) {
          for (var i in grasseaterArr) {
            if (kordY == grasseaterArr[i].y && kordX == grasseaterArr[i].x) {
              grasseaterArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[kordY][kordX] == 3) {
          for (var i in predatorArr) {
            if (kordY == predatorArr[i].y && kordX == predatorArr[i].x) {
              predatorArr.splice(i, 1);
              break;
            }
          }
        }
      }
    }
    matrix[kordY][kordX] = 0;
  });
})
io.on('connection', function (socket) {
  socket.on("kes", function () {

    for (var y = 0; y < w; y++) {
      for (var x = 0; x < h; x++) {
        if (x + y >= (x * y) / 2) {
          matrix[y][x] = 5;
        }
      }
    }
    io.sockets.emit("matrix", matrix);
  });
})
io.on('connection', function (socket) {
  socket.on("kesdzax", function () {

    for (var y = 0; y < w; y++) {
      for (var x = 0; x < h; x++) {
        if (x + y <= (x * y) / 6) {
          matrix[y][x] = 6;
        }
      }
    }
    grassArr.length = 0;
    grasseaterArr.length = 0;
    predatorArr.length = 0;
    io.sockets.emit("matrix", matrix);
  });
})
io.on('connection', function (socket) {
  socket.on("ankyun", function () {
    for (var y = 0; y < w; y++) {
      for (var x = 0; x < h; x++) {
        if (y == x) {
          matrix[y][x] = 7;
        }
      }
    }
    grassArr.length = 0;
    grasseaterArr.length = 0;
    predatorArr.length = 0;
    io.sockets.emit("matrix", matrix);
  });
})
var obj = { "info": [] };

function main() {
  var file = "Statistics.json";
  obj.info.push({ "Աճած խոտերի քանակ": xotClec, "Ծնված խոտակերների քանակ": xotakerCnvec, "Ծնված գիշատիչների քանակ": gishatichCnvec, "Մահացած խոտակերների քանակ": xotakerMahacav, "Մահացած գիշատիչների քանակ": predatorMahacav });  
  fs.writeFileSync(file, JSON.stringify(obj, null, 3));
}
setInterval(drawserever, 1000);
setInterval(draw_wheater, 6000);
setInterval(main, 2000);

