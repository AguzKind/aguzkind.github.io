import React from 'react'
import ExperienciaModelo from "./ExperienciaModelo"

const trabajos = [
  {
    anios: "2024 - Act",
    titulo: "Desarrollador Fullstack",
    lugar: "TogetherDevs",
    duracion: "1 mes",
    detalles: `En TogetherDevs, contribuyo al desarrollo estratégico de productos digitales que impulsan el éxito de emprendedores, startups y empresas. Formo parte del equipo encargado de transformar ideas en experiencias digitales de alto impacto, desarrollando soluciones innovadoras y escalables.`,
    aptitudes: `Durante mi rol, estoy ampliado mis conocimientos técnicos trabajando con tecnologías de vanguardia como .NET 8, Entity Framework Core, PostgreSQL, React y AWS, aplicándolos en la creación y mantenimiento de APIs robustas, funcionalidades eficientes y entornos en la nube. Mi aporte se centra en ofrecer soluciones técnicas de calidad que se alineen con los objetivos estratégicos de los clientes, colaborando en un entorno dinámico y orientado a resultados.`
  },
  {
    anios: "2022 - Act",
    titulo: "Desarrollador Fullstack",
    lugar: "Freelance",
    duracion: "2 años",
    detalles: `Mis Principales responsabilidades son:
- Relevar y documentar requerimientos funcionales y no funcionales en reuniones con stakeholders.
- Analizar, diseñar y proponer soluciones técnicas alineadas a las necesidades del cliente.
- Desarrollar e implementar aplicaciones siguiendo las mejores prácticas de programación y patrones de diseño.
- Gestionar bases de datos, desde la creación de tablas hasta la optimización de consultas y generación de reportes.
- Asegurar la correcta integración entre las diferentes capas del software (UI, lógica de negocio y acceso a datos).
- Documentar y capacitar a los usuarios finales en el uso eficiente de las aplicaciones desarrolladas.`,

    aptitudes: `\nSoftwares mas relevantes:

Aplicación de agenda para Parroquia San Vicente: Responsable del análisis de necesidades y expectativas del cliente, diseño de la arquitectura del sistema, y desarrollo de una aplicación de gestión de actividades y eventos utilizando Visual C# y .NET MVC. Base de datos gestionada en Microsoft Access con consultas SQL para la extracción y manipulación de datos.

Desarrollo de una plataforma web de lotería virtual: En colaboración con Lotería Nacional y como parte de un proyecto académico, realicé el diseño funcional, desarrollo backend en C# y ASP.NET, y la implementación de la base de datos SQL para simular una lotería virtual, asegurando integridad de los datos y cumplimiento de normativas del sector.

Sistema de gestión administrativa para gimnasio: Realicé un análisis exhaustivo de los flujos de trabajo y las necesidades operativas del cliente, diseñé la estructura de datos y desarrollé un software que facilita la gestión de clientes, empleados, y el control de acceso al establecimiento. El sistema fue implementado en Visual C# con .NET MVC, utilizando Microsoft Access para el almacenamiento de datos y consultas SQL para generar reportes de uso y control.`
  },
  {
    anios: "2021 - 2022",
    titulo: "Soporte Técnico",
    lugar: "TecnoFix S.A",
    duracion: "1 año",
    detalles: "Me desempeñé como Soporte Técnico en un negocio creado en conjunto con un amigo.",
    aptitudes: `Era el Responsable del ensamblaje completo de hardware, incluyendo selección de componentes (procesadores, tarjetas madre, memorias, discos duros, fuentes de poder, etc), garantizando la compatibilidad y el rendimiento óptimo de cada equipo. A lo largo del tiempo, ensamblé más de 20 equipos personalizados para clientes particulares.

    Implementé y configuré sistemas operativos (Windows, Linux, etc.) adaptados a las necesidades del usuario. Optimizaba la instalación mediante la configuración de particiones, controladores y actualizaciones de software. También realicé la instalación y configuración de programas específicos (MS Office, software de diseño, antivirus, etc), asegurándome de que fueran compatibles con el hardware y requerimientos del usuario. También brindaba asesoría sobre el uso eficiente del software y mejores prácticas para su mantenimiento.

    Diagnostiqué cuellos de botella de rendimiento en equipos, aplicando mejoras como actualizaciones de hardware, optimización del sistema operativo, gestión de recursos y limpieza de archivos innecesarios. Logré una mejora de rendimiento de hasta un 40% en algunos casos mediante técnicas de optimización.

    Realicé análisis exhaustivos de detección de malware del sistema para eliminarlos, que comprometían el rendimiento o la seguridad de los equipos. Implementé medidas de seguridad preventivas como la instalación de software antivirus y configuraciones de seguridad adicionales, disminuyendo en un 80% las reincidencias de infecciones.

    Implementé planes de mantenimiento regular que incluían limpieza de hardware, actualización de drivers, parches de seguridad y verificación de integridad de sistemas, aumentando la vida útil de los equipos en un casi 50%.

    Por último, brindé asesoría en la compra de hardware y software. Ofrecía recomendaciones personalizadas a los clientes sobre actualizaciones de hardware y software, optimizando su inversión tecnológica con base en sus necesidades y presupuestos.`
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