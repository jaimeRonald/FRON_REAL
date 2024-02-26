import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NewArticle } from "./NewArticle";
// export const NewContainer = () => {
//   return (
//     <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
//         <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
//         <NewArticle title="la vida es bella" text="It is a long established fact that a
//          reader will be distracted by the readable content of a page when looking at its layout"/>
//         <NewArticle title="lSobieland" text="2It is a long established fact that a
//          reader will be distracted by the readable content of a page when looking at its layout"/>
//         <NewArticle title="Algoritmo de revoliuciuon civil" text="3It is a long established fact that a
//          reader will be distracted by the readable content of a page when looking at its layout"/>
//     </aside>
//   )
// }
export const NewContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP al backend
    axios.get('http://127.0.0.1:8001/obtener', { credentials: 'include' })
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
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      {articles.map((article, index) => (
        <NewArticle key={index} title={article.title} text={article.text} />
      ))}
    </aside>
  );
};

