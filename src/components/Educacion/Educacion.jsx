import React from 'react'
import EducacionModelo from "../Educacion/EducacionModelo"

const trabajos = [
    {
      anios: "2022 - 2023",
        titulo: "Curso de React",
        lugar: "Udemy",
        detalles: "Desarrollo de aplicaciones web con React (MERN)."
        
    },
    {
      anios: "2022 - 2023",
        titulo: "Curso de Angular",
        lugar: "Udemy",
        detalles: "Desarrollo de aplicaciones web con React (MEAN)."
        
    },
    {
      anios: "2022 - 2023",
        titulo: "Formación Desarrollo Front-end",
        lugar: "Alura LATAM - Oracle Next Education",
        detalles: "Curso remoto de Alura LATAM | ONE - ORACLE NEXT EDUATION. Formacion de desarrollo Front-End."
        
    },
    {
      anios: "2017 - 2023",
        titulo: "Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones",
        lugar: "Instituto Superior de Formación Docente y Técnica 93 'Arturo Umberto Illia'",
        detalles: "Desarrollo de aplicaciones en C# y SQL. Programación orientada a objetos. Aplicaciones web. Front end y back end. Bases de datos."
    },
    {
      anios: "2016",
        titulo: "F.C.E. - Cambridge English First Nivel B2",
        lugar: "University of Cambridge'",
        detalles: "Examen aprobado de ingles Cambridge English First Nivel B2."
    }
]

const Educacion = ({fondo, texto, info, certificados}) => {
  return (
    <div className={`${fondo}`}>
    <div id="educacion" className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className='text-4xl font-bold text-center text-green-500 mb-7'>
        Educación, Cursos y Certificados
      </h1>
      {trabajos.map((item,idx) => (
          <EducacionModelo
          key={idx}
          anios={item.anios}
          titulo={item.titulo}
          lugar={item.lugar}
          detalles={item.detalles} 
          texto={texto}
          info={info}
          certificados={certificados}/>
        ))}
      </div>
      </div>
  )
}

export default Educacion