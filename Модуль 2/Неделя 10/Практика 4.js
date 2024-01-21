//---------------Задача 1-----------------
function footbalPlayer(name,age) {
    this.name = name,
    this.age = age
}
let plr1 = new footbalPlayer("Пригожин женя",26)

const createFootballer = (name, age) => {
    return {name: name, age: age}
}

const footballerInfo = (footballer, list) => {
    console.log(`Имя: ${footballer.name}\nВозраст: ${footballer.age}`)
}

const addFootballer = (footballer) => {
    list[list.length] = footballer
}

const footballerList=[]
const footballer = createFootballer("Рональду", 15)

footballerInfo(footballer)
addFootballer(footballer, footballerList)

console.log(footballerList)
//----------------------------------------



//---------------Задача 2-----------------
let randInt = (cof) => {
    return Math.floor(Math.random() * cof)
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mixNumbers = (list) => {
    let randomNum1 = randInt(9)
    list[list.length] = list[randomNum1]
    list.splice(randomNum1, 1)
}

for (let i = 0; i < 10; i++) {
    mixNumbers(list)
}

console.log(list)
//----------------------------------------



//--------------Задача 3-6----------------
let Trains = []
let trainInfo = (train) => {
    alert(`\nИнформация о поезде под номером ${train[0]}\nВремя отправления: ${train[1]} часов, ${train[2]} минут.\nВремя в пути: ${train[3]} часов, ${train[4]} минут\n`)
}
for (let i = 0; i < randInt(10, 3); i++) {
    let train = [
        randInt(29,1),
        randInt(24,0),
        randInt(60,0),
        randInt(40,2),
        randInt(60,0)
    ]
    infoTrain(train)
    Trains[Trains.length] = train
}

const endInfo = (train) => {
    console.log(`Рейс ${train[0]} прибывает в ${train[1]}-${train[2]}.\n ${train[3] > 0 ? "Дней в пути: " + train[3] : ""}`)
}

const calcPath = (start) => {
    let hrs = start[1]+start[3]
    let min = start[2]+start[4]
    let days = 0
    while (min >= 60) {
        min -= 60
        hrs += 1
    }

    while(hours >= 24) {
        hrs -= 24
        days += 1
    }

    return [start[0], hrs, min, days]
}

end = [];

for (let i = 0; i < 10; i++) {
    end[i] = calcPath(start[i])
    endInfo(end[i])
}
//----------------------------------------