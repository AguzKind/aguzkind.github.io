import React from 'react'
import EducacionModelo from "../Educacion/EducacionModelo"

const trabajos = [
  {
    anios: "2017 - Act",
    titulo: "Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones",
    lugar: "Instituto Superior de Formación Docente y Técnica N°93",
    detalles: `Actualmente curso el último año de la Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones, donde he adquirido conocimientos en desarrollo de aplicaciones en .NET y SQL, programación orientada a objetos (POO), y la implementación de la arquitectura MVC. Manejo tecnologías tanto de Front-End como de Back-End, y tengo experiencia en el desarrollo bases de datos. Utilizo Git para control de versiones en proyectos colaborativos.

A nivel de habilidades blandas, destaco que adquirí la capacidad de resolución de problemas mediante enfoques estructurados, y adaptabilidad para aprender nuevas tecnologías rápidamente. También tengo experiencia trabajando en equipos multidisciplinarios, con un fuerte enfoque en la colaboración y el manejo del tiempo para cumplir con plazos ajustados. Mi capacidad de pensamiento crítico me permite optimizar soluciones y tomar decisiones informadas en cada fase del desarrollo.`,
    //linkCertificado: "#"
  },
  {

    anios: "En curso...",
    titulo: "Desarrollo Backend .NET",
    lugar: "Udemy",
    detalles: "Desarrollo de aplicaciones backend en el entorno .NET (.NET Core, .NET Framework, ORM, APIs).",
    //linkCertificado: "#"
  },
  {

    anios: "En curso...",
    titulo: "Curso de React",
    lugar: "Udemy",
    detalles: "Desarrollo de aplicaciones web con React (MERN).",
    //linkCertificado: "#"
  },
  {
    anios: "En curso...",
    titulo: "Curso de Angular",
    lugar: "Udemy",
    detalles: "Desarrollo de aplicaciones web con Angular (MEAN).",
    //linkCertificado: "#",

  },
  {
    anios: "En curso...",
    titulo: "Curso AWS (DVA-CO2)",
    lugar: "Udemy",
    detalles: "Curso de preparación para la certificación AWS Certified Developer Associate (DVA-CO2)",
    //linkCertificado: "#",

  },
  {
    anios: "2022 - 2023",
    titulo: "Formación Desarrollo Front-end",
    lugar: "Alura LATAM - Oracle Next Education",
    detalles: `Curso completado en modalidad remota a través de Alura LATAM | ONE - ORACLE NEXT EDUCATION, enfocado en el desarrollo Front-End. Durante la formación, adquirí competencias en HTML5, CSS y Javascript para crear interfaces web dinámicas y responsivas. Además, profundicé en el uso de frameworks y herramientas como React, Bootstrap y TailwindCSS para optimizar el desarrollo y diseño de aplicaciones web modernas.

También me especialicé en control de versiones con GitHub, utilizando esta herramienta para gestionar y coordinar el código en proyectos colaborativos, garantizando un flujo de trabajo organizado y eficiente.

Este curso me permitió consolidar tanto habilidades técnicas esenciales para el desarrollo web, como el trabajo en equipo y la colaboración remota, preparándome para integrarme en entornos de desarrollo ágiles y dinámicos.`,
    linkCertificado: "https://app.aluracursos.com/degree/certificate/b0062ca7-4316-4bae-a87c-c0d2cb33a22b"

  },
  {
    anios: "2016",
    titulo: "F.C.E. - Cambridge English First Nivel B2",
    lugar: "University of Cambridge'",
    detalles: `Aprobé el Examen de Inglés Cambridge F.C.E (First Certificate in English), obteniendo el nivel B2 según el Marco Común Europeo de Referencia para las Lenguas. Este nivel certifica una competencia intermedia-alta en inglés, incluyendo habilidades sólidas en comprensión oral y escrita, así como en la expresión tanto escrita como hablada. Puedo comunicarme de manera efectiva en situaciones cotidianas y profesionales, además de comprender textos y conversaciones complejas.`,
    linkCertificado: "https://drive.google.com/file/d/1EoSGPN5QALFv5VweTon4QrHrX2_gafYM/view"
  }
]

const Educacion = ({ fondo, texto, info, certificados, titular }) => {
  return (
    <div className={`${fondo}`}>
      <div id="educacion" className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7`}>
          EDUCACIÓN, CURSOS Y CERTIFICADOS
        </h1>
        {trabajos.map((item, idx) => (
          <EducacionModelo
            key={idx}
            anios={item.anios}
            titulo={item.titulo}
            lugar={item.lugar}
            detalles={item.detalles}
            texto={texto}
            info={info}
            certificados={certificados}
            linkCertificado={item.linkCertificado} />
        ))}
      </div>
    </div>
  )
}

export default Educacion