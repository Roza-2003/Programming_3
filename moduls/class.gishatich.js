var LivingCreature = require("./class.LivingCreature");
module.exports = class Gishatich extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 8;
		this.power = 0;
	}
	move(matrix) {
		var new_x = randomInRange(this.chooseCell(1,matrix));
		if (new_x) {
			this.energy--;

			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
		}
		
		if (this.energy == 0) {
			this.die(matrix);
		}
	}
	eat(matrix) {
		var new_x = randomInRange(this.chooseCell(1,matrix));
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
		}
		if (this.energy >= 20) {
			this.mul(matrix);
			this.energy = 15;
		}
		else {
			this.move(matrix);
		}
	}

	die(matrix) {
		matrix[this.y][this.x] = 0;
	}
	mul(matrix) {
		this.energy++;
		var datarkVandakner = this.chooseCell(1);
		var norVandak = randomInRange(datarkVandakner,matrix);
		if (norVandak && this.energy >= 8) {
			var norX = norVandak[0];
			var norY = norVandak[1];
			matrix[norY][norX] =  new Gishatich(norX, norY, this.index);
			this.energy = 5;
		}
	}
}
function randomInRange(arr){
    return arr[Math.floor(Math.random() * arr.length)];

}