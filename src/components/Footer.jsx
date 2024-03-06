import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin ,faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons'
export const Footer = () => {
  return (
    <div className="bg-gray-400 px-4 sm:px-6 lg:px-15 xl:px-12 2xl:px-32 pt-6 flex justify-between items-center pb-10">

        <div>
        <h3 className="text-xl font-bold mb-2">Ronald Visitación Moreno</h3>
        <p className="text-gray-700">Gracias por visitar mi sitio. ¡Espero que encuentres contenido interesante!</p>
        </div>
        <div className="flex items-center space-x-4">
        {/* Enlaces a tus redes sociales */}
        <a href="https://www.linkedin.com/in/jaime-visitacion-024731137/" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        {/* Agrega más iconos y enlaces según sea necesario */}
        </div>
    </div>
  
      );
      
}
