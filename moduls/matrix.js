var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


matrix = [];
var x = 40;
var y = 40;
xotArr = [];
xotakerArr = [];
gishatichArr = [];
snowArr = [];
ancrevArr = [];
var takter = -1;
weather = "summer";
var grass = require('./classes/Grass.js');
var StandardCritter = require('./classes/StandardCritter.js');
var gishatich = require('./classes/Gishatich.js');
var snow = require('./classes/snow.js');
var ancrev = require('./classes/ancrev.js');

function andzrevStexcel() {
    var dzg = 10;
    while (dzg > 0) {
        var x1 = Math.floor(Math.random() * (x - 1));
        var y1 = Math.floor(Math.random() * (y - 1));
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
        var x1 = Math.floor(Math.random() * (x - 1));
        var y1 = Math.floor(Math.random() * (y - 1));
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
        var x1 = Math.floor(Math.random() * (x - 1));
        var y1 = Math.floor(Math.random() * (y - 1));
        if (matrix[y1][x1] == 0) {
            matrix[y1][x1] = 1;
            xotArr.push(new grass(x1, y1, 1));
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
            gishatichArr.push(new Gishatich(x1, y1, 4));
            dzg--;
        }
    }
}

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
            xotArr.push(new grass(j, i, 1));
        }
        else if (matrix[i][j] == 2) {
            xotakerArr.push(new StandardCritter(j, i, 2));
        }
        else if (matrix[i][j] == 3) {
            gishatichArr.push(new gishatich(j, i, 3));
        }
    }
}

takter++;
if (takter % 200 == 0) {
    weather = "summer";
    andzrevStexcel();

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4)
                matrix[y][x] = 0;
        }
    }
    console.log(ancrevArr);
}
else if (takter % 200 == 100) {
    weather = "winter";
    dzyunStexcel();

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5)
                matrix[y][x] = 0;
        }
    }
    console.log(snowArr);

}