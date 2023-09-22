import React from 'react'
import ProyectosModelo from "./ProyectosModelo"
import ABMKiosko from '../../assets/abmkiosko.png'
import Agenda from '../../assets/agenda.png'
import Apeperia from '../../assets/apeperia.png'
import Apps from '../../assets/Apps.png'
import ConteoCaracteres from '../../assets/conteo_caracteres.png'
import Fruta from '../../assets/fruta.png'
import JuegoDados from '../../assets/juego_dados.png'
import MiniAlura from '../../assets/mini.png'
import PacientesVet from '../../assets/pacientes_vet.png'
import AgendaIglesia from '../../assets/programa_iglesia.png'
import Tareas from '../../assets/tareas.png'
import CrudEmpleados from '../../assets/crud_empleados.png'
import ConversorCripto from '../../assets/conversor_cripto.png'

const Proyectos = ({ texto, fondo }) => {
  return (
    <div className={`${fondo}`}>
      <div id="proyectos" className='max-w-[1040px] m-auto p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-green-500 mb-7'>
          Proyectos
        </h1>
        <div className='grid sm:grid-cols-2 gap-12 md:ml-20'>
          <ProyectosModelo img={ConversorCripto} titulo="Conversor Cripto" linkDemo={"https://conversor-cripto.netlify.app/"} linkRepo={"https://github.com/AguzKind/Conversor-cripto"} />
          <ProyectosModelo img={CrudEmpleados} titulo="Empleados CRUD" linkDemo={"https://github.com/AguzKind/CRUD-ASP.NET"} linkRepo={"https://github.com/AguzKind/CRUD-ASP.NET"} />
          <ProyectosModelo img={ABMKiosko} titulo="Kiosco CRUD" linkDemo={"https://github.com/AguzKind/ABMKiosko"} linkRepo={"https://github.com/AguzKind/ABMKiosko"} />
          <ProyectosModelo img={Agenda} titulo="Agenda CRUD" linkDemo={"https://github.com/AguzKind/AgendaBasica"} linkRepo={"https://github.com/AguzKind/AgendaBasica"} />
          <ProyectosModelo img={Apeperia} titulo="Apeperia (Landing page)" linkDemo={"https://aguzkind.github.io/apeperia/"} linkRepo={"https://github.com/AguzKind/apeperia"} />
          <ProyectosModelo img={Apps} titulo="Alura APPS (Landing Page)" linkRepo={"https://github.com/AguzKind/storealura"} linkDemo={"https://aguzkind.github.io/storealura/"} />
          <ProyectosModelo img={ConteoCaracteres} titulo="Conteo Caracteres" linkDemo={"https://github.com/AguzKind/ConteoCaracteres"} linkRepo={"https://github.com/AguzKind/ConteoCaracteres"} />
          <ProyectosModelo img={Fruta} titulo="Fruta ALURA (Landing Page)" linkRepo={"https://github.com/AguzKind/frutafruto"} linkDemo={"https://aguzkind.github.io/frutafruto/"} />
          <ProyectosModelo img={JuegoDados} titulo="Juego de dados" linkDemo={"https://github.com/AguzKind/JuegoDados"} linkRepo={"https://github.com/AguzKind/JuegoDados"} />
          <ProyectosModelo img={MiniAlura} titulo="Mini Alura (Landing Page)" linkRepo={"https://github.com/AguzKind/minialura"} linkDemo={"https://aguzkind.github.io/minialura/"} />
          <ProyectosModelo img={PacientesVet} titulo="Seguimiento Pacientes Veterinaria" linkDemo={"https://vet-react-demo.netlify.app/"} linkRepo={"https://github.com/AguzKind/citas_veterinaria"} />
          <ProyectosModelo img={AgendaIglesia} titulo="Agenda Parroquia CRUD" linkRepo={"https://github.com/AguzKind/ProgramaIglesia"} linkDemo={"https://github.com/AguzKind/ProgramaIglesia"} />
          <ProyectosModelo img={Tareas} titulo="Lista ToDo" linkRepo={"https://github.com/AguzKind/listadetareas"} linkDemo={"https://aguzkind.github.io/listadetareas/"} />
        </div>
      </div>
    </div>
  )
}


export default Proyectos