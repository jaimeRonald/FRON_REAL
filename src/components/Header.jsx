// import React from 'react'
import React, { useState } from 'react';
import logo from '../assets/images/logo_mundo_bits.png';
import miFoto from '../assets/images/mi_foto.png';
import { Navbar } from './Navbar'
import { useMediaQuery } from 'react-responsive';
export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {

    setMenuVisible(!menuVisible);
    console.log("Toggle menu"+menuVisible);

  };
  const isDesktop = useMediaQuery({ minWidth: 640 });
  console.log("pantalla "+isDesktop);

  return (
    <>
      <div className= "lg:h-[80px] bg-white flex place-content-between items-center relative">
        <img style={{width:100 , height:80}} src={logo} alt="logo" />
        <Navbar  onClick={toggleMenu}  menuVisible={menuVisible} isDesktop = {isDesktop}/>

      </div>
      <hr className="border-t border-gray-300 my-0" />
      <div className= {`${!menuVisible ? 'hidden' : ''} ${isDesktop ? 'hidden' : ''} h-[280px] bg-white flex flex-col items-center`}>
          <ul className={`sm:w-[70px] place-content-around lg:text-[23+px] items-center text-[30px] w-full text-center p-3`} >
               

                <li className="w-full mb-4 mt-3">
                    <a className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" href="#">
                    Acerca de</a>
                </li>
                <li className="w-full mb-4 border-t border-gray-300 border-opacity-50">
                    <a className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" href="#"  >Experiencia</a>

                </li>
                <li className="w-full mb-4 border-t border-gray-300 border-opacity-50">
                    <a href="#" className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" >Mis skills</a>

                </li>
                <li className="w-full mb-4 border-t border-gray-300 border-opacity-50">
                    <a href="#" className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" >Porfolios</a>
                </li>
          </ul>
       </div>

    </>
    
  )
}

// export default Header
 