'use strict';

let countingNumbers = true;
const numbers = [];
while (countingNumbers) {
    let num = parseInt(prompt('Enter a number'));
    numbers.push(num);
    if (num in numbers) {
        break
    }
}
numbers.sort();
console.log(numbers);