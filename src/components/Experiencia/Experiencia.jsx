import React from 'react'
import ExperienciaModelo from "./ExperienciaModelo"

const trabajos = [
  {
    anios: "2022 - Act",
    titulo: "Desarrollador Fullstack",
    lugar: "Freelance",
    duracion: "2 años",
    detalles: "Mis tareas incluyen el relevo de requerimientos, diseño, desarrollo e implementación de sistemas que el cliente necesite, tanto web como de escritorio.",
    aptitudes: "El sistema más significativo que realicé fue para un gimnasio ubicado en Alejandro Korn. Realicé el relevo de requerimientos junto al dueño del lugar, luego lo desarrollé e implementé en el establecimiento. El sistema permite gestionar a los clientes, sus ingresos y egresos mediante una tarjeta magnética, sus cuotas, los deudores, los empleados y el stock de productos a la venta dentro del gimnasio. El sistema fue realizado en Visual C# con base de datos Access y consultas SQL."
  },
  {
    anios: "2021 - 2022",
    titulo: "Soporte Técnico",
    lugar: "TecnoFix S.A",
    duracion: "1 año",
    detalles: "Me desempeñé como Soporte Técnico en un negocio creado en conjunto con un amigo.",
    aptitudes: "Mis responsabilidades incluían la reparación y armado de computadoras, venta de productos relacionados con la PC/gaming y soporte para eliminación de virus e instalación de programas específicos o sistemas operativos."
  }
]

const Experiencia = ({ fondo, texto, info, titular }) => {
  return (
    <div id="experiencia" className={`${fondo}`}>
      <div className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7`}>
          EXPERIENCIA LABORAL
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
            info={info} />
        ))}
      </div>
    </div>
  )
}

export default Experiencia