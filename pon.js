let character = {
    nickname: "slaimmials",
    health: 84,
    maxHealth: 100,
    defeat: false,

    getInfo() {
        alert(`Nickname: ${this.nickname}\nЗдоровье: ${this.health}`)
    },
    getHealth() {
        return this.health
    },
    setDefeatStatus() {
        if (this.health <= 0) {
            this.defeat = true
        }
    },
    getDefeatStatus() {
        return this.defeat;
    },
    useHealthEdit(edit) {
        this.health += Number(edit)
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth
        }
    }
}

while(!character.getDefeatStatus()) {
    character.useHealthEdit(prompt("Введите целое число\nЧисло отрицательное: наносит урон\nЧисло положительное: восстанавливает здоровье"))
    character.setDefeatStatus();
    if (character.getDefeatStatus()) {
        alert("Персонаж побежден!")
    } else {
        character.getInfo()
    }
}
