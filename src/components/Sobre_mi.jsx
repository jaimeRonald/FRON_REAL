import MiFoto from '../assets/images/mi_foto.png'
export const Sobre_mi = () => {
  return (
    <section className="mb-12">
        <div className="flex flex-col items-center sm:flex-row">
            <img
            src={MiFoto}
            alt="Mi Foto"
            className="sm:w-36 sm:h-36 xs:w-24 xs:h-24 lg:w-80 lg:h-80 rounded-full mb-4 sm:mb-0"
            />
            <div>
            {/* <p className="text-lg font-semibold mb-4">¡Hola! .</p> */}
            <p className="text-gray-700 text-2xl p-3">
                Soy desarrollador de Software , con experiencia 3 años en el lado  del Backend pero ademas he implementado tambien en frontend y deploy , si hay 
                algo que me caratceriza es mi persistencia por lograr un objetivo , considero la buena comunicacion un pilar para obetenr mejora y eficientes resultados
                sobre todo en el mundo del sofware 
            </p>
            </div>
        </div>
    </section>

  
  )
}
