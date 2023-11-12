'use strict';

function roll() {
    let dice;
    while (dice !== 6) {
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#target').innerHTML += '<li>' + dice + '</li>';
    }
}

roll();
