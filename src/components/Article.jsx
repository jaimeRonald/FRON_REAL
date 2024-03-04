
export const Article = ({img,number,title,text}) => {
  return (
    <article className='flex  h-[162px] md:w-[343px] md:flex-grow bg-emerald-300'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="imagen de pcs" />
        </div>
        <div className='pl-6'>
            <p className='text-DarkGrayishBlue mb-[18px] text-3xl font-bold'>{number}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{title} </h2>
            <p className='text-DarkGrayishBlue'>{text} </p>
        </div>
    </article>
  )
}
