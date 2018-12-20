var LivingCreature = require("./class.LivingCreature");
module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 8) {
            var norX = norVandak[0];
            var norY = norVandak[1];

            matrix[norY][norX] = new Grass(norX, norY, this.index);

            this.multiply = 0;

        }
    }
}