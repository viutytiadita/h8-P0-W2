var isEvenOdd = function(inputNumber) {
    var output = 'Odd'
    if (inputNumber % 2 == 0) {
        output = 'Even'
    }
    return output;
}

var isMultiple = function(inputNumber, multiple) {
    var output = false;
    if (inputNumber % multiple == 0) {
        output = true
    }
    return output;

}

function mengelompokkanAngka(inputArray) {

    var outputEven = []
    var outputOdd = []
    var outputMultiple3 = []

    for (var i = 0; i < inputArray.length; i++) {

        if (isMultiple(inputArray[i], 3) === true) {
            outputMultiple3.push(inputArray[i]);
        } else if (isEvenOdd(inputArray[i]) === 'Even') {
            outputEven.push(inputArray[i]);
        } else if (isEvenOdd(inputArray[i]) === 'Odd') {
            outputOdd.push(inputArray[i]);
        }

    }
    return [outputEven, outputOdd, outputMultiple3];
}



console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]