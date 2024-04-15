const btns = document.querySelectorAll('button:not(.start, #re)')
let btn1 = document.querySelector('.i1')
let btn2 = document.querySelector('.i2')
let btn3 = document.querySelector('.i3')
let btn4 = document.querySelector('.i4')
let btn5 = document.querySelector('.i5')
let btn6 = document.querySelector('.i6')
let btn7 = document.querySelector('.i7')
let btn8 = document.querySelector('.i8')
let btn9 = document.querySelector('.i9')
const startBtn = document.querySelector('.start')
const display = document.querySelector('.display')
const reBtn = document.getElementById('re')
let arr = ['', '', '', '', '', '', '', '', '']
let gameBoard = (function(){
  
  let btnHandle = (index, move) => {
    if(arr[index] == ''){
      arr[index] = move
    }
    console.log(move)
    console.log(arr)
  }
  return{
    btnHandle,
  }
})()
// function createUser(name){
//   let score = 0
//   return function(){
//     score++
//     display.textContent = `${name} has ${score} score!`
//     if(score == 5){
//       newGame()
//       display.textContent = `${name} won!`
//     }
//     return score
//   }
// }
class Player {
  constructor(_name) {
    this.name = _name 
    this.score = 0
  }

  checkScore() {
    if(this.score == 5){
      display.textContent = `${this.name} won!`
      gameOver()
    game = false
    }
  }

  winTurn(){
    this.score++ 
    display.textContent = `${this.name} has ${this.score} score!`
    this.checkScore()
    gameOver()
  }

  showInfo() {
    return this.name
  }
}
let player1;
let  player2;
let game = false

let currentPlayer;
function switchUser(button){
  if(button.textContent == ''){
  button.textContent = currentPlayer
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
  console.log('Current is: ' + currentPlayer)
  display.textContent = `${currentPlayer}'s turn`
  return currentPlayer
  }
}
function newGame(){
  let name1 = prompt('Give player1 name')
  let name2 = prompt('Give player2 name')
  player1 = new Player(name1)
  player2 = new Player(name2)
}
function gameOver(){
  arr = ['', '', '', '', '', '', '', '', '']
  btns.forEach((button) => {
    button.textContent = ''
  })
  currentPlayer = 'X'

}
const timeOutGameOver = setTimeout(gameOver(), 4000)
function checkWinner(){
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let cond of conditions){
    const [a, b, c] = cond;
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
      if(arr[a] == 'X'){
        player1.winTurn()
      } else if(arr[a] == 'O'){
        player2.winTurn()
      }
      
      return arr[a]
    }
  }
  if (!arr.includes('')) {
    console.log('draw')
    display.textContent = 'Draw'
    gameOver()
        return 'Draw';
    }
}
reBtn.addEventListener('click', () =>{
  gameOver()
  newGame()
  display.textContent = '.'
})
startBtn.addEventListener('click', () =>{
  game = true
  currentPlayer = 'X'
  newGame()
  display.textContent = `${player1.showInfo()} is playing first`
})
btn1.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(0, currentPlayer)
    switchUser(btn1)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
})
btn2.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(1, currentPlayer)
  switchUser(btn2)
  checkWinner()
  } else{
    alert('You didnt start the game!')
  }
  
})
btn3.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(2, currentPlayer)
    switchUser(btn3)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
 
})
btn4.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(3, currentPlayer)
    switchUser(btn4)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }

})
btn5.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(4, currentPlayer)
    switchUser(btn5)
   checkWinner()
  } else{
    alert('You didnt start the game!')
  }
  
})
btn6.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(5, currentPlayer)
    switchUser(btn6)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
  
})
btn7.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(6, currentPlayer)
    switchUser(btn7)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
  
})
btn8.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(7, currentPlayer)
    switchUser(btn8)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
})
btn9.addEventListener('click', () =>{
  if(game){
    gameBoard.btnHandle(8, currentPlayer)
    switchUser(btn9)
    checkWinner()
  } else{
    alert('You didnt start the game!')
  }
})
