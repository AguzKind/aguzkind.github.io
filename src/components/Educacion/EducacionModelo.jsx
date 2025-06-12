import Translations from "../../Data/Translations";

const ExperienciaModelo = ({ anios, titulo, lugar, detalles, texto, certificados, info, linkCertificado, language }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-green-500 md:ml-[10%] sm:ml-[5%]'
      data-aos="zoom-in">
      <li className='mb-10 ml-5'>

        <div className='absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border-black' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold bg-green-700 rounded-full text-white'>{anios}</span>
          <span className='text-lg font-semibold text-green-500 '>{titulo}</span>
          <b>|</b>
          <span className={`${info} my-1 text-sm font-semibold leading-none pt-0.5 text-orange-400`}>{lugar}</span>
          <b>|</b>
          <a target='_blank' href={linkCertificado} className={`${certificados} my-1 text-sm font-semibold leading-none pt-0.5 cursor-pointer hover:scale-110 ease-in duration-200`}> {Translations[language].educationcertificate}</a>
        </p>
        <p className={`${texto} whitespace-pre-line my-2 text-base font-normal`}>{detalles}</p>
      </li>
    </ol>
  )
}

export default ExperienciaModelo