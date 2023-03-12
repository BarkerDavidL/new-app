import React from 'react';

const menu_items = [
    { id: 1, menu_short: "Setup", page: "setup.html"},
    { id: 2, menu_short: "New", page: "new.html"},
    { id: 3, menu_short: "Webpack", page: "webpack.html"},
    { id: 4, menu_short: "Babel", page: "babel.html"},
    { id: 5, menu_short: "Git", page: "git.html"},
    { id: 6, menu_short: "React", page: "react.html"},
];

const menu_list = menu_items.map(menu_item =>
    <li key={menu_item.id} className="test" onClick={() => mylib.pageSet(menu_item.page)}>{menu_item.menu_short}</li>
);

const MainMenu = () =>
   <ul id="pagelist" className="menu-parent">{menu_list}</ul>;

export default MainMenu;
