import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP al backend
    let url =  'http://127.0.0.1:8000/obtener_skills';
    let url_produccion = 'https://ronaldeinsten123.000webhostapp.com/public/index.php/obtener_skills';
    axios.get(url_produccion)
      .then(response => {
        // Actualiza el estado con los datos del backend
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos desde el backend:', error);
      });
  }, []);  // El segundo argumento [] asegura que useEffect se ejecute solo una vez (equivalente a componentDidMount)

  useEffect(() => {
    // Este efecto se ejecutará cada vez que articles se actualice (SE USA PARA SABER SI SE CARGO DATOS EN EL EL array "articles")
    console.log(articles);
  }, [articles]);

  return (
    <aside id='mis_habilidadades' className="bg-teal-500 text-OffWhite sm:py-[30px] sm:w-full md:w-2/2 lg:w-1/2 xl:w-5/6 p-4 sm:p-6 lg:p-8">
      <h1 className="text-gray-950 text-4xl font-bold mb-4"> Habilidades :</h1>
      {articles.map((article, index) => (
        <NewArticle key={index} title={article.title} text={article.text} />
      ))}
    </aside>
  );
};

