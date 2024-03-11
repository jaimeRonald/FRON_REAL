import MiFoto from '../assets/images/mi_foto.png'
export const Sobre_mi = () => {
  return (
    <section id='sobre_mi' className="mb-12">
      <h2 className='font-family-base text-gray-800 text-4xl text-center pt-4 font-bold'>Acerca de mí</h2>
      <h3 className="font-family-base text-gray-600 text-2xl text-center mb-6 text-teal-600">Soy desarrollador de Software, con 3 años de experiencia en el desarrollo del backend </h3>
      <div className="flex flex-col items-center sm:flex-row">
        <img
          src={MiFoto}
          alt="Mi Foto"
          className="sm:w-36 sm:h-36 xs:w-24 xs:h-24 lg:w-80 lg:h-80 rounded-full mb-4 sm:mb-0"
        />
        <div>
          {/* <p className="text-lg font-semibold mb-4">¡Hola! .</p> */}
          <p className="font-family-base text-gray-700 text-2xl p-3">
            Además tengo experiencia en frontend y deployment. 
          </p>
          <p className="font-family-base text-gray-700 text-2xl p-3">
          Si hay algo que me caracteriza es mi persistencia por lograr un objetivo. Considero la buena comunicación un pilar fundamental para obtener mejores y eficientes resultados, sobre todo en el mundo del software.

          </p>
        </div>
      </div>
    </section>


  
  )
}
