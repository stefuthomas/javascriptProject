'use strict';

const num = parseInt(prompt("Enter an integer."));
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.querySelector('#target').innerHTML = num + ' Is a primenumber';
} else {
    document.querySelector('#target').innerHTML = num + ' Is not a primenumber';
}