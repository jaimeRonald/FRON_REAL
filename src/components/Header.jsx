// import React from 'react'
import React, { useState } from 'react';
import logo from '../assets/images/logo_mundo_bits.png';
import miFoto from '../assets/images/mi_foto.png';
import { Navbar } from './Navbar'

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {

    setMenuVisible(!menuVisible);
    console.log("Toggle menu"+menuVisible);

  };
  return (
    <div className= "lg:h-[100px] bg-gray-100 flex place-content-between items-center mb-2 relative">
      <img style={{width:100 , height:100}} src={logo} alt="logo" />
      <Navbar  onClick={toggleMenu}  menuVisible={menuVisible} />
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500"></div> */}

    </div>
  )
}

// export default Header
 