var side = 20;
//var weather;
//var matrix = [];
var socket = io();


function setup() {
  createCanvas(20 * side, 20 * side);
  background('#FAFDAD');

  // frameRate(0);
  // background('#FAFDAD');

  // socket = io();

  // socket.on("first matrix", function (mtx) {
  //   matrix = mtx;
  //   createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
  //   console.log(matrix);

  // socket.on("exanak", function (wth) {
  //   weather = wth;
  // });

  // socket.on("redraw matrix", function(mtx){
  //   matrix = mtx;
  //   redraw();
  // });
  // });
}
// noLoop();
// }
function drawMatrix(matrix) {
  background('grey');
  console.log(matrix);
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 0) {
        fill("grey");
      }
      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("red");
      }
      rect(x * side, y * side, side, side);
    }
  }
}
socket.on("matrix", drawMatrix);


// var dzyunKa = false;

// function draw() {
//   socket.on("exanak", function (wth) {
//     weather = wth;
//   });
//   console.log(weather);

//   if (weather == "winter") {
//     background("#acacac");
//   }
//   else if (weather == "summer") {
//     background("#FAFDAD");
//   }
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j].index == 1) {
//         fill("green");
//         rect(j * side, i * side, side, side);
//       }
//       else if (matrix[i][j].index == 2) {
//         fill("yellow");
//         rect(j * side, i * side, side, side);
//       }
//       else if (matrix[i][j].index == 3) {
//         fill("red");
//         rect(j * side, i * side, side, side);
//       }
//       else if (weather == "winter") {
//         if (matrix[i][j].index == 4) {
//           fill("write");
//           ellipse(j * side + 10, i * side + 10, side, side);
//         }
//       }
//       else if (weather == "summer") {
//         if (matrix[i][j].index == 5) {
//           fill("#84BDF6");
//           ellipse(j * side + 10, i * side + 10, side, side);

//         }
//       }
//     }
//   }
  // textSize(30);
  // fill("black");
  // text("Game of life");
  // line(70,80,130,180);
// }
