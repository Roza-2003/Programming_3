var LivingCreature = require("./class.LivingCreature");

module.exports = class Grass extends LivingCreature {
    
    mul(matrix) {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0,matrix);
        var norVandak = randomInRange(datarkVandakner);

        if (norVandak && this.multiply >= 8) {
            var norX = norVandak[0];
            var norY = norVandak[1];

            matrix[norY][norX] = new Grass(norX, norY, this.index);
            this.multiply = 0;
        }
    }
}

function randomInRange(arr){
    return arr[Math.floor(Math.random() * arr.length)];

}