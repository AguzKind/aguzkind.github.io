import React from 'react'
import ExperienciaModelo from "./ExperienciaModelo"

const trabajos = [
    {
      anios: "2022 - 2023",
        titulo: "Desarrollador Back-end",
        lugar: "Acudir - Emergencias Medicas",
        duracion: "1 año",
        detalles: "Resolución y desarrollo de bugs, features con supervisión de lideres tecnicos para proyecto de sistemas de ambulancias, aplicación de videoconsultas y gestiones medicas (.NET Framework), con consumos a API's (.NET Core).",
        aptitudes: "Desarrollo de API · Vue.js · .NET · C# · Trello · Jira · Git"
    },
    {
      anios: "2019 - 2022",
        titulo: "Desarrollador de software",
        lugar: "TecnoFix S.A",
        duracion: "3 años",
        detalles: "Reinstalación de sistemas operativos, instalación de programas específicos, mejora de rendimiento, eliminación de virus. Desarrollo de software a medida.",
        aptitudes: ".NET · Desarrollo Full Stack · Microsoft Access · Soporte técnico · Reparación de equipos informáticos · Windows · Mantenimiento y reparaciones · Desarrollo de software · ASP.NET · SQL · Desarrollo web · C# · Web Services API"
    }
]

const Experiencia = ({fondo, texto, info}) => {
  return (
    <div id="experiencia"  className={`${fondo}`}>
    <div className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className='text-4xl font-bold text-center text-green-500 mb-7'>
        Experiencia Laboral
      </h1>
      {trabajos.map((item,idx) => (
          <ExperienciaModelo
          key={idx}
          anios={item.anios}
          titulo={item.titulo}
          lugar={item.lugar}
          duracion={item.duracion}
          detalles={item.detalles}
          aptitudes={"APTITUDES: " + item.aptitudes} 
          texto={texto}
          info={info}/>
        ))}
      </div>
      </div>
  )
}

export default Experiencia