var arr = [1, 2, 3, 4, 5, 6, 11];

// to reverse array items
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// to check if the given element is one of the array items
function isUniform(item, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}



// to sum array elements
function sumArray(arr) {
    var total = 0;
    // here i'm gonna use foreach instead of for
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}


// return the max element in the array
function maxItem(arr) {
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}



printReverse(arr);
console.log(isUniform(5, arr));
console.log(sumArray(arr));
console.log(maxItem(arr));