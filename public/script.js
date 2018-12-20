var side = 20;

function setup() {
  frameRate(3);
  createCanvas(x * side, y * side);
  background('#FAFDAD');

  /*socket = io();
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
  }*/

  /*for (var i = 0; i < matrix.length; i++) {
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
  }*/
  // noLoop();
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
  // textSize(30);
  // fill("black");
  // text("Game of life");
  // line(70,80,130,180);
}
