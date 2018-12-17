function andzrevStexcel() {
  var dzg = 10;
  while (dzg > 0) {
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
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
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
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
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
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
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
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
    var x1 = Math.floor(random(x - 1));
    var y1 = Math.floor(random(y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      gishatichArr.push(new Gishatich(x1, y1, 4));
      dzg--;
    }
  }
}

var side = 20;

function setup() {
  frameRate(3);
  createCanvas(x * side, y * side);
  background('#FAFDAD');
  socket = io();
  socket.on("send matrix", function (mtx) {
    matrix = mtx;
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    console.log(matrix);
  });

  if (weather == "winter") {
    background("#acacac");
  }
  else if (weather == "summer") {
    background("#FAFDAD");
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 3) {
        fill("red");
        rect(j * side, i * side, side, side);
      }
      else if (weather == "winter") {
        if (matrix[i][j] == 4) {
          fill("write");
          ellipse(j * side + 10, i * side + 10, side, side);
        }
      }
      else if (weather == "summer") {
        if (matrix[i][j] == 5) {
          fill("#84BDF6");
          ellipse(j * side + 10, i * side + 10, side, side);

        }
      }
    }
  }
}


var dzyunKa = false;

function draw() {
  if (weather == "winter") {
    background("#acacac");
  }
  else if (weather == "summer") {
    background("#FAFDAD");
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 3) {
        fill("red");
        rect(j * side, i * side, side, side);
      }
      else if (weather == "winter") {
        if (matrix[i][j] == 4) {
          fill("write");
          ellipse(j * side + 10, i * side + 10, side, side);
        }
      }
      else if (weather == "summer") {
        if (matrix[i][j] == 5) {
          fill("#84BDF6");
          ellipse(j * side + 10, i * side + 10, side, side);

        }
      }
    }
  }
}
