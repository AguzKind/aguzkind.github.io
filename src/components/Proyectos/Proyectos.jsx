import React from 'react'
import ProyectosModelo from "./ProyectosModelo"
import ABMKiosko from '../../assets/abmkiosko.png'
import Agenda from '../../assets/agenda.png'
import ConteoCaracteres from '../../assets/conteo_caracteres.png'
import JuegoDados from '../../assets/juego_dados.png'
import PacientesVet from '../../assets/pacientes_vet.png'
import AgendaIglesia from '../../assets/programa_iglesia.png'
import Tareas from '../../assets/tareas.png'
import CrudEmpleados from '../../assets/crud_empleados.png'
import ConversorCripto from '../../assets/conversor_cripto.png'
import Portfoliov2 from '../../assets/portfoliov2.png'

const Proyectos = ({ texto, fondo, titular }) => {
  return (
    <div className={`${fondo}`}>
      <div id="proyectos" className='max-w-[1040px] m-auto p-4 py-16'>
        <h1 className={`${titular} text-4xl font-bold text-center mb-7`}>
          PROYECTOS
        </h1>
        <div className='grid sm:grid-cols-2 gap-12 md:ml-20'>
          <ProyectosModelo img={Portfoliov2} titulo="Portfolio" linkDemo={"https://conversor-cripto.netlify.app/"} linkRepo={"https://github.com/AguzKind/aguzkind.github.io"} />
          <ProyectosModelo img={ConversorCripto} titulo="Conversor Cripto" linkDemo={"https://conversor-cripto.netlify.app/"} linkRepo={"https://github.com/AguzKind/Conversor-cripto"} />
          <ProyectosModelo img={Tareas} titulo="Lista ToDo" linkRepo={"https://github.com/AguzKind/listadetareas"} linkDemo={"https://aguzkind.github.io/listadetareas/"} />
          <ProyectosModelo img={PacientesVet} titulo="Seguimiento Pacientes Veterinaria" linkDemo={"https://vet-react-demo.netlify.app/"} linkRepo={"https://github.com/AguzKind/citas_veterinaria"} />
          <ProyectosModelo img={CrudEmpleados} titulo="Empleados CRUD" linkDemo={"https://github.com/AguzKind/CRUD-ASP.NET"} linkRepo={"https://github.com/AguzKind/CRUD-ASP.NET"} />
          <ProyectosModelo img={ABMKiosko} titulo="Kiosco CRUD" linkDemo={"https://github.com/AguzKind/ABMKiosko"} linkRepo={"https://github.com/AguzKind/ABMKiosko"} />
          <ProyectosModelo img={Agenda} titulo="Agenda CRUD" linkDemo={"https://github.com/AguzKind/AgendaBasica"} linkRepo={"https://github.com/AguzKind/AgendaBasica"} />
          <ProyectosModelo img={ConteoCaracteres} titulo="Conteo Caracteres" linkDemo={"https://github.com/AguzKind/ConteoCaracteres"} linkRepo={"https://github.com/AguzKind/ConteoCaracteres"} />
          <ProyectosModelo img={JuegoDados} titulo="Juego de dados" linkDemo={"https://github.com/AguzKind/JuegoDados"} linkRepo={"https://github.com/AguzKind/JuegoDados"} />
          <ProyectosModelo img={AgendaIglesia} titulo="Agenda Parroquia CRUD" linkRepo={"https://github.com/AguzKind/ProgramaIglesia"} linkDemo={"https://github.com/AguzKind/ProgramaIglesia"} />
          {/* Borrar los linkRepo */}
        </div>
      </div>
    </div>
  )
}


export default Proyectos