var name = prompt('What Is Your First Number?');
var age = prompt('What Is Your Second Number?');
var result = document.getElementById('result');
var yourResult = document.getElementById('r');

result.onclick = Result;

function Result() {
    yourResult.innerHTML += '<p>' + Number(name) + Number(age) + '<p>';
}