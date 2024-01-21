function convertChar(char) {
    let object =
    {
        "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8,
    }
    return object[char]
}

function convertNum(num) {
    let object = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H",
    }
    return object[num]
}

function Pawn(X, Y) {
    this.X = X;
    this.Y = Y;
    this.name = 'Пешка';
    this.info = function () {
        if (this.Y < 8) {
            alert(`Допустимые позиции хода:${convertNum(this.X)}${this.Y + 1}`);
        }
        else {
            alert(`Допустимого хода нет`);
        }
    }
    this.move = function (position) {
        let positionX = convertChar(position[0])
        let positionY = Number(position[1])
        if (this.X == positionX && this.Y < 8 && this.Y + 1 == positionY) {
            this.X = positionX
            this.Y = positionY
            alert(`Новая позиция фигуры ${convertNum(positionX)}${positionY}`)
            return true
        }
        return false
    }
}
