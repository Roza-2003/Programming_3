var matrix = [];
var x = 40;
var y = 40;

var Grass = require('./class.grass');
var StandardCritter = require('./class.eatgrass');
var Gishatich = require('./class.gishatich');
var Snow = require('./class.snow');
var Ancrev = require('./class.ancrev');

for (var a = 0; a < y; a++) {
    matrix[a] = [];
    for (var b = 0; b < x; b++) {
         var rand = Math.floor(Math.random() * 6);
         matrix[a][b] = rand;
        //matrix[a][b] = randomItemPromArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,4,5,5,5,6,6,6]);
    }
}

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
            matrix[i][j] = new Grass(j, i, 1);
        }
        else if (matrix[i][j] == 2) {
            matrix[i][j] = new StandardCritter(j, i, 2);
        }
        else if (matrix[i][j] == 3) {
            matrix[i][j] = new Gishatich(j, i, 3);
        }
        else if (matrix[i][j] == 4) {
            matrix[i][j] = new Snow(j, i, 4);
        } 
        else if (matrix[i][j] == 5) {
            matrix[i][j] = new Ancrev(j, i, 5);
        }
    }
}


function xot() {
  var dzg = 20;
  while (dzg > 0) {
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
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
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
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
    var x1 = Math.floor(Math.random() * (x - 1));
    var y1 = Math.floor(Math.random() * (y - 1));
    if (matrix[y1][x1] == 0) {
      matrix[y1][x1] = 4;
      gishatichArr.push(new Gishatich(x1, y1, 3));
      dzg--;
    }
  }
}



//??export 

function randomItemPromArray(num){
    return Math.floor(Math.random() * num);
}
 module.exports = matrix;