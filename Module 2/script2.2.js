'use strict';

let participants, name, participantList
participants = parseInt(prompt("How many participants:"))
participantList = []
for (let i = 0; i < participants; i++) {
  name = prompt(`Name of the participant:`);
  participantList.push(name);
}
participantList.sort();
const participantListDiv = document.getElementById("target");
for (let i = 0; i<participantList.length; i++) {
  participantListDiv.innerHTML += "<li>" + participantList[i] + "</li>";
}