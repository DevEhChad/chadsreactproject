import React, { useState } from 'react';
import Logo from '../assets/favicon.jpg';
import { NavLink, Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <a href='https://localhost:3000'>
        <img src={Logo} href="https://localhost:3000" />
        </a>
        <div className='hiddenLinks'>
          <NavLink to="/"> Home </NavLink>
          {/* <NavLink to="/applications"> Apps </NavLink> */}
          <NavLink to="/socials"> Socials </NavLink>
          <NavLink to="/about"> About </NavLink>
          {/* <NavLink to="/contact"> Contact </NavLink> */}
        </div>
      </div>
      <div className='rightSide'>
        <NavLink to="/"> Home </NavLink>
        {/* <NavLink to="/applications"> Apps </NavLink> */}
        <NavLink to="/socials"> Socials </NavLink>
        <NavLink to="/about"> About </NavLink>
        {/* <NavLink to="/contact"> Contact </NavLink> */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
