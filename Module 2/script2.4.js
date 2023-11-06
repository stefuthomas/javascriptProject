'use strict';

let numberList, number
numberList = [];

do {
  number = parseInt(prompt('Enter a number'));
    numberList.push(number);
} while (number != 0);

numberList.reverse();
console.log(numberList);