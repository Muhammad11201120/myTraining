var body = document.querySelector('body');
var btn = document.querySelector('button');
var h3 = document.querySelector('h3');
var img = document.querySelector('img');
var isBlue = false;
btn.addEventListener('click', function() {
    if (isBlue) {
        h3.textContent = 'hahaha I\'m changing now I\m white color :)';
        document.body.style.background = 'white';
        h3.style.color = 'purple';
        h3.classList.toggle("bg-img");

    } else {
        h3.textContent = 'I\m nice text I\'v purple color :)';
        h3.style.color = 'white';
        document.body.style.background = 'purple';
        h3.classList.toggle("bg-img2");
    }
    isBlue = !isBlue;
});