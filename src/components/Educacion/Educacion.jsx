import Translations from "../../Data/Translations";
import EducacionModelo from "../Educacion/EducacionModelo";

const Educacion = ({ fondo, texto, info, certificados, titular, language }) => {
  const educations = Object.values(Translations[language].educations);

  return (
    <div className={`${fondo}`}>
      <div id="educacion" className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7 uppercase`}>
          {Translations[language].educationtitle}
        </h1>
        {educations.map((item, idx) => (
          <EducacionModelo
            key={idx}
            anios={item.anios}
            titulo={item.titulo}
            lugar={item.lugar}
            detalles={item.detalles}
            texto={texto}
            info={info}
            certificados={certificados}
            linkCertificado={item.linkCertificado}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default Educacion;
