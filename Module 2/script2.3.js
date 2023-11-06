'use strict';

let dogs
dogs = []

for (let i =0; i < 6; i++) {
  dogs.push(prompt("Name of the dog:"));
}

dogs.sort(function(a,b) {
  return b.localeCompare(a);
});

const dogsDiv = document.getElementById("target");
for (let i = 0; i<dogs.length; i++) {
  dogsDiv.innerHTML += "<li>" + dogs[i] + "</li>";
}