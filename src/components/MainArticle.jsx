import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDescktop from "../assets/images/image-web-3-desktop.jpg";


export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
          <source media="(max-width: 640px)" srcSet={imageMobile} />
          <source media="(min-width: 641px)" srcSet={imageDescktop} />
          <img src={imageMobile} alt="IMagen mobile" />
      </picture>

      <div className="sm:flex">
        <div className="flex-1">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">Salud y mundo</h2>
        </div>
        <div className="flex-1 ">
          <h2>Sumergente en el mundo de la Naturaleza y la Salud</h2>
          <p className="text-[15px] md-10 sm:text[15px]">El ser humano pasa la primera mitad de su vida arruinando la salud y
           la otra mitad intentando restablecerla</p>
            <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
        </div>
      </div>
     
     
    </section>
  )
}
