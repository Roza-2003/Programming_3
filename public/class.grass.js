class Grass extends LivingCreature {
        mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);
      
        if (norVandak && this.multiply >= 8) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 1;

            var norXot = new Grass(norX, norY, this.index);
            xotArr.push(norXot);
            this.multiply = 0;
            
        }
    }
}