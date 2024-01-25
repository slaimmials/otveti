//------------Задача 1--------------
mainArray = ["В", "Г", "А", "Б", "Ё", "Ж", "Д", "Е"];
sortQueue = [2, 3, 0, 1, 6, 7, 4, 5];
function sort(origArray, sortIndex) {
    result = []
    for (var i = 0; i < origArray.length; i++) {
        result[i] = origArray[sortIndex[i]]
    }
    return result;
}
console.log(mainArray);
console.log(sortQueue);
mainArray = sort(mainArray, sortQueue);
console.log(mainArray); 
//----------------------------------



//------------Задача 2--------------
function findFriends(friends) {
    let myFriends=[]
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            myFriends.push(friends[i])
        }
    }
    return myFriends;
}

let names = [];
do {
    names.push(prompt('Введите имя'));
} while (confirm('Продолжить ввод'));
alert(`Список имён: ${names}`);
alert(`Список друзей: ${findFriends(names)}`);
//----------------------------------



//------------Задача 3--------------
function getSmileEmotion(emoji) { 
    if (emoji.length == 2) {
        let face = emoji[1]
        if (face=="D" || face==")") {
            return "Весёлый"
        } else { return "Отличный от весёлого" }
    } else {
        let face = emoji[2]
        if (face==")" || face==")") {
            return "Весёлый"
        } else { return "Отличный от весёлого" }
    }
}
let smile = prompt("Введите смайл");
alert(`Смайл ${smile} ${getSmileEmotion(smile)}`)
//----------------------------------



//------------Задача 4--------------
const segments = ['   *','  **','*   ','*  *','****'];

const string1 = [4,0,4,4,3,4,4,4,4,4];
const string2 = [3,1,0,0,3,2,2,0,3,3];
const string3 = [3,0,4,1,4,4,4,0,4,4];
const string4 = [3,0,2,0,0,0,3,0,3,0];
const string5 = [4,0,4,4,0,4,4,0,4,4];

function convertor(number)
{
    var stringA = "";
    var stringB = "";
    var stringC = "";
    var stringD = "";
    var stringE = "";

    for(var i = 0; i < number.length; i++)
    {
        stringA += segments[string1[number[i]]] + "  ";
        stringB += segments[string2[number[i]]] + "  ";
        stringC += segments[string3[number[i]]] + "  ";
        stringD += segments[string4[number[i]]] + "  ";
        stringE += segments[string5[number[i]]] + "  ";
    }
    console.log(`
    ${stringA}
    ${stringB}
    ${stringC}
    ${stringD}
    ${stringE}
    `)
}

do
    convertor(prompt('Введите число')) 
while(confirm("Повторить?"));
//----------------------------------



//------------Задача 5--------------
numbers = [1, 9, 0, 3, 7, 6, 5, 2, 4, 8];
function sort(inputArray) 
{   
    var sortedList = inputArray;
    for(var i=0; i < sortedList.length; i++) 
    {
        for(var j=0; j < sortedList.length; j++) 
        {    
            if (sortedList[i] % 2 == 1 && sortedList[j] % 2 == 1 && sortedList[i] < sortedList[j])
            {   
               let temp = sortedList[i]
               sortedList[i] = sortedList[j]
               sortedList[j] = temp
            }
        }
    }
    return sortedList;
}
console.log(numbers);
console.log(sort(numbers));
//----------------------------------