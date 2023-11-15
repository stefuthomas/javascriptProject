'use strict';

let countingNumbers = true;
const numbers = [];
while (countingNumbers) {
    let num = parseInt(prompt('Enter a number'));
       if (numbers.includes(num)) {
        alert(`Number ${num} has already been given.`);
        break;
    } else {
           numbers.push(num);
       }
}
numbers.sort();
console.log(numbers);