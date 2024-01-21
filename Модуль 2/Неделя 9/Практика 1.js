function Home(number, level, enter, apartment) {
    this.name = Number(number);
    this.levels = Number(level);
    this.enters = Number(enter);
    this.apartments = Number(apartment);

    this.info = function () {
        console.log(`
            Номер дома: ${this.name}
            Количество этажей: ${this.levels}
            Количество подъездов: ${this.enters}
            Количество квартир на этаже: ${this.apartments}
            Количество квартир: ${this.levels * this.enters * this.apartments}
        `);
    };
}




function Shop(name, worker) {
    this.name = name;
    this.workers = Number(worker);

    this.info = function () {
        alert(`Название магазина: ${this.name}\nКоличество рабочих: ${this.workers}`);
    };
}





function School(name, students) {
    this.name = String(name)
    this.students = Number(students)

    this.info = function () { alert(`Название школы: ${this.name}\nКоличество обучающихся:${this.students}`) }
}





Home.prototype.peopleInfo = function() {
    alert(`Количество жильцов дома равно: ${this.levels * this.enters * this.apartments * 4}`);
    return this.levels * this.enters * this.apartments * 4;
};

Shop.prototype.timeInfo = function() {
    let group = Math.round(this.workers / 20);
    if (group < 2) {
        alert(`${groups} смен`)
    } else {
        alert(`2 смены`)
    }
};

School.prototype.classInfo = function() {
    let classes = Math.round(this.students / 25);
    console.log(`В школе ${classes} классов`)
};





let randomRange = function(mi,ma) { 
    return Math.floor(Math.random()*(ma-mi+1)+mi);
}

var homes = [];
var totalPeoples = 0;
var homeNumber = randomRange(3,10);

for(var i = 0; i < homeNumber; i++)
{
homes[i] = new Home(i+1, randomRange(1,10),randomRange(2,5), randomRange(3,5));
homes[i].info();
totalPeoples += homes[i].peapleInfo();
}

let schoolNum = Math.round(totalPeoples/250);
let school = [];
let students = Math.round(totalPeoples/2);

for(let i = 0; i < schoolNum; i++)
{
    
    totalPeoples += school[i].peapleInfo();
    if(students >= 250) { 
        school[i] = new School(`Школа N${i}`, 250)
    } else {
        school[i] = new School(`Школа N${i}`, students)
    }
    school[i].info();
    school[i].classInfo();
}