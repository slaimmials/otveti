let anew = 0
let mass = []
do {
    mass[anew] = prompt("Введите текст")
    anew++
    
}while(confirm("Ввести еще текст?"))

alert(`${mass} ${mass.length}`)
