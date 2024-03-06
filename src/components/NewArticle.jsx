
export const NewArticle = ({title,text}) => {
  return (
      <article className="border-b-2 border-GrayishBlue py-7 last:border-none lg:py-7">
        <h2 className="hover:text-gray-700 text-gray-950 cursor-pointer mb-2 font-bold text-lg lg:text-xl xl:text-2xl">
          {title}
        </h2>
        <p className="text-sm text-gray-900 lg:text-base xl:text-lg">{text}</p>
    </article>
  )
}
