var side = 20;
//var weather;
//var matrix = [];
var socket = io();
var wetherclient = "Summer";

socket.on("exanak", function (w) {
  wetherclient = w;
});

function setup() {
  createCanvas(20 * side, 20 * side);
  background('#FAFDAD');
}

function drawWeather(w) {
  var p = document.getElementById("seasons");
  var weather = w;
  //console.log(weather);
  if (weather == "Summer") {
    p.innerText = "Summer";
  }
  else if (weather == "Winter") {
    p.innerText = "Winter";
  }
  else if (weather == "Autumn") {
    p.innerText = "Autumn";
  }
  else if (weather == "Spring") {
    p.innerText = "Spring";
  }
}
function drawMatrix(matrix) {
  background('#33FFFF');
  // console.log(matrix);
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
        if (wetherclient == "Winter") {
          fill("#b1e2e0");
        }
        else if (wetherclient != "Winter") {
          fill("Yellow");
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill("blue");
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
  // console.log(arr);
  socket.emit("Sxmvec", arr)
}
function FireButton() {
  socket.emit("armagedon");
}