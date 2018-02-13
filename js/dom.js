var body = document.querySelector('body');
var isBlue = false;
setInterval(function() {
    if (isBlue) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
}, 1000);