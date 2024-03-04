import amburgIgm from '../assets/images/icon-menu.svg'
import equisImg from '../assets/images/letra-x.png';
export const Navbar = ({onClick,menuVisible}) => {
  return (
    <div className="flex items-center relative" style={menuVisible ? { height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }:{}}>
        {/* <img className={`w-10 h-4 cursor-pointer sm:hidden`} src={amburgIgm}   onClick={onClick}  alt="MenuAmburgesa" /> */}
            {menuVisible && (
            <img
            className="absolute top-0 right-0 w-10 h-9 cursor-pointer sm:hidden"
            src={equisImg}
            onClick={onClick}
            alt="Cerrar menú"
            />
        )}
        {!menuVisible && (
            <img
            className="w-10 h-4 cursor-pointer sm:hidden"
            src={amburgIgm}
            onClick={onClick}
            alt="Abrir menú"
            />
        )}
        <ul className={`sm:flex  sm:w-[600px] sm:place-content-around lg:text-[23+px] sm:items-center 
            ${menuVisible ? 'block text-[30px]' : 'hidden text-[18px]'}`} >

            <li>
            <a className="font-lora transition-all duration-300 hover:text-teal-500 hover:underline hover:font-bold hover:scale-105 hover:shadow-none" href="#">
                Sobre mí
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
   
  )
}
