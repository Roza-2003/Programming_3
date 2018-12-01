class StandardCritter {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.energy = 8;
		this.power = 0;
		this.index = index;
		this.direction;
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

	move() {
		var x = this.getNewDirections(0);
		var new_x = random(x);
		if (new_x) {
			this.energy--;
			var x = new_x[0];
			var y = new_x[1];
			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;

			if (this.energy == 0) {
				this.die();
			}
		}
	}
	eat() {

		var x = this.getNewDirections(1);
		var new_x = random(x);
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}
		}
		if (this.energy >= 25) {
				this.mul();
				this.energy = 20;
			}
		else {
			this.move();
		}
	}
	die() {
		matrix[this.y][this.x] = 0;
		for (var i in xotakerArr) {
			if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
				xotakerArr.splice(i, 1);
				break;
			}
		}
	}
	mul() {
		this.energy++;
		var datarkVandakner = this.chooseCell(0);
		var norVandak = random(datarkVandakner);
		if (norVandak) {
			var norX = norVandak[0];
			var norY = norVandak[1];
			matrix[norY][norX] = 2;

			var norXot = new StandardCritter(norX, norY, this.index);
			xotakerArr.push(norXot);
			this.energy = 6;
		}
	}
}

class Gishatich {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.energy = 8;
		this.power = 0;
		this.index = index;
		this.direction;
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
	
	chooseCell(character) {
		this.newDirections();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == character) {
					found.push(this.directions[i]);
				}
			}

		}
		return found;
	}
	move() {
		var x = this.chooseCell(1);
		var new_x = random(x);
		if (new_x) {

			var x = new_x[0];
			var y = new_x[1];
			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;


		}
		this.energy--;
		if (this.energy == 0) {
			this.die();
		}
	}
	eat() {
		var x = this.chooseCell(2);
		var new_x = random(x);
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in xotakerArr) {
				if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
					xotakerArr.splice(i, 1);
				}
			}
		}
		if(this.energy >= 20){
				this.mul();
			}
		else {
			this.move();
		}
	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in gishatichArr) {
			if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
				gishatichArr.splice(i, 1);
				break;
			}
		}
	}
	mul() {
		this.energy++;
		var datarkVandakner = this.chooseCell(1);
		var norVandak = random(datarkVandakner);
		if (norVandak) {
			var norX = norVandak[0];
			var norY = norVandak[1];
			matrix[norY][norX] = 3;
			var norXot = new Gishatich(norX, norY, this.index);
			gishatichArr.push(norXot);
			this.energy = 5;
		}

	}
}