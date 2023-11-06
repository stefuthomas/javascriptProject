'use strict';

let participants, name, participantList
participants = parseInt(prompt("How many participants:"))
participantList = []
for (let i = 0; i < participants-1; i++) {
  name = prompt(`Name of the participant:`);
  participantList.push(name);
}
participantList.sort();
const participantListDiv = document.getElementById("target");
participantListDiv.innerHTML = "<h2>participant Names</h2><ol>";

for (let i = 0; i<=participantList.length; i++) {
  participantListDiv.innerHTML += "<li>" + participants[i] + "</li>";
}

participantListDiv.innerHTML += "</ol>";