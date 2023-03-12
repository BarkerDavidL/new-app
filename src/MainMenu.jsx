import React from 'react';

function MenuItems({items}) {
    return (
        items.map(menu_item =>
          <li key={menu_item.label} onClick={() => mylib.pageSet(menu_item.page)}>
            {menu_item.label}
          </li>)
    );
}

export default function MainMenu({menuItems}) {
    
    return (
      <ul id="pagelist" className="menu-parent"><MenuItems items={menuItems} /></ul>
    );
}
