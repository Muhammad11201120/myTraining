// asking for a number
var correct = 7;
var guess = Number(prompt('Enter you Guess Number !!')); // to convert to a number
// checking
if (guess) {
    if (guess < 5) {
        console.log('Too Lowwww !!');
    } else if (guess > 9) {
        console.log('Too Hiiigh !!');
    } else if (guess === correct) {
        console.log('Congratolation You Guess It Correctly :)');
    } else {
        console.log('neaar to reach the correct number ');
    }
}
// give result