'use strict';

const startYr = parseInt(prompt("Start year?"));
const endYr = parseInt(prompt("End year?"));

for (let year = 0; startYr + year <= endYr; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        const li = document.createElement('li');
        li.textContent = (startYr + year).toString();
        document.querySelector('#target').appendChild(li);
    }
}
