'use strict';

const numbers = [];
let num1, num2, num3, num4, num5;
num1 = parseInt(prompt("1st number:"));
num2 = parseInt(prompt("2nd number:"));
num3 = parseInt(prompt("3rd number:"));
num4 = parseInt(prompt("4th number:"));
num5 = parseInt(prompt("5th number:"));
numbers.push(num1, num2, num3, num4, num5);

for (let i = numbers.length; i >= 0; i--) {
  console.log(numbers[i]);
}