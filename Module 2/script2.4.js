'use strict';

let numberList, number
numberList = [];

do {
  number = parseInt(prompt('Enter a number'));
    numberList.push(number);
} while (number != 0);

numberList.sort((a, b) => b - a);
console.log(numberList);