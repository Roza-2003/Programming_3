var side = 20;

var socket = io();
wetherclient = "Summer";

socket.on("exanak", function (w) {
  wetherclient = w;
});
function setup() {
  createCanvas(20 * side, 20 * side);
  background("#acacac");
}

function drawWeather(w) {
  var p = document.getElementById("seasons");
  var weather = w;

  if (weather == "Spring") {
    p.innerText = "Spring";
  }
  else if (weather == "Summer") {
    p.innerText = "Summer";
  }
  else if (weather == "Autumn") {
    p.innerText = "Autumn";
  }
  else if (weather == "Winter") {
    p.innerText = "Winter";
  }
}
function drawMatrix(matrix) {
  background("grey");
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 0) {
        if (wetherclient == "Summer") {
          fill("#FAFDAD")
        }
        else if (wetherclient == "Spring") {
          fill("#846B65");
        }
        else if (wetherclient == "Autumn") {
          fill("#FF5733");
        }
        else if (wetherclient == "Winter") {
          fill("#acacac")
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1) {
        if (wetherclient == "Summer") {
          fill("green");
        }
        else if (wetherclient != "Summer") {
          fill("#82A965");
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        if (wetherclient == "Winter") {
          fill("#b1e2e0");
        }
        else if (wetherclient != "Winter") {
          fill("red");
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 6) {
        fill("blue");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 7) {
        fill("black");
        rect(x * side, y * side, side, side);
      }
      if (wetherclient == "Summer") {
        if (matrix[y][x] == 8) {
          fill("wite");
          ellipse(x * side + 10, y * side + 10, side, side);
        }
      }
      // for (var y = 0; y < matrix.length; y++) {
      //   for (var x = 0; x < matrix[y].length; x++) {
      //     if (matrix[y][x] == 8){
      //       matrix[y][x] = 0;
      //     }
      //   }
      // }
      if (wetherclient == "Winter") {
        if (matrix[y][x] == 9) {
          fill("silver");
          ellipse(x * side + 10, y * side + 10, side, side);
        }
      }
      // for (var y = 0; y < matrix.length; y++) {
      //   for (var x = 0; x < matrix[y].length; x++) {
      //     if (matrix[y][x] == 9){
      //        matrix[y][x] = 0;
      //     }
      //   }
      // }
    }
  }
}

socket.on("matrix", drawMatrix);
socket.on("exanak", drawWeather);

function mousePressed() {
  var x = Math.floor(mouseX / side);
  var y = Math.floor(mouseY / side);
  arr = [x, y];
  socket.emit("Sxmvec", arr);
}
function HalfButtonRight() {
  socket.emit("kesaj");
}
function HalfButtonLeft() {
  socket.emit("kesdzax");
}
function Corner() {
  socket.emit("ankyun");
}