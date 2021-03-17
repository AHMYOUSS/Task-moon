import React from "react";
import "./NavbarItem.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from '../../img/Capture.PNG'
import LocationOnIcon from '@material-ui/icons/LocationOn';



function NavBarItem() {


  return (
    <div className="header">
     
        <img
          className="header__logo"
          src={Logo}
        />
   
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__config">
        <span> <LocationOnIcon/> </span>
        Notre magasin
      </div>

     
    </div>
  );
  }

export default NavBarItem
