function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(getRandomInt(5, 10));



function randNumbers(length) {
    var array1=[];
    let num3;
    for(let i=0;i<length;i++) {
        num3= Math.floor(Math.random()*100+1);
        array1[i]=num3;
    }
    return array1;
}
console.log(randNumbers(6));



let names = []
let answer;
let rndNumber;

function randomInt() {
    return Math.floor(Math.random()*4+0)
}

for (let i = 0; i<5; i++) {
    names[i] = prompt('Введите имя')
}

do {
    rndNumber = names[randomInt()]
    answer = prompt('Угадайте имя')
} while(otvet !== rndNumber)
alert('Вы выиграли')



const hero1 = {
    name: 'Player1',
    health: 100,
}
const hero2 = {
    name: 'Player2',
    health: 100,
}

let round = 0;

do {
    round++;
    hero1.health -= randomRange(1,10);
    hero2.health -= randomRange(1,10);
    console.log(`Раунд: ${round}\n Здоровье первого${hero1.health}\n Здоровье второго${hero2.health}`)
} while (hero1.health>0 && hero2.health>0)
if (hero1.health <= 0 && hero2.health > 0) {
    console.log('Выиграл второй')
} else if (hero2.health <= 0 && hero1.health > 0) {
    console.log('Выиграл первый')
} else {
    console.log('Ничья')
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}




const city = {
    population: 0,
    food: 0,
    energy: 0,
    changePopulation: function () {
        if (this.food >= MAth.floor(this.population * 0.65) && this.energy >= Math.floor(this.population * 0.65)) {
            this.population += randomRange(5, 10)
        } else {
            this.population -= randomRange(5, 10)
        }
    },
    createFood: function() {
        this.food += Math.floor(randomRange(this.population / 2, this.population * 1.5));
    },
    createEnergy: function() {
        this.energy += Math.floor(randomRange(this.energy / 2, this.energy * 1.5));
    },
    endTurn: function (){
        this.food -= Math.floor(this.population*0.65);
        this.energy -= Math.floor(this.energy*0.65)
    }
}