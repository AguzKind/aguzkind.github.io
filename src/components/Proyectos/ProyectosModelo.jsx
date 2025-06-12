import { GiClick } from "react-icons/gi";
import Translations from "../../Data/Translations";


const ProyectosModelo = ({ img, titulo, onClick, language }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className='relative aspect-video w-full shadow-md shadow-orange-500 rounded-xl cursor-pointer overflow-hidden group'
      onClick={onClick}
    >
      {/* Imagen */}
      <img
        src={img}
        alt={titulo}
        className='w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105'
      />

      {/* Overlay en hover */}
      <div
        className='absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        style={{
          textShadow:
            '2px 2px 4px #000, -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000',
        }}
      >
        <h1 className='text-white text-5xl font-bold mb-2 uppercase'>{titulo}</h1>
        <div className="text-white text-3xl flex flex-row gap-3">
          <GiClick />
          <p className='text-white text-xl'>{Translations[language].proyectsubtitle}</p>

        </div>

      </div>
    </div>
  );
};

export default ProyectosModelo;
