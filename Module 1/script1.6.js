'use strict'

let number;
const user_confirm = confirm('Should I calculate the square root?');
if (user_confirm === true) {
    number = parseInt(prompt('What number should be calculated?'));
    if (number < 0) {
        document.write('The square root of a negative number is not defined')
    } else {
        const squareRoot = Math.sqrt(number)
        const squareRootStr = squareRoot.toString()
        document.write(squareRootStr)
    }
} else {
    document.write('The square root is not calculated.');
}

