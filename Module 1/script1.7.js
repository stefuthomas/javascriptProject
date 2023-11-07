'use strict';

let result, sum = 0
const dice = parseInt(prompt('How many dice?'));
for (let i = 0; i < dice; i++) {
    result = Math.floor(Math.random()*6) + 1;
    sum = sum + result
}

document.write(sum)