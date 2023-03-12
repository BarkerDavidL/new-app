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

    const pages = [
        { label: "Setup", page: "setup.html"},
        { label: "New", page: "new.html"},
        { label: "Webpack", page: "webpack.html"},
        { label: "Babel", page: "babel.html"},
        { label: "Git", page: "git.html"},
        { label: "React", page: "react.html"},
    ];
    
    const site_menu = [
        { label: "About", page: "about.html"},
        { label: "Settings", page: "settings.html"},
    ];

    ReactDOM.render(
        <MainMenu menuItems={pages} />,
        document.getElementById('page-menu')
    );

    ReactDOM.render(
        <MainMenu menuItems={site_menu} />,
        document.getElementById('site-menu')
    );
    
    /* setPageOnClick(); */
    pageSet('setup.html');


}

