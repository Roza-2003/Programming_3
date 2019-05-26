var LivingCreature = require("./class.LivingCreature");
module.exports =  class ancrev extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.index = index;
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
	eat() {
		var new_x = Random(this.chooseCell(1));
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 	matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in grassArr) {
				if (grassArr[i].x == x && grassArr[i].y == y) {
					grassArr.splice(i, 1);
				}
			}
			for (var i in grasseaterArr) {
				if (grasseaterArr[i].x == x && grasseaterArr[i].y == y) {
					grasseaterArr.splice(i, 1);
				}
			}
			for (var i in predatorArr) {
				if (predatorArr[i].x == x && predatorArr[i].y == y) {
					predatorArr.splice(i, 1);
				}
			}
		}
		//ancrevekav++;
	}
	die() {
		if (Weather = "Winter") {
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