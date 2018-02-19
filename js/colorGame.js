// vars
var sound = new Audio();
sound.src = '../sounds/lose.mp3';
var sound2 = new Audio();
sound2.src = '../sounds/win.wav';
var container = document.querySelector('.container');
var h1 = document.querySelector('h1');
var box = document.querySelectorAll('.box');
var hard = document.querySelectorAll('.hard');
var pickedColor;
var displayColor = document.querySelector('#colorDisplay');
var userChosenColor = document.querySelector('#clickedColorDisplay');
var msg = document.getElementById('message');
var newGame = document.getElementById('newGameBtn');
var easyMode = document.getElementById('easyBtn');
var hardMode = document.getElementById('hardBtn');
pickedColor = colorsArray(6);
// when clicking the new game or changing colors btn
newGame.addEventListener('click', function() {
    if (newGame.textContent == 'new game') {
        newGame.textContent = 'new colors';
    }
    pickedColor = colorsArray(6);
    reset();
});
if (hardMode.hasAttribute('selected')) {
    for (var i = 0; i < box.length; i++) {
        reset();
    }
}
// to restart the game or changing colors
function reset() {
    for (var i = 0; i < box.length; i++) {
        // put the content of display color span to random color from pickedColor array
        displayColor.textContent = pickedColor[Math.floor(Math.random() * 6)];
        // filling all boxes with colors from array colors
        box[i].style.backgroundColor = pickedColor[i];
        //when clicking on one of the boxes
        box[i].addEventListener('click', clicking);
        // reinit the button background color
        hardMode.style.backgroundColor = '#232323';
        // give the h1 origin background color
        h1.style.backgroundColor = 'steelblue';
        // reinint the message span
        msg.textContent = '';
        // reinit the message background color
        msg.style.color = '#232323';
    }
}

function clicking() {
    userChosenColor.textContent = this.style.backgroundColor;
    var clickedColor = this.style.backgroundColor;
    if (this.style.backgroundColor === displayColor.textContent) {
        // filling message span
        msg.textContent = 'Correct!! You Guess It';
        //changing the header background color
        h1.style.backgroundColor = displayColor.textContent;
        // changeing level button color
        hardMode.style.backgroundColor = displayColor.textContent;
        // changing the congratolaition message color
        msg.style.color = displayColor.textContent;
        // changing new Colors button text to new Game
        newGame.textContent = 'new game';
        // get back all boxes with correct color
        for (var i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = displayColor.textContent;
        }
        correctSound();
    } else {
        this.style.backgroundColor = '#232323';
        msg.textContent = 'Try Again :)';
        wrongSound();
    }

}
// function to create RGB colors Array
function creatingColors() {
    var color = [];
    for (var i = 0; i < 3; i++) {
        var rgb = Math.floor(Math.random() * 256);
        color.push(rgb);
    }
    return 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
}
// function to create Array of colors to given Number
function colorsArray(items) {
    var colors = [];
    for (var i = 0; i < items; i++) {
        colors[i] = creatingColors();
    }
    return colors;
}
// sound for each box
function correctSound() {
    for (var i = 0; i < box.length; i++) {
        this.addEventListener('click', playSound(sound2));
    }
}
// the wrong choice cound
function wrongSound() {
    for (var i = 0; i < box.length; i++) {
        this.addEventListener('click', playSound(sound));
    }
}
// playing sound
function playSound(soundName) {
    soundName.play();
}