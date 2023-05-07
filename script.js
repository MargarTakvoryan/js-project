let side = 100
let n = 100
let m = 50
let p = 100
let q = 100
let r = 100
let g = 100

let matrix = []
let grassArr = []
let grassEatArr = []
let predatorArr = []
let ultraPredatorArr = []
let treeArr = []
function matrixGenerator(size, countGrass, countGrassEater, predatorCount, ultraPredatorCount, treeCount) {
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }

    }
    for (let k = 0; k < countGrass; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
        else {
            k--
        }


    }
    for (let k = 0; k < countGrassEater; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
        else {
            k--
        }
    }
    for (let k = 0; k < predatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
        else {
            k--
        }
    }
    for (let k = 0; k < ultraPredatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
        else {
            k--
        }
    }
    for (let k = 0; k < treeCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
        else {
            k--
        }
    }
}

function setup() {
    frameRate(5);
    matrixGenerator(8, 5, 4, 5, 1, 1);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEat = new GrassEater(x, y)
                grassEatArr.push(grassEat)
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y)
                predatorArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                let ultraPredator = new UltraPredator(x, y)
                ultraPredatorArr.push(ultraPredator)
            }
            else if (matrix[y][x] == 5) {
                let tree = new Tree(x, y)
                treeArr.push(tree)
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("#23db2f");
            }
            else if (matrix[y][x] == 2) {
                fill("#dbdb23");
            }
            else if (matrix[y][x] == 3) {
                fill("#fc2b2b");
            }
            else if (matrix[y][x] == 4) {
                fill("#232470");
            }
            else if (matrix[y][x] == 5) {
                fill("#035702");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i in treeArr) {
        treeArr[i].mul()
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEatArr) {
        grassEatArr[i].eat()
    }
    for (let i in grassEatArr) {
        grassEatArr[i].mul()
    } q
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
    }
    for (let i in ultraPredatorArr) {
        ultraPredatorArr[i].eat()
    }
    for (let i in ultraPredatorArr) {
        ultraPredatorArr[i].mul()
    }
}