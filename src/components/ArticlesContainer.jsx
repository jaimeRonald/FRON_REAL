import { Article } from "./Article"
import { Carousel } from "./Carousel";
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-gaming-growth.jpg';
import img3 from '../assets/images/image-top-laptops.jpg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const ArticlesContainer = () => {
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP al backend
    let url =  'http://127.0.0.1:8000/obtener_experiencias';
    let url_produccion = 'https://ronaldeinsten123.000webhostapp.com/public/index.php/obtener_experiencias';
    axios.get(url_produccion)
      .then(response => {
        // Actualiza el estado con los datos del backend
        setExperience(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos desde el backend:', error);
      });
  }, []);  // El segundo argumento [] asegura que useEffect se ejecute solo una vez (equivalente a componentDidMount)

  useEffect(() => {
    // Este efecto se ejecutará cada vez que articles se actualice (SE USA PARA SABER SI SE CARGO DATOS EN EL EL array "articles")
    console.log(experiences);
  }, [experiences]);

  return (
    <div id="experiencia">
      <h2 className='font-family-base text-gray-800 text-4xl text-center pt-4 font-bold'>Experiencias</h2>

      <section  className="mt-10 md:flex md:flex-wrap md:gap-5 pb-9">

          {experiences.map((experience , index) => (
              <Article key={index}  img={img1} number = {experience.title}  title = {experience.empresa} text={experience.text}/>

          ))}
          
          {/* <Article 
          img={img1}
          number = '1'
          title = "Noticia de hoy"
          text =  'El melocotón bailaba con entusiasmo en la bibli de hoy '
          />
          <Article 
          img={img2}
          number = '2'
          title = "Noticia de hoy"
          text =  'El melocotón bailaba con entusiasmo en la bibliote especiales'
          />
          <Article
          img={img3}
          number = '3'
          title = "Noticia de hoy"
          text =  'El melocotón bailaba con entusiasmo en la biblioteca paolo jugarà'
          /> */}
      </section>
    </div>
    
    
  )
}
