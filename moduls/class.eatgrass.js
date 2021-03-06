var LivingCreature = require("./class.LivingCreature");
module.exports = class GrassEater extends LivingCreature {
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
		//serveri Random function em ogtagorcum
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
	}
	eat() {
		var grass = Random(this.chooseCell(1));

		if (grass) {
			var newX = grass[0];
			var newY = grass[1];
			matrix[newY][newX] = this.index;

			matrix[this.y][this.x] = 0;
			for (var i in grassArr) {
				if (newX == grassArr[i].x && newY == grassArr[i].y) {
					grassArr.splice(i, 1);
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
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grasseaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 0;
        }
    }
	die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grasseaterArr) {
                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                }
            }
		}
		xotakerMahacav++;
    }
}

// 	mul(matrix) {
// 		this.energy++;
// 		var datarkVandakner = this.chooseCell(0);
// 		var norVandak = randomInRange(datarkVandakner, matrix);

// 		if (norVandak && this.energy >= 8) {
// 			var norX = norVandak[0];
// 			var norY = norVandak[1];

// 			matrix[norY][norX] = new StandardCritter(norX, norY, this.index);
// 			this.energy = 6;
// 		}
// 	}
// }