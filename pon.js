let character = {
    nickname: "slaimmials",
    health: 84,
    maxHealth: 100,
    defeat: false,

    getInfo() {
        alert(`Nickname: ${this.nickname}\nЗдоровье: ${this.health}`)
    },
    setDefeatStatus() {
        if (this.health <= 0) {
            this.defeat = true
        }
    },
    useHealthBooster(boost) {
        this.health += boost
    }
}
character.getInfo()
