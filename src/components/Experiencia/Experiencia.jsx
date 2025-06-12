import Translations from "../../Data/Translations";
import ExperienciaModelo from "./ExperienciaModelo";

const Experiencia = ({ fondo, texto, info, titular, language }) => {
  const trabajos = Object.values(Translations[language].experiencia);

  return (
    <div id="experiencia" className={`${fondo}`}>
      <div className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7 uppercase`}>
          {Translations[language].experienciatitle}
        </h1>
        {trabajos.map((item, idx) => (
          <ExperienciaModelo
            key={idx}
            anios={item.anios}
            titulo={item.titulo}
            lugar={item.lugar}
            duracion={item.duracion}
            detalles={item.detalles}
            aptitudes={item.aptitudes}
            texto={texto}
            info={info}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiencia;
