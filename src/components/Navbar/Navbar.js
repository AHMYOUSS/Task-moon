import React from 'react';
import NavbarItem from './Navbar-item';
import './Navbar.css' ;

const NavBar = () => {
  return (
    <div className="navbar">
      <NavbarItem/>
<ul>
  <li><a  href="#home">Accueil</a></li>
  <li><a href="#news">Boutique</a></li>
  <li><a href="#contact">Nos réalisations</a></li>
  <li><a href="#about">Contactez-nous</a></li>
</ul>
    </div>
  );
};

export default NavBar;