var LivingCreature = require("./class.LivingCreature");
module.exports =  class snow extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 5;
		this.multiply = 0;
		this.directions;
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
	eat() {
		var x = this.getNewDirections(2);
		var new_x = random(x);
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
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
			}

		}
	}
	die() {
		if (weather = "summer") {
			matrix[this.y][this.x] = 0;
			for (var i in snowArr) {
				if (this.x == snowArr[i].x && this.y == snowArr[i].y) {
					snowArr.splice(i, 1);
					break;
				}
			}
		}
	}
}	
