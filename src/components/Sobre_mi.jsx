import MiFoto from '../assets/images/mi_foto.png'
export const Sobre_mi = () => {
  return (
    <section className="mb-12">
        <h2 className='font-family-base text-gray-800 text-4xl text-center pt-4 font-bold'>Sobre mi</h2>
        <div className="flex flex-col items-center sm:flex-row">
            <img
            src={MiFoto}
            alt="Mi Foto"
            className="sm:w-36 sm:h-36 xs:w-24 xs:h-24 lg:w-80 lg:h-80 rounded-full mb-4 sm:mb-0"
            />
            <div>
            {/* <p className="text-lg font-semibold mb-4">¡Hola! .</p> */}
            <p className="font-family-base text-gray-700 text-2xl p-3">
                Soy desarrollador de Software , con experiencia 3 años en el lado  del Backend pero ademas he implementado tambien en frontend y deploy , si hay 
                algo que me caratceriza es mi persistencia por lograr un objetivo , considero la buena comunicación un pilar fundamental para obtener mejores y eficientes resultados
                sobre todo en el mundo del sofware.
            </p>
            <p className="font-family-base text-gray-700 text-2xl p-3"> 
               Desde mi etapa universitaria dodne descubri la programacion poco a poco me ha ido apasionando y el gusto por crear cosas y ver como estas funcionan me conlleva me conlleva a mejorarlas con la ayuda de la tecnologia en especial la programacion y los algoritmos se puede hacer realiar un sueño. 
            </p>
            <p className="font-family-base text-gray-700 text-2xl p-3">
              Tengo el grado de Bachiller en Ciencias de la Computación desde el 2020 y he trabajado en mas de 4 emprsas en desarrollo.
            </p>
            </div>
        </div>
    </section>

  
  )
}
