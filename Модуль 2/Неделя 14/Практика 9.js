//------------Задача 1--------------
function Sportsmen(name, age, weight) {
    this.Name = name
    this.Age = age
    this.Weight = weight
}

Sportsmen.prototype.info = function() {
    alert(`Информация о спортсмене ${this.Name}:\nВозраст: ${this.Age}\nВес: ${this.Weight}`)
}

let smen1 = new Sportsmen('Игорь',24,85)
let smen2 = new Sportsmen('Иван',28,79)
let smen3 = new Sportsmen('Николай',22,82)
smen1.info();
smen2.info();
smen3.info();
//----------------------------------



//------------Задача 2--------------
const checkTime = () => {
    let time = new Date()
    let timeInfo = [];
    timeInfo[0] = time.getMinutes()
    timeInfo[1] = time.getSeconds()
    timeInfo[2] = time.getMilliseconds()
    return timeInfo
}

const randomRange = function (mi, ma) {
    let num = Math.floor(Math.random() * (max - min + 1) + min)
    return num
}

const calculateTime = (start, end) => {
    let time = [0, 0, 0]
    for (let i = 2; i >= 0; i--) {
        time[i] += (end[i] = start[i]);
        console.log(time[i])
        if (time[i] < 0) {
            time[i - 1]--;
            if (i == 2)
                time[i] += 1000
            else
                time[i] += 60
        }
    }
    return time;
}
//----------------------------------



//------------Задача 3--------------
const reactionTime = function () {
    let startTime = checkTime();
    confirm("Реакция??!?!?!")
    let endTime = checkTime();
    let reaction = calculateTime(startTime, endTime);
    alert(`Начало теста: ${startTime[0]}мс ${startTime[1]}с ${startTime[2]}м\nКонец тест: ${endTime[0]}мс ${endTime[1]}с ${endTime[2]}м\nВаша реакция: ${reaction[0]}мс ${reaction[1]}с ${reaction[2]}м`)
}
let delay = randomRange(2,10)
setTimeout(function () { reactionTime() }, delay);
//----------------------------------



//------------Задача 4--------------
function message(){
    console.log(this.messageText);
}

let m1 = message.bind({messageText:"Всем привет!"});
setTimeout(function(){m1()},1000)

let m2 = message.bind({messageText:"Я - отличный программист!"});
setTimeout(function(){m2()},1000)

let m3 = message.bind({messageText:"Привязал контекст к функции!"});
setTimeout(function(){m3()},1000)
//----------------------------------



//------------Задача 5--------------
classList = ['Sniper', 'Medic', 'Engineer']
function Player() {
    this.name = '';
    this.charClass = '';
    this.level = 1
    this.init = function() {
        this.name = prompt('Введите имя персонажа');
        this.level = 1;
        while(true) {
            classNum = prompt('Выберите класс персонажа:', '1-Sniper, 2-Medic, 3-Engineer')
            try {
                this.charClass = this.classChoice(classNum);
                break;
            } catch {
                alert("Неверный класс! Выберите число от 1 до 3")
            }
        }
    }
}
let plr = new Player();
plr.init();
//----------------------------------
