import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

import MainMenu from './MainMenu';

import Setup from "./Setup"
import New from "./New"
import Webpack from "./Webpack"
import Babel from "./Babel"
import Git from "./Git"
import Reactpage from "./Reactpage"
import About from "./About"
import User from "./User"
import Settings from "./Settings"

console.log("In index.js");


let htmlMap = {
    "setup.html": Setup,
    "new.html": New,
    "webpack.html": Webpack,
    "babel.html": Babel,
    "git.html": Git,
    "react.html": Reactpage,
    "about.html": About,
    "user.html": User,
    "settings.html": Settings,
}

function showUserReg(file) {
    if ("user.html" == file) {
        ReactDOM.render(
            <User />,
            document.getElementById('user-registration-form')
        );    
    }
}

export function pageSet(newPage) {
    console.log("In pageSet()");
    let page = htmlMap[newPage];
    console.log("Load: " + page);

    ReactDOM.render(
        createElement(page, {}),
        document.getElementById('current-page')
    );
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
        { label: "User", page: "user.html"},
        { label: "Settings", page: "settings.html"},
    ];

    ReactDOM.render(
        <MainMenu menuItems={pages} />,
        document.getElementById('js-page-menu')
    );

    ReactDOM.render(
        <MainMenu menuItems={site_menu} />,
        document.getElementById('js-site-menu')
    );
    
    /* setPageOnClick(); */
    pageSet('setup.html');

}

