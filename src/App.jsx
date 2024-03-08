// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// app.jsx

 
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// function App() {
//   const [datoDesdeLaravel, setDatoDesdeLaravel] = useState(null);

//   useEffect(() => {
//     // Realiza la solicitud GET al cargar el componente
//     obtenerDatoDesdeLaravel();
//   }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez (equivalente a componentDidMount)

//   const obtenerDatoDesdeLaravel = async () => {
//     try {
//       // Realiza la solicitud GET a tu API de Laravel
//       const respuesta = await axios.get('http://127.0.0.1:8001/obtener', { credentials: 'include' });

//       console.log(respuesta);

//       // Actualiza el estado con el dato recibido desde Laravel
//       setDatoDesdeLaravel(respuesta.data);
//     } catch (error) {
//       console.error('Error al obtener dato desde Laravel:', error);
//       // Mostrar mensaje informativo al usuario o redirigir a página de error
//     } 
//   };

//   return (
//     <div>
//       <h1>Tu Aplicación React</h1>
//       <p>Dato desde Laravel:{datoDesdeLaravel}</p>
//     </div>
//   );
// }
import './styles/styles.css';
import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from './components/NewContainer';
import { ArticlesContainer } from './components/ArticlesContainer';
import { Carousel } from './components/Carousel';
import { Sobre_mi } from './components/Sobre_mi';
import { Footer } from './components/Footer';
function App () {
  return (
    <>
      <Header />
      <main className='bg-gray-200 px-4 sm:px-6 lg:px-60 xl:px-24 2xl:px-60 pt-6'>
      
        <div className="lg:flex lg:gap-8 p-8">
          {/* <MainArticle  /> */}
          <Sobre_mi />
          <NewContainer />
        </div>
        <Carousel/>

        <ArticlesContainer />

      </main>
      <Footer />

    </>
      
  )
}

export default App;
