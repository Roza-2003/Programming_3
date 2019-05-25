var side = 20;

var socket = io();
var wetherclient = "Summer";

socket.on("exanak", function (w) {
  wetherclient = w;
});
// socket.on("exanakBACK",function setup() {
//   createCanvas(20 * side, 20 * side);
//   console.log("background");
// });
function setup() {
  createCanvas(20 * side, 20 * side);
  background("#acacac");
}

function drawWeather(w) {
  var p = document.getElementById("seasons");
  var weather = w;

  if (weather == "Summer") {
    p.innerText = "Summer";
  }
  else if (weather == "Autumn") {
    p.innerText = "Autumn";
  }
  else if (weather == "Winter") {
    p.innerText = "Winter";
  }
  else if (weather == "Spring") {
    p.innerText = "Spring";
  }
}
function drawMatrix(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 1) {
        if (wetherclient == "Summer") {
          fill("green");
        }
        else if (wetherclient != "Summer") {
          fill("#e25802");
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        if (wetherclient == "Winter") {
          fill("#b1e2e0");
        }
        else if (wetherclient != "Winter") {
          fill("purple");
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill("red");
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
        fill("wite");
        rect(x * side, y * side, side, side);
      }
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
  socket.emit("kes");
}
function HalfButtonLeft() {
  socket.emit("kesdzax");
}
function Corner() {
  socket.emit("ankyun");
}