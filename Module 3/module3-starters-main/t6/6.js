'use srict';
const button = document.querySelector('button');
function popup() {
  alert('Button was clicked');
}

button.onclick = popup;