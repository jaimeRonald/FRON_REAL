
export const Article = ({img,number,title,text}) => {
  return (
    <article className='flex sm:flex-row h-[390px] md:w-[343px] md:flex-grow bg-emerald-400 py-5 px-5 mb-4 sm:mb-0 transition-transform transform hover:scale-105 hover:bg-emerald-300'>
    {/* <div className='w-full sm:w-[100px] mb-4 sm:mb-0'>
        <img src={img} alt="imagen de pcs" className='w-full sm:w-[100px] h-auto sm:h-[100px] object-cover max-w-[100px]' />
    </div> */}
    <div className='pl-6'>
        <p className='text-DarkGrayishBlue mb-[18px] text-3xl font-bold'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
        <p className='font-family-base text-gray-700'>{text}</p>
    </div>
</article>


  )
}
