import primeraIMg from '../assets/images/image-web-3-desktop.jpg';
import imagen_los_lemguages from '../assets/images/los_lenguages.jpg';
import imagen_principal_slider from '../assets/images/imagen_principal_slider.png';
import segunda_imagen_principal from '../assets/images/segunda_imagen_principal.jpeg';
import logo from '../assets/images/logo_mundo_bits.png';

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
export const Carousel = () => {
    
    const slides = [
      
      // {
      //   image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      // },
      // {
      //   image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      //   title: 'Hola , Mi nombre Ronald VIsitación Moreno Desarrolador fullstack , asi como me apsiona la programación , soy amante del deporte y pasarlo bien con mi familia  y amigos ',

      // },
      {
        image : imagen_principal_slider,
        title: 'Hola , Soy Ronal Visitación , un apasionado de la programacion con un enfoque orientado a resultados de éxito.',
        link : ''
      },
      
      {
        image: segunda_imagen_principal,
        title: 'Aportando soluciones innovadoras y desarrollo de vanguardia en una variedad de sectores, demostrando versatilidad y compromiso con la excelencia. ',
        link : '#lenguages_que_domino'
      },
      {
        image :imagen_los_lemguages,
        title : 'Apasionado por el aprendizaje continuo, me especializo en PHP, Javascript , Python ,MySQL , GIT , LINUX y estoy siempre explorando nuevas tecnología para entregar soluciones mejor inovadoras innovadoras',
        link : '#sorbre_mi'

      },
     
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const irADestino = () => {
      destinoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className='max-w-[100%] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[currentIndex].image})`,
              }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
              
              {currentIndex === 0 && (// Superposición solo en la primera imagen (pero pequeña)
              <img src={logo} // Reemplaza con la ruta correcta de tu nueva imagen
                alt='Superposición'
                className='w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
              )}
              <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-lora sm:w-11/12 lg:w-2/3 xl:w-1/2'>
              {slides[currentIndex].title}
               {/* Enlace hacia la sección destino */}
               {slides[currentIndex].link && (
                <a href={slides[currentIndex].link} className='bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105'>
                Ver más
                </a>
              
              )}
              </div>
             

        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    
    );
}
  // <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      //   <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
      //     <div>
      //       <img src={primeraIMg} alt="Slide 1" className="w-full" />
      //     </div>
      //     <div>
      //       <img src={primeraIMg} alt="Slide 1" className="w-full" />
      //     </div>
      //     <div>
      //       <img src={primeraIMg} alt="Slide 1" className="w-full" />
      //     </div>
      //     {/* Agrega más elementos div para más imágenes */}
      //   </Slider>
      // </div>