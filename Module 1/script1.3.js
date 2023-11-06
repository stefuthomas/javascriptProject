'use strict';

let number1, number2, number3, summ, product, average
number1 = parseInt(prompt("1st number"))
number2 = parseInt(prompt("2nd number"))
number3 = parseInt(prompt("3rd number"))
document.write(`Summ of the numbers: ${number1+number2+number3} `);
document.write(`Product of the numbers: ${number1*number2*number3} `)
document.write(`Average of the numbers: ${(number1+number2+number3)/3}`)