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
//ancrevekav = 0;


var Grass = require("./moduls/class.grass.js");
var GrassEater = require("./moduls/class.eatgrass.js");
var Predator = require("./moduls/class.gishatich.js");
var Ancrev = require("./moduls/class.ancrev.js");
var Snow = require("./moduls/class.snow.js");

grassArr = [];
grasseaterArr = [];
predatorArr = [];
ancrevArr = [];
snowArr = [];

var w = 50;
var h = 50;

function genMatrix(w, h) {
  var matrix = [];
  for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
      var r = Math.floor(Math.random() * 80);
      if (r < 20) r = 0;
      else if (r < 45) r = 1;
      else if (r < 65) r = 2;
      else if (r < 70) r = 3;
      else if (r < 75) r = 8;
      else if (r < 80) r = 9;

      matrix[y][x] = r;
      //console.log(matrix[y][x]);
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
    if (w == "Summer") {
      if (matrix[y][x] == 8) {
        ancrevArr.push(new Ancrev(x, y, 8));
      }
    }
    if (w == "Winter") {
      if (matrix[y][x] == 9) {
        snowArr.push(new Snow(x, y, 9));
      }
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
  for (var i in ancrevArr) {
    ancrevArr[i].eat();
    ancrevArr[i].die();
  }
  for (var i in snowArr) {
    snowArr[i].eat();
    snowArr[i].die();
  }

  io.sockets.emit("matrix", matrix);
}
function draw_wheater() {
  Weatherinit++;
  if (Weatherinit == 5) {
    Weatherinit = 1;
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
    // if (x != undefined && y != undefined){
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
  socket.on("kesdzax", function () {
    for (var y = 0; y < w; y++) {
      for (var x = 0; x < h; x++) {
        if (x + y >= (x * y) / 2) {
          matrix[y][x] = 5;
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
  socket.on("kesaj", function () {
    for (var y = 0; y < w; y++) {
      for (var x = 0; x < h; x++) {
        if (x != 0 && y != 0) {
          if (x + y <= (x * y) / 5) {
            matrix[y][x] = 6;
          }
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
        if (x == y) {
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