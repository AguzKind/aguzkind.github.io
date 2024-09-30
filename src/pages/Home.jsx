import React, { useState } from 'react'
import Navegacion from '../components/Navegacion'
import Intro from '../components/Intro'
import Skills from '../components/Skills/Skills'
import Experiencia from "../components/Experiencia/Experiencia"
import Educacion from "../components/Educacion/Educacion"
import Proyectos from "../components/Proyectos/Proyectos"
import SobreMi from '../components/SobreMi'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const Home = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(prevMode => !prevMode);
  };
  const fondo = isNightMode ? "bg-gray-200" : "bg-gray-900"
  const fondosBotones = isNightMode ? "bg-white" : " bg-black"
  const iconoBotones = isNightMode ? "text-black" : " text-white"
  const titular = isNightMode ? "text-green-500" : " text-white"
  const estiloTooltips = isNightMode ? "" : "text-black bg-white"
  const fondoHamburguer = isNightMode ? "bg-white/90" : "bg-black/90"
  const info = isNightMode ? "text-teal-600" : "text-orange-400"
  const certificados = isNightMode ? "text-gray-700" : "text-white"
  return (
    <>
      <Navegacion
        fondosBotones={fondosBotones}
        iconoBotones={iconoBotones}
        estilosTooltips={estiloTooltips}
        fondoHamburguer={fondoHamburguer}
        toggleNightMode={toggleNightMode} />
      <Intro
        fondo={fondo}
        texto={iconoBotones}
        fondoBoton={fondosBotones}
      />
      <Experiencia
        fondo={fondo}
        texto={iconoBotones}
        info={info}
        titular={titular}
      />
      <Educacion
        fondo={fondo}
        texto={iconoBotones}
        info={info}
        certificados={certificados}
        titular={titular}
      />
      <Skills
        fondo={fondo}
        texto={iconoBotones}
        titular={titular}
      />

      <Proyectos
        texto={iconoBotones}
        fondo={fondo}
        titular={titular}
      />

      <SobreMi
        fondo={fondo}
        texto={iconoBotones}
      />

      < Contacto
        fondo={fondo}
        texto={iconoBotones}
        fondoBoton={fondosBotones}
        titular={titular}
      />

      <Footer
      />
    </>
  )
}

export default Home