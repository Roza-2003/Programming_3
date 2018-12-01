class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

    }
    chooseNewCoordinates() {
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
        this.chooseNewCoordinates();
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