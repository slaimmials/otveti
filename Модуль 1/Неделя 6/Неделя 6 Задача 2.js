////////Задача 1
const numbers = [1, 6, 8 , 17 , 5, 3];
let  index= 0;
do
{
    numbers[index] = Number(prompt(`Введите число`));
    index++;
}while(confirm(`Продолжить ввод`))

alert(`Не сортированный список: ${numbers}`);

for(let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(`i = ${i}, j = ${j}, numbers[i] =${numbers[i]} numbers[j] =${numbers[j]} array = ${numbers}`)
        if (numbers[i] > numbers[j]) {
            const tempNum = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tempNum;
            console.log(`SWAP   i = ${i}, j = ${j}, ${numbers}`)
        }
    }
}

alert(`Сортированный список: ${numbers}`);



////////Задача 2
const numbers = [];
let index=0;
let summ = 0;

do
{
    numbers[index] = Number(prompt(`Введите число`));
    index++;
}while(confirm(`Продолжить ввод`))

for(let i = 0; i < numbers.length; i++)
{
    summ += numbers[i];
}

const num = summ / numbers.length;

alert(`Среднее значение: ${num}`);

let resultNum = numbers[0];

alert(`Список чисел: ${numbers}`);

for(let i = 1; i < numbers.length; i++)
{
    if(Math.abs(resultNum-num)>Math.abs(numbers[i]-num))
    {
        resultNum = numbers[i];
    }
}
alert(`Искомо число: ${resultNum}`);



////////Задача 3
const names1 = [];
const names2 = [];
const resultNames = [];

let index=0;
alert(`Необходимо заполнить  список 1`);
do
{
    names1[index] = prompt(`Имя`);
    index++;
}while(confirm(`Продолжить ввод`))

let index=0;
alert(`Необходимо заполнить  список 2`);
do
{
    names2[index] = prompt(`Имя`);
    index++;
}while(confirm(`Продолжить ввод`))

alert(`
Список 1 - ${names1}
Список 2 - ${names2}
`);

let index=0;

// [a,b,c]

// [c,d,e]

for(let i = 0; i < names1.length; i++) {
    for (let j = 0; j < names2.length; j++) {
        if (names1[i] === names2[j]) {
            resultNames[index] = names1[i];
            index++;
        }
    }
}

alert(`Список повторяющихся имён - ${resultNames}`);



////////Задача 4
let questions = [ 
   "зимой выпадает снег", 
   "принтер сканирует фотографии", 
   "в основном для разведения костра используют дерево", 
   "50кг пуха весит больше 50кг стали",  
   "кровать нужна для марафонов по бегу", 
];
let answers = [ true, false, true, false, false ]; 

let points = 0; 

for (let i = 0; i < questions.length; i++) { 
   if(answers[i] == confirm(`Правда ли то что ${questions[i]}?`)) { 
      alert(`Верно!`); 
      points++;  
   } else { 
      alert(`Ошибся!`); 
   } 
}
alert(`Вы ответили верно на ${points} вопросов`);



////////Задача 5 
let shop = { 
   'name' : '', 
   'profit' : 0,
   'workers' : 0, 
   'startWork' : 0, 
   'endWork' : 0 
}

function randomRange(min, max) { 
   let number = Math.floor(Math.random()*(max-min+1)+min); 
   return number; 
} 

let shop1 = structuredClone(shop); 
let shop2 = structuredClone(shop); 
let shop3 = structuredClone(shop); 
let shop4 = structuredClone(shop); 
let shops = [shop1,shop2,shop3,shop4]; 

function setParametrs(shop) { 
   shop.name = prompt('Введите название магазина'); 
   shop.profit = randomRange(10000,50000); 
   shop.workers = randomRange(10,50); 
   shop.startWork = randomRange(6,10); 
   shop.endWork = randomRange(20,23); 
   alert(`${shop.name} \nКоличество сотрудников: ${shop.workers}\nРабочее время: ${shop.startWork}-${shop.endWork} \nПрибыль: ${shop.profit}`); 
} 

for(let i = 0; i < shops.length; i++) { 
   setParametrs(shops[i]);
} 

function findBestProfit() { 
   let shopNum = 0; 
   for(let i = 1; i < shops.length; i++) { 
      if(shops[i].profit > shops[shopNum].profit) { 
         shopNum = i; 
      } 
   } 
   alert(`Магазин с наивысшей прибылью ${shops[shopNum].name} - ${shops[shopNum].profit}`); 
}

findBestProfit();