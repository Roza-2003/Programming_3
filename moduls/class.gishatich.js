var LivingCreature = require("./class.LivingCreature");
module.exports = class Predator extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 8;
	}
	getNewCoordinates() {
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

	chooseCell(character) {
		this.getNewCoordinates();
		return super.chooseCell(character);
	}
	move() {

		var fullCells = this.chooseCell(0);
		var newCell = Random(fullCells);

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[this.y][this.x] = 0;
			matrix[newY][newX] = this.index;
			this.x = newX;
			this.y = newY;
			this.energy--;
		}
		if (this.energy == 0) {
			this.die(matrix);
		}
	}
	eat() {
		var grass = Random(this.chooseCell(2));
		if (grass) {
			var newX = grass[0];
            var newY = grass[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in grasseaterArr) {
                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 2;

	}
}
	mul() {
		var newCell = Random(this.chooseCell(0));
		if (this.energy >= 6 && newCell) {
			var newPredator = new Predator(newCell[0], newCell[1], this.index);
			predatorArr.push(newPredator);
			matrix[newCell[1]][newCell[0]] = this.index;
			this.energy = 0;
		}
	}
	die() {
		if (this.energy <= 0) {
			matrix[this.y][this.x] = 0;
			for (var i in predatorArr) {
				if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
					predatorArr.splice(i, 1);
				}
			}
		}
	}

	// die(matrix) {
	// 	matrix[this.y][this.x] = 0;
	// }
	// mul(matrix) {
	// 	this.energy++;
	// 	var datarkVandakner = this.chooseCell(1);
	// 	var norVandak = randomInRange(datarkVandakner,matrix);
	// 	if (norVandak && this.energy >= 8) {
	// 		var norX = norVandak[0];
	// 		var norY = norVandak[1];
	// 		matrix[norY][norX] =  new Gishatich(norX, norY, this.index);
	// 		this.energy = 5;
	// 	}
	// }
}
function randomInRange(arr) {
	return arr[Math.floor(Math.random() * arr.length)];

}