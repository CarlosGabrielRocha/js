//Selecionando elementos e inicializando valores

let player1Time = true
let player2Time = false
let player1Name = ""
let player2Name = ""
let turn = 0
let winner = 0
let player1VictoryTest = {}
let player1Squares = {}
let player2VictoryTest = {}
let player2Squares = {}
let played = []


document.getElementById('start').addEventListener('click', start)

document.getElementById('play-again').addEventListener('click', restart)

const squares = document.querySelectorAll('.square')

const player1Area = document.querySelector('#player1-area')
const player2Area = document.querySelector('#player2-area')

const player1AreaSpan = document.querySelector('#player1-area > span')
const player2AreaSpan = document.querySelector('#player2-area > span')

const gameStatus = document.getElementById('game-status')

// funções para começar e reniciar jogo

function start() {
    removeBackground()
    restart()
    player1Area.style.backgroundColor = '#e64d1e'
    player1Name = prompt('Jogador 1:')
    player2Name = prompt('Jogador 2:')
    player1AreaSpan.innerText = player1Name
    player2AreaSpan.innerText = player2Name
    gameStatus.innerText = `Vez de ${player1Name}!`
}

function restart() {
    turn = 0

    player1VictoryTest = {
        'row0': 0,
        'row1': 0, 
        'row2': 0,
        'column0': 0,
        'column1': 0,
        'column2': 0,
        win: function() {
            return Object.values(this).includes(3)
        }
    }

    player1Squares = {
        'row0': [],
        'row1': [], 
        'row2': [],
        'column0': [],
        'column1': [],
        'column2': []
    }
    
    player2VictoryTest = {
        'row0': 0,
        'row1': 0, 
        'row2': 0,
        'column0': 0,
        'column1': 0,
        'column2': 0,
        win: function() {
            return Object.values(this).includes(3)
        }
    }

    player2Squares = {
        'row0': [],
        'row1': [], 
        'row2': [],
        'column0': [],
        'column1': [],
        'column2': []
    }

    played = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    
    squares.forEach(function (square) {
        square.classList.remove('square-x')
        square.classList.remove('square-o')
    })

    squares.forEach(function (square) {
        square.style.background = 'none'
        square.addEventListener('click', turns)
    })

    if (winner == 1) {
        removeBackground()
        player1Area.style.backgroundColor = '#e64d1e'
        player1Time = true
        player2Time = false
        gameStatus.innerText = `Vez de ${player1Name}!`
    } else if (winner == 2) {
        removeBackground()
        player2Area.style.backgroundColor = '#e64d1e'
        player1Time = false
        player2Time = true
        gameStatus.innerText = `Vez de ${player2Name}!`    
    } else if (winner == 3) {
        removeBackground()

        if(player1Time == true) {
            player1Area.style.backgroundColor = '#e64d1e'
            gameStatus.innerText = `Vez de ${player1Name}!`    
        } else {
            player2Area.style.backgroundColor = '#e64d1e'
            gameStatus.innerText = `Vez de ${player2Name}!`    
        }

    }

    winner = 0
}

// Teste de vitória

function victoryTest() {
    turn++
    
    if (player1VictoryTest.win() == true) {
        removeBackground()
        victory(player1Squares, player1Area)
        finishGame()
        winner = 1
        gameStatus.innerText = `${player1Name} venceu!`
    } else if (player2VictoryTest.win() == true) {
        removeBackground()
        victory(player2Squares, player2Area)
        finishGame()
        winner = 2
        gameStatus.innerText = `${player2Name} venceu!`
    } else if (turn === 9) {
        finishGame()
        winner = 3
        player1Area.style.backgroundColor = 'red'
        player2Area.style.backgroundColor = 'red'
        gameStatus.innerText = `Deu Velha!`
    }

    diagonalVictoryTest(1, player1Area)
    diagonalVictoryTest(2, player2Area)
}

// Turnos das jogadas

function turns(event) {
    const selectedSquare = event.currentTarget
    const row = selectedSquare.dataset.row
    const column = selectedSquare.dataset.column

    if (player1Time == true) {
        gameStatus.innerText = `Vez de ${player2Name}!`
        selectedSquare.classList.add('square-x')

        player1Time = false
        player2Time = true

        player2Area.style.backgroundColor = '#e64d1e'
        player1Area.style.background = 'none'

        played[row][column] = 1

        player1VictoryTest[`row${row}`]++
        player1Squares[`row${row}`].push(selectedSquare)
        player1VictoryTest[`column${column}`]++
        player1Squares[`column${column}`].push(selectedSquare)

    } else if (player2Time == true) {
        gameStatus.innerText = `Vez de ${player1Name}!`
        selectedSquare.classList.add('square-o')

        player2Time = false
        player1Time = true

        player1Area.style.backgroundColor = '#e64d1e'
        player2Area.style.background = 'none'

        played[row][column] = 2

        player2VictoryTest[`row${row}`]++
        player2Squares[`row${row}`].push(selectedSquare)
        player2VictoryTest[`column${column}`]++
        player2Squares[`column${column}`].push(selectedSquare)
    }
    selectedSquare.removeEventListener('click', turns)
    victoryTest()
}

// Outras funções

function removeBackground() {
    player1Area.style.background = 'none'
    player2Area.style.background = 'none'
}

function victory(playerSquares, playerArea) {
   playerArea.style.backgroundColor = 'yellow'
   const test = Object.values(playerSquares)

   test.forEach(function (element) {
        if(element.length >= 3) {
            element.forEach(function(square) {
                square.style.backgroundColor = 'red'
            })
        }
   })
}

function diagonalVictoryTest(n, playerArea) {
    const square00 = document.querySelector('[data-row="0"][data-column="0"]')
    const square11 = document.querySelector('[data-row="1"][data-column="1"]')
    const square22 = document.querySelector('[data-row="2"][data-column="2"]')

    const square02 = document.querySelector('[data-row="0"][data-column="2"]')
    const square20 = document.querySelector('[data-row="2"][data-column="0"]')

    if (played[0][0] == n && played[1][1] == n && played[2][2] == n) {
        square00.style.backgroundColor = 'red'
        square11.style.backgroundColor = 'red'   
        square22.style.backgroundColor = 'red'
        removeBackground()        
        victory({},playerArea)
        finishGame()
        winner = n
        if(n==1) {
            gameStatus.innerText = `${player1Name} venceu!`
        } else {
            gameStatus.innerText = `${player2Name} venceu!`
        }
        
    }  else if (played[0][2] == n && played[1][1] == n && played[2][0] == n) {
        square02.style.backgroundColor = 'red'
        square11.style.backgroundColor = 'red'   
        square20.style.backgroundColor = 'red'  
        removeBackground()
        victory({},playerArea)
        finishGame()
        winner = n
        if(n==1) {
            gameStatus.innerText = `${player1Name} venceu!`
        } else {
            gameStatus.innerText = `${player2Name} venceu!`
        }
    }
}

function finishGame() {
    document.querySelectorAll('.square').forEach(function (square) {
        square.removeEventListener('click', turns)
    })
}


