//                                           $$$$$$$\  $$\   $$\           
//                                           $$  __$$\ $$ | $$  |          
//    $$$$$$$\ $$$$$$$\   $$$$$$\   $$$$$$\  $$ |  $$ |$$ |$$  /  $$$$$$\  
//   $$  _____|$$  __$$\ $$  __$$\  \____$$\ $$$$$$$\ |$$$$$  /   \____$$\   $$\ 
//   $$ /      $$ |  $$ |$$ /  $$ | $$$$$$$ |$$  __$$\ $$  $$<    $$$$$$$ |  \__|
//   $$ |      $$ |  $$ |$$ |  $$ |$$  __$$ |$$ |  $$ |$$ |\$$\  $$  __$$ |
//   \$$$$$$$\ $$ |  $$ |$$$$$$$  |\$$$$$$$ |$$$$$$$  |$$ | \$$\ \$$$$$$$ |  $$\
//    \_______|\__|  \__|$$  ____/  \_______|\_______/ \__|  \__| \_______|  \__|
//                       $$ |                                              
//                       $$ |                                              
//                       \__|                                              
//
// Это слияние 2-ух работ Практики 6 и 7.
//

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function Map(name) {
    this.player = name,
        this.width = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"],
        this.height = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
        this.enableShips = [4, 3, 2, 1],
        this.setShips = [0, 0, 0, 0],
        this.map = [],

        this.init = function () {
            for (var i = 0; i < this.width.length; i++) {
                var line = [];
                for (var j = 0; j < this.height.length; j++) {
                    line[j] = "[ ]";
                }
                this.map[i] = line;
            }
            //console.log(this.map);
            this.startSetShips();
            //this.checkMap();
        },

        this.checkMap = function () {
            var player = this.player;
            var header = " ";
            for (var j = 0; j < this.width.length; j++) {
                var mapLine = "";
                for (var i = 0; i < this.height.length; i++) {
                    mapLine += this.map[i][j];
                    if (j == 0) {
                        header += ` ${this.width[i]} `;
                    }
                }
                if (j == 0) {
                    console.log(player);
                    console.log(header);
                }
                console.log(`${this.height[j]} ${mapLine}`);
            }
        },

        this.plateShip = function (x, y, size, orientation) {
            var posList = [];
            for (var i = 0; i < size; i++) {
                if (orientation == "Horizontal") {
                    if (this.checkPos(x + i, y)) {
                        posList[i] = [x + i, y];
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (this.checkPos(x, y + i)) {
                        posList[i] = [x, y + i];
                    }
                    else {
                        return false;
                    }
                }
            }

            for (var i = 0; i < posList.length; i++) {
                this.map[posList[i][0]][posList[i][1]] = "[o]";
            }
            return true;

        },

        this.checkPos = function (x, y) {
            if (x < 0 || x > 9 || y < 0 || y > 9)
                return false;

            posX = x - 1;
            posY = y - 1;

            for (var i = posX; i < posX + 3; i++)
                for (var j = posY; j < posY + 3; j++)
                    if (i >= 0 && i <= 9 && j >= 0 && j <= 9)
                        if (this.map[i][j] != "[ ]")
                            return false;
            return true;
        },

        this.startSetShips = function () {
            for (var i = 0; i < this.enableShips.length; i++) {
                while (this.enableShips[i] != this.setShips[i]) {

                    if (this.plateShip(randomInt(0, 9), randomInt(0, 9), i + 1, randomInt(0, 1) == 0 ? "Horizontal" : "Vertical")) {
                        this.setShips[i]++;
                    }
                }
            }
            this.checkMap();
        }
}
var playerTurn = true

Map.prototype.shoot = function (cond) {
    var x;
    var y;
    let check
    if (cond == false) {
        x = prompt("Введите строку", "A-K");
        y = Number(prompt("Введите столбец", "1-10")) - 1;

        check = false;
        for (let i = 0; i < this.width.length; i++) {
            if (x == this.width[i]) {
                x = i;
                check = true;
            }
        }
    } else {
        do { 
            x=randomInt(0,9);
            y=randomInt(0,9);
        }while(this.map[x][y]=="[-]" || this.map[x][y]=="[x]")
        alert(`Компьютер выстрелил в точку ${this.width[x]}${y+1}`);
    }

    if (x < 0 || x > 9 && y < 0 || y > 9 || check == false) {
        alert("Недопустимая координата");
        return "error";
    }
    else {
        if(this.map[x][y]=="[o]") { 
            this.map[x][y] = "[x]"
            console.clear();
            player.checkMap();
            compuer.checkMap();
            alert(`Попал! Корабль:${this.width[x]}${y+1}`);
            return "hit";
        } else { 
            this.map[x][y] = "[-]"
            console.clear();
            player.checkMap();
            compuer.checkMap();
            alert(`${this.width[x]}${y+1} - Промах!`);
            return "miss";
        }
        this.map[x][y] = "[x]";
    }
}

const check_turn = function(cond) {
    if (playerTurn) { 
        if(cond=="error"||cond=="hit") {
            playerTurn = true; } else { playerTurn = false;
        }
    } else {
        if(cond=="hit") { 
            playerTurn = false; } else { playerTurn = true;
        }
    }
}
let gameOver;
const endGame = function() { 
    let playerHaveShips = false;
    let compHaveShips = false;
    for (let x=0; x < 10; x++)
    for (let y=0; y<10; y++) {
        if (player.map[x][y]=="o") {
            playerHaveShips = true;
        }
        if (compuer.map[x][y]=="o") {
            compHaveShips = true;
        }
    }
    if (playerHaveShips)
        return "Игрок проиграл"
    if (compHaveShips)
        return "Компьютер проиграл"

    return(``)
}

var player = new Map("Player");
player.init();

var compuer = new Map("Computer");
compuer.init();

while(true) { 
    if (playerTurn) { 
        check_turn(compuer.shoot(false))
    } else {
        check_turn(player.shoot(true))
    }

    gameOver = endGame();
    if (gameOver!=``) {
        alert(gameOver);
    }
}