import React, { useState } from 'react'
import "../assets/css/navbar.css";
import NavbarLogic from "../model/NavbarLogic";


export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState(0);
  const NavbarLogicInstace = NavbarLogic();

  const collectGetNavBarItems = () => {
    return NavbarLogicInstace.getNavigation();
  }

  const navItems = collectGetNavBarItems();

  const setActiveItem = (index) => {
    setSelectedItem(index);
  }

  return (
    <nav className='own-navbar'>
      <div className='nav-header'>
        <div><h5>QuantumSky Solutions</h5></div>
        <div className='navbar-content'>
          <ul className='navbar-items'>
            {navItems.map((obj, key) => {
              return <li><a key={key} className={key === selectedItem ? "active-item" : ""} onClick={() => setActiveItem(key)} href={obj.href}>{obj.name}</a></li>
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
