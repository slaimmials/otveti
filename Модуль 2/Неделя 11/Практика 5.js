//---------------Задачи-----------------
function createRunner(name) {
    this.name = name;
    this.progress = 0;
    this.path = '';
    this.place = 0;
    this.move = function () {
        if (this.progress < 100) {
            let steps = randomizer(20, 10);
            for (let i = 1; i <= steps; i++) {
                this.progress += 1;
                if (this.progress === 100) {
                    this.path = `Finished. Place=${this.place}`;
                    break;
                } else if (i === steps) {
                    this.path += this.name;
                } else {
                    this.path += '.';
                }
            }
            this.checkFinishing();
        }
    };
    
    this.checkFinishing = function () {
        if (this.progress >= 100 && this.place === 0) {
            this.place = place;
            this.path += `${this.place}`;
            addToWinners(this.name);
            place += 1;
        }
    };
}

let place = 1;
let runners = [];
let winners = [];
let randomizer = (a, b) => Math.round(Math.random() * (a - b) + b);
let addToWinners = (runner) => winners[place - 1] = runner;
for (let i = 0; i < 10; i++) {
    runners[i] = new createRunner(`Runner ${i + 1}`);
}

function turn() {
    for (let i = 0; i < 10; i++) {
        runners[i].move();
        console.log(runners[i].path);
    }
    console.clear();
    if (winners.length === 10) {
        showPlaces();
    }
};

let showPlaces = () => {
    clearTimeout(marathon);
    console.log(winners);
}
const marathon = setInterval(turn, 1000);
//----------------------------------------