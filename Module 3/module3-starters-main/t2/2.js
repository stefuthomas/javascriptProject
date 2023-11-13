'use strict';

const ul = document.querySelector('#target');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li2.classList.add('my-item')

const text1 = document.createTextNode('First item');
const text2 = document.createTextNode('Second item');
const text3 = document.createTextNode('Third item');

li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);