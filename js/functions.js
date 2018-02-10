// checking for even or odd number
function isEven(num) {
    if (num % 2 === 0) {
        return "number " + num + " is EVEN number!!";
    } else {
        return "number " + num + " is ODD number!!";
    }
}
// fonction to return factorial for given number
function factorial(num) {

    if (num === 0) {
        return 1;

    } else {
        return num * factorial(num - 1);
    }
}
//function to replace any dashes with _ and g for global mean any dashe you face
// without g you will replace the first dash only
function kabbabToSnake(str) {
    str = str.replace(/-/g, "_");
    return str;
}
// setInterval(function() {
//     console.log("I Love You");
// }, 1000);
console.log(isEven(9));
console.log("factorial number 5 is: " + factorial(5));
console.log(kabbabToSnake("hello-there-Iam-So_Happy"));