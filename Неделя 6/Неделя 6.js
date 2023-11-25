//--------------------------------------------------===Задача 1===---------------------------------------------------\\
const player = {
    name: 'empty',
    defeat: false,
};

const gameController = {
    countPoint: 0,

    setPoint: function (){
        let points;
        do {
            points = Number(prompt('Введите количество фишек, не меньше 10', ''));
        } while (points < 10)
        gameController.countPoint = points;
    },

    changePoint: function (){
        let includePoints;
        do {
            includePoints = Number(prompt('Возьмите со столо от 1 до 3 фишек', ''));
        } while ( includePoints < 1 || includePoints > 3)

        gameController.countPoint -= includePoints;
    }
}


function resetPlayer(currentPlayer) {
    currentPlayer.name = 'empty'
    currentPlayer.defeat = false
}

var player1 = structuredClone(player);
var player2 = structuredClone(player);

function endGame(currentPlayer) {
    if(gameController.countPoint <= 0){
        if(player1.name === currentPlayer.name)
        {
            alert(`${player1.name} забрал(а)  послдню фишку. Игра окончена, ${player2.name} победил(а)`);
            player1.defeat = true;
        } else {
            alert(`${player2.name} забрал(а)  послдню фишку. Игра окончена, ${player1.name} победил(а)`);
            player2.defeat = true;
        }
    }
}



function playerTurn(currentPlayer)
{
    alert(`Ходит ${currentPlayer.name} В пачке - ${gameController.countPoint} шт. фишек.`);
    gameController.changePoint();
    endGame(currentPlayer);
}


do{
    resetPlayer(player1);
    resetPlayer(player2);

    player1.name = prompt('Введите имя')
    player2.name = prompt('Введите имя')

    gameController.setPoint();

    do{
        if(player1.defeat === false) {
            playerTurn(player1)
        }

        if(player2.defeat === false) {
            playerTurn(player2)
        }

    }while(player1.defeat === false && player2.defeat === false)

} while(confirm('Играем ещё?'))
//-------------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------===Задача 2===-------------------------------------------------------\\
var takeVariant = function(curPlayer){
    var amount;
    do
        amount = Number(prompt(`Выбирает ${curPlayer.name}`,'1-Камень, 2-Ножницы, 3-Бумага'));
    while(amount<=0 || amount > 3)
    amount--;
    curPlayer.variant = variant[amount];
    alert(`${curPlayer.name} выбрал ${curPlayer.variant}`);
}

var chekVariant = function(){
    if(player1.variant == 'камень')
    {
        if(player2.variant == 'ножницы')
        {
            alert(`Выиграл ${player1.name} выбрав ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
        }
        else if(player2.variant == 'бумага')
        {
            alert(`Выиграл ${player2.name} выбрав ${player2.variant}, ${player1.name} выбрал(а) ${player1.variant}`);
            player2.points++;
        }
        else
        {
            alert(`Ничья ${player1.name} выбравл ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
            player2.points++;
        }
    }
    else if(player1.variant == 'ножницы')
    {
        if(player2.variant == 'бумага')
        {
            alert(`Выиграл ${player1.name} выбрав ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
        }
        else if(player2.variant == 'камень')
        {
            alert(`Выиграл ${player2.name} выбрав ${player2.variant}, ${player1.name} выбрал(а) ${player1.variant}`);
            player2.points++;
        }
        else
        {
            alert(`Ничья ${player1.name} выбравл ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
            player2.points++;
        }
    }
    else if(player1.variant == 'бумага')
    {
        if(player2.variant == 'камень')
        {
            alert(`Выиграл ${player1.name} выбрав ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
        }
        else if(player2.variant == 'ножницы')
        {
            alert(`Выиграл ${player2.name} выбрав ${player2.variant}, ${player1.name} выбрал(а) ${player1.variant}`);
            player2.points++;
        }
        else
        {
            alert(`Ничья ${player1.name} выбрал(а) ${player1.variant}, ${player2.name} выбрал(а) ${player2.variant}`);
            player1.points++;
            player2.points++;
        }
    }
    alert(`Cчёт ${player1.name} ${player1.points}-${player2.name} ${player2.points}`);
}
//-------------------------------------------------------------------------------------------------------------------------//