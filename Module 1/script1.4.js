'use strict';


const name = prompt("Hello. What is your name:")
const number = Math.floor(Math.random() * 4) + 1

switch (number) {
  case 1:
    document.write(name + ' you are Gryffindor.');
    break;
  case 2:
    document.write(name + ' you are Slytherin.');
    break;
  case 3:
    document.write(name + ' you are Hufflepuff.');
    break;
  case 4:
    document.write(name + ' you are Ravenclaw.');
    break;
  default:
    document.write('Error')
}