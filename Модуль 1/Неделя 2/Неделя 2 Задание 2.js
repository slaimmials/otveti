//-------------------===Задача 1===------------------\\
alert("Я своего рода виртуальный помощник");
alert("Не бойтесь, за вами ведётся наблюдение");
alert("Передайте все личные данные для обработки");
//---------------------------------------------------//



//------------------===Задача 2===--------------\\
let access;
do {
    access = confirm("Вам исполнилось 14 лет?");
    if (access) {
    	alert("Доступ разрешён");
    } else {
    	alert("Доступ запрещён");
    }
} while(access==false)
//----------------------------------------------//



//-----------------------------===Задача 3===---------------------------\\
let loginFirst = prompt("Введите логин");
let passwordFirst = prompt("Введите пароль");
let loginSecond = prompt("Введите логин");
let passwordSecond = prompt("Введите пароль");
if ((loginFirst != loginSecond) || (passwordFirst != passwordSecond)) {
	alert("Повторите ввод данных");
} else {
	alert("Данные сохранены");
}
//----------------------------------------------------------------------//



//--------------------------------------===Задача 1===-------------------------------------------------\\
let surname = prompt("Ваша фамилия:");
let name = prompt("Ваше имя:");
let middlename = prompt("Ваше отчество:");
let age = prompt("Ваш возраст:");
console.log(`Ваши данные:\nФамилия: ${surname}\nИмя: ${name}\nОтчество: ${middlename}\nВозраст:${age}`)
if (prompt("Данные верны?")) {
	alert("Данные сохранены");
} else {
	alert("Повторите ввод");
}
//-----------------------------------------------------------------------------------------------------//