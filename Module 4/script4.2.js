'use strict';

const tvmazeForm = document.querySelector('form');
tvmazeForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const value_from_input = document.querySelector('input[name=show]').value;
    try {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        for (let i = 1; i < jsonData.length; i++) {
            console.log(jsonData[i].show.name)
        }
    } catch (error) {
        console.log(error.message);
    }
});