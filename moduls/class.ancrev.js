var LivingCreature = require("./class.LivingCreature");
module.exports =  class ancrev extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 5;
		this.multiply = 0;
	}
	newDirections() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	getNewDirections(t) {
		this.newDirections();
		var found = [];

		for (var i in this.directions) {
			var a = this.directions[i][0];
			var b = this.directions[i][1];
			if (a >= 0 && a < matrix[0].length && b >= 0 && b < matrix.length) {
				if (matrix[b][a] == t) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	eat(matrix) {
		var new_x = randomInRange(this.chooseCell(1,matrix));
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 	matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			/*for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}
			for (var i in xotakerArr) {
				if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
					xotakerArr.splice(i, 1);
				}
			}
			for (var i in gishatichArr) {
				if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
					gishatichArr.splice(i, 1);
				}
			}*/

		}
	}
	die(matrix) {
		if (weather = "summer") {
			matrix[this.y][this.x] = 0;
			/*for (var i in snowArr) {
				if (this.x == snowArr[i].x && this.y == snowArr[i].y) {
					snowArr.splice(i, 1);
					break;
				}
			}*/
		}
	}
}
function randomInRange(arr){
    return arr[Math.floor(Math.random() * arr.length)];

}