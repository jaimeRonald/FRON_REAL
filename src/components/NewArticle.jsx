
export const NewArticle = ({title,text}) => {
  return (
         <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none
         lg:h-[160px] lg:py-9">
            <h2 className="hover:text-SoftOrange cursor-pointer mb-3 font-bold text-[16px]">{title}</h2>
            <p className="text-[15px]">{text}</p>
        </article>
  )
}
