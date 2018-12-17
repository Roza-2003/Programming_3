var matrix = [];
var x = 40;
var y = 40;
var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var snowArr = [];
var ancrevArr = [];
var takter = -1;
var weather = "summer";

var Grass = require('./classes/Grass.js');
var StandardCritter = require('./classes/StandardCritter.js');
var gishatich = require('./classes/Gishatich.js');
var snow = require('./classes/snow.js');
var ancrev = require('./classes/ancrev.js');


for (var a = 0; a < y; a++) {
    matrix[a] = [];
    for (var b = 0; b < x; b++) {
        var rand = Math.floor(Math.random() * 6);
        matrix[a][b] = rand;
    }
}

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
            xotArr.push(new Grass(j, i, 1));
        }
        else if (matrix[i][j] == 2) {
            xotakerArr.push(new StandardCritter(j, i, 2));
        }
        else if (matrix[i][j] == 3) {
            gishatichArr.push(new gishatich(j, i, 3));
        }
    }
}