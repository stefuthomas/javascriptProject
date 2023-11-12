'use strict';

function roll(sides) {
    let dice;
    while (dice !== sides) {
        dice = Math.floor(Math.random() * sides) + 1;
        document.querySelector('#target').innerHTML += '<li>' + dice + '</li>';
    }
}

const sides = parseInt(prompt('How many sides?'))
roll(sides);