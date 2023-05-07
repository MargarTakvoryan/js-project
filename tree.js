class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(random(10));

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
        let newCell1 = random(this.chooseCell(0));
        let newCell2 = random(this.chooseCell(1));
        let all = [newCell1, newCell2]
        let newCell = random(all)
        if (this.multiply >= 50 && newCell) {
            var newTree = new Tree(newCell[0], newCell[1]);
            treeArr.push(newTree);
            matrix [newCell[1]][newCell[0]] = 5;
            this.multiply = 0;
        }
    }
}
    