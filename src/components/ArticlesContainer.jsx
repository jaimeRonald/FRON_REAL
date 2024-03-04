import { Article } from "./Article"
import { Carousel } from "./Carousel";
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-gaming-growth.jpg';
import img3 from '../assets/images/image-top-laptops.jpg';

export const ArticlesContainer = () => {
  return (
    <section id="sorbre_mi" className="mt-10 md:flex md:flex-wrap md:gap-5">
        <Article 
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
        />
    </section>
    
  )
}
