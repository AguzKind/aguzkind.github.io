import React from 'react'
import EducacionModelo from "../Educacion/EducacionModelo"

const trabajos = [
  {
    anios: "2017 - Act",
    titulo: "Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones",
    lugar: "Instituto Superior de Formación Docente y Técnica N°93",
    detalles: "En el instituto me enseñaron los conceptos de la programacion orientada a objetos y a utilizar Visual C#, SQL y React. Allí Desarrollé una aplicación para Windows tipo agenda para la Parroquia de San Vicente, con posibilidad de agendar horarios y días, tanto para la iglesia como para el SUM que la misma posee. También permite administrar las citas y los organizadores. Esta aplicación fue realizada en Visual C# MVC y base de datos de Access con consultas SQL. Tambien desarrollé una aplicación web similar a Lotería Nacional como proyecto de aprobación de examen final de la materia “Programación Web”. La misma permite a los usuarios apostar y elegir los números, qué tipo de apuesta y en qué pozo jugar. Además, permite a los administradores administrar la página, los pozos, los juegos y las jugadas. Por último, posee un login. La aplicación fue desarrollada en ASP.NET con base de datos y consultas SQL.",
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
    anios: "2022 - 2023",
    titulo: "Formación Desarrollo Front-end",
    lugar: "Alura LATAM - Oracle Next Education",
    detalles: "Curso remoto de Alura LATAM | ONE - ORACLE NEXT EDUATION. Formacion de desarrollo Front-End.",
    linkCertificado: "https://app.aluracursos.com/degree/certificate/b0062ca7-4316-4bae-a87c-c0d2cb33a22b"

  },
  {
    anios: "2016",
    titulo: "F.C.E. - Cambridge English First Nivel B2",
    lugar: "University of Cambridge'",
    detalles: "Examen aprobado de ingles Cambridge English First Nivel B2.",
    // linkCertificado: "#"
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