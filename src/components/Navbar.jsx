import amburgIgm from '../assets/images/icon-menu.svg'
import equisImg from '../assets/images/letra-x.png';
export const Navbar = ({onClick,menuVisible,isDesktop}) => {
  return (
    <>
        <div className="flex items-center" style={menuVisible ? {  flexDirection: 'column', justifyContent: 'center' }:{}}>
            {!menuVisible && (
                <img
                className="absolute right-0 w-10 h-9 cursor-pointer sm:hidden"
                src={equisImg}
                onClick={onClick}
                alt="Cerrar menú"
                />
            )}
            {menuVisible && (
                <img
                className="w-10 h-4 cursor-pointer sm:hidden"
                src={amburgIgm}
                onClick={onClick}
                alt="Abrir menú"
                />
            )}
            <ul className={`${isDesktop ? '':'hidden'} sm:flex  sm:w-[600px] sm:place-content-around sm:text-[23+px] sm:items-center`} >
                {/* ${menuVisible ? 'block text-[30px]' : 'hidden text-[18px]'} */}

                <li>
                <a className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" href="#">
                    Acerca de
                </a>
                </li>
                <li>
                    <a className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" href="#"  >Experiencia</a>

                </li>
                <li>
                    <a href="#" className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" >Mis skills</a>

                </li>
                <li>
                    <a href="#" className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" >Porfolios</a>
                </li>
            </ul>
             

        </div>
    </>
    
   
  )
}
