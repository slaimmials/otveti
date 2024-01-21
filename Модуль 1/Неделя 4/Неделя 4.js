//------------------------------------===Задача 1===------------------------------------------------\\
function getSquare(w,h) {
    return w*h;
}

do {
    alert("Площадь:", getSquare(Number(prompt("Введите ширину")), Number(prompt("Введите высоту"))))
}while(confirm("Хотите перевести ещё?"))
//--------------------------------------------------------------------------------------------------//



//-------------------===Задача 2===---------------------\\
function transfer(age) {
    if(confirm("Перевести в месяцы?")) {
        age *= 12
        if(confirm("Перевести в дни?")) {
            age *= 30
            if(confirm("Перевести в часы?")) {
                age *= 24
                if(confirm("Перевести в минуты?")) {
                    age *= 60
                }
            }
        }
    }
    return age;
}

alert(  transfer(Number(prompt("Введите возраст:")))  )
//------------------------------------------------------//



//------------===Задача 3===------------\\
function sxet(num)
{
  let sum = 0
  for(let i = 0; i < num.length; i++)
  {
    sum += Number(num[i])
  }
  alert(sum)
}    
    
sxet(prompt('Ваше число'))
//--------------------------------------//


//------------------------===Задача 4===------------------------\\
chet(prompt("Введите число"))

function chet(num) {
    alert(sum1())
    alert(sum2())

    function sum1() {
        return(Number(num[0]) + Number(num[num.length - 1]))
    }

    function sum2() {
        let sum = 0
        for (let i=1; i<Number.length-1; i++) {
            sum += Number(num[i])
        }
        return(sum)
    }
}
//-------------------------------------------------------------//



//-------------------------------===Задача 5===---------------------------------\\
do
{
    var figure = prompt('Выберите тип фигуры', 'Квадрат, круг, прямоугольник');
    if(figure == 'квадрат')
    {
        Cube();
    }
    else if(figure == 'круг')
    {
        Circle();
    }
    else if(figure == 'прямоугольник')
    {
        Rectangle();
    }
    else
    {
        alert('Неправильный ввод команды');
    }

}while(confirm('Повторить?'))


function Circle()
{
    var radius = prompt('Введите радиус круга');
    alert(`Площадь круга равна ${3.14 * (radius * radius)}`);
}

function Cube()
{
    var side = prompt('Введите сторону квадрата');
    alert(`Площадь квадрата равна ${side * side}`);
}

function Rectangle()
{
    var width = prompt('Введите ширину прямоугольника');
    var height = prompt('Введите высоту прямоугольника');
    alert(`Площадь круга равна ${width * height}`);
}
//-----------------------------------------------------------------------------//



//-----------------------===Задача 6===-----------------------\\
SizeChek(FigureChek(),FigureChek());

function SizeChek(size1,size2) {
    if(size1>size2) { 
        alert(`Первая фигура больше чем вторая`); 
    }  else if(size1<size2) { 
        alert(`Вторая фигура больше чем первая`); 
    } else { 
        alert(`Фигуры равны`);  
    } 
} 

function FigureChek() {
    while(true) { 
        var figure = prompt('Выберите тип фигуры', 'Квадрат, круг, прямоугольник'); 
        if(figure == 'квадрат') { 
            return Cube(); 
        } else if(figure == 'круг') { 
            return Circle(); 
        } else if(figure == 'прямоугольник') { 
            return Rectangle(); 
        } 
        alert('Неправильный ввод команды'); 
    } 
} 

function Circle() { 
    var radius = prompt('Введите радиус круга'); 
    var S = 3.14 * (radius * radius); 
    alert(`Площадь круга равна ${S}`); 
    return S; 
} 

function Cube() { 
    var side = prompt('Введите сторону квадрата'); 
    var S = side * side; 
    alert(`Площадь квадрата равна ${S}`);
    return S; 
} 

function Rectangle() { 
    var width = prompt('Введите ширину прямоугольника'); 
    var height = prompt('Введите высоту прямоугольника'); 
    var S = width * height;
    alert(`Площадь прямоугольника равна ${S}`); 
    return S;
}
//------------------------------------------------------------//