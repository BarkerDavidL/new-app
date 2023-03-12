import React from 'react';
import ReactDOM from 'react-dom';

import MainMenu from './MainMenu';

console.log("In index.js");
console.log("Now using webpack");

export function pageSet(newPage) {
    console.log("In pageSet()");
    let file = newPage;

    fetch (file)
        .then(response => response.text())
        .then(responseText => document.getElementById("current-page").innerHTML = responseText);
}

window.onload = () => {
    console.log("Window has loaded");

    ReactDOM.render(
        <MainMenu />,
        document.getElementById('main-menu')
    );

    /* setPageOnClick(); */
    pageSet('setup.html');


}

