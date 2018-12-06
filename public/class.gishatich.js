class Gishatich extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 8;
		this.power = 0;
		this.direction;
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
		if (this.energy >= 20) {
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