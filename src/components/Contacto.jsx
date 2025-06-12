import Translations from '../Data/Translations';
import { GrMail } from 'react-icons/gr'
import Aos from 'aos'

const Contacto = ({ fondo, texto, fondoBoton, titular, language }) => {
  Aos.init();
  return (
    <div id="contacto" className={`${fondo} `}>
      <div className='max-w-[1040px] m-auto p-4 py-16 w-[80%]'
        data-aos="zoom-in"
        data-aos-duration="2000">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7`}>
          {Translations[language].contacttitle}
        </h1>
        <form action="https://getform.io/f/7c0216c5-dfdf-4e40-9341-a08bd106e8ed" method='POST' encType='multipart/form-data'>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className={`${texto} uppercase text-sm py-2 font-roboto font-semibold`}>          {Translations[language].contactname}
              </label>
              <input className="border-2 rounded-lg p-3 flex border-green-500" type="text" name='name' required />
            </div>
            <div className='flex flex-col'>
              <label className={`${texto} uppercase text-sm py-2 font-roboto font-semibold`}>          {Translations[language].contactsubject}
              </label>
              <input className="border-2 rounded-lg p-3 flex border-green-500" type="text" name="subject" required />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <label className={`${texto} uppercase text-sm py-2 font-roboto font-semibold`}>Email</label>
            <input className="border-2 rounded-lg p-3 flex border-green-500" type="email" name="email" required />
          </div>
          <div className='flex flex-col py-2'>
            <label className={`${texto} uppercase text-sm py-2 font-roboto font-semibold`}>          {Translations[language].contactmessage}
            </label>
            <textarea className="border-2 rounded-lg p-3 flex border-green-500" rows='10' name="message" required />
          </div>
          <div className='flex flex-col py-2 md:mx-[10rem]'>
            <button
              className={`${fondoBoton} inline-block rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer font-bold hover:scale-105 duration-300 hover:bg-green-500`}
            >
              <section className={`${texto} flex items-center gap-3 justify-center`}>
                {Translations[language].contactbutton}
                <GrMail />
              </section>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto