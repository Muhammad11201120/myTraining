$('.content').click(function() {
    // changing element as a object (multible vlaues)
    $(this).css({ 'color': 'red' });
});
$('.box').click(function() {
    // changing css ass a one value
    $(this).css('background-color', 'yellow');
});
$('.btn').click(function() {
    //get value of input or dropdown menue or set the value
    var name = $('input').val();
    // set or get the inner text of element
    $('.name').text(name);
    // set or get the atterbute of element
    $('img').attr('src', '../images/image4.jpeg');
    // set or get the inner html of element
    $('.head').html('<h1>I hack your header </h1>');
    // we can use pure js witen jquery
    var userName = document.getElementById('userName');
    userName.style.color = "blue";
    userName.style.backgroundColor = 'pink';
    if (name === 'muhammad') {
        console.log('welcome admin');
    } else { console.log('you are not admin'); }
});

// jquery events (click-keypress-on) there is more but this is the 99% you are going to ues

//click
$('button').click(function() {
    var text = $(this).text();
    console.log(text);
});
//keyrpress
$("input[type='text']").keypress(function(event) {
    // 13 is Enter key code
    if (event.which === 13) {
        alert($(this).val());
    }
});

//on
//on event is like addEventListener in pure js it takes
// two arguments first is event second callback func.
$('#backgroundChangerBtn').on('click', function() {
    document.body.style.backgroundColor = 'black';
});

// hover is (mouseenter)
$('img').on('mouseenter', function() {
    $(this).css('border', '2px solid black');
});
// to remove the border when the mouse leave
// and you can do it with other way (toggling class)
$('img').on('mouseleave', function() {
    $(this).css('border', 'none');
});
// jquery animation

//animate
$('.square').click(function() {
    $('img').fadeToggle();
});