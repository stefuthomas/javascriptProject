'use strict';

function concat(names) {
    let concatenate = ''
    for (let i = 0; i < names.length; i++) {
        concatenate += `${names[i]}`;
    }
    return concatenate;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Mark'];

const concatenate = concat(names);
document.write(concatenate)