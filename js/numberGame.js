var firstPlayer = prompt('Enter  first player name: ');
var secondPlayer = prompt('Enter second player name: ');
var game = document.getElementById('game');
var playerOne = document.getElementById('playerOne');
var playerTwo = document.getElementById('playerTwo');
var playerOneScore = document.querySelector('#playerOne span');
var playerTwoScore = document.querySelector('#playerTwo span');
var gameEnd = document.querySelector('#gameEnd span');
var gameEndRange = document.getElementById('gameEndRange');
var playerOneBtn = document.querySelector('#player1');
var playerTwoBtn = document.querySelector('#player2');
var gameOver = document.getElementById('endMessage');



gameEndRange.addEventListener('change', function() {
    gameEnd.textContent = gameEndRange.value;
});
playerOneBtn.addEventListener('click', function() {
    //alert(Number(playerOneScore.textContent) + Number(playerTwoScore.textContent));
    Number(playerOneScore.textContent++);
    if (Number(playerOneScore.textContent) === Number(gameEndRange.value)) {
        playerOneScore.style.color = 'green';
        playerOneScore.innerHTML += '<p>' + firstPlayer + ' Win :)</p>';
        playerTwoScore.style.color = 'red';
        playerTwoScore.innerHTML += '<p>' + secondPlayer + ' Loose :(</p>';
    }
});
playerTwoBtn.addEventListener('click', function() {
    Number(playerTwoScore.textContent++);
    if (Number(playerTwoScore.textContent) === Number(gameEndRange.value)) {
        playerTwoScore.style.color = 'green';
        playerTwoScore.innerHTML += '<p>' + firstPlayer + ' Loose :)</p>';
        playerOneScore.style.color = 'red';
        playerOneScore.innerHTML += '<p>' + secondPlayer + ' Win :(</p>';
    }
});