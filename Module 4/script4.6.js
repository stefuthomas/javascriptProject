'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const value_from_input = document.querySelector('input[name=keyword]').value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        const jsonData = await response.json();
        const article = document.getElementById('article')
        article.innerHTML = '';
        for (let i = 1; i < jsonData.result.length; i++) {
            const p = document.createElement("p");
            const text = document.createTextNode(jsonData.result[i].value);
            p.appendChild(text);
            article.appendChild(p);
            console.log(jsonData.result[i].value);
        }
    } catch (error) {
        console.log(error.message);
    }
});