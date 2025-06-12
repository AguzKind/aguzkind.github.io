import { useState, useEffect } from 'react'
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'
import { AiOutlineClose } from 'react-icons/ai'

import Navegacion from '../components/Navegacion'
import Intro from '../components/Intro'
import Skills from '../components/Skills/Skills'
import Experiencia from "../components/Experiencia/Experiencia"
import Educacion from "../components/Educacion/Educacion"
import Proyectos from "../components/Proyectos/Proyectos"
import SobreMi from '../components/SobreMi'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import EasterEgg from '../assets/sounds/easter-egg.mp3'

const Home = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [typedKeys, setTypedKeys] = useState('');

  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };


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

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newTypedKeys = (typedKeys + e.key).slice(-8)
      setTypedKeys(newTypedKeys)

      if (newTypedKeys.toLowerCase() === 'aguzkind') {
        const audio = new Audio(EasterEgg)
        audio.play()

        setTimeout(() => {
          setIsEasterEggOpen(true);
        }, 2000);

        setTypedKeys('')
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, [typedKeys])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isEasterEggOpen) {
        setIsEasterEggOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    };
  }, [isEasterEggOpen])


  return (
    <>
      {isEasterEggOpen && (
        <Dialog
          size="xl"
          open={isEasterEggOpen}
          handler={() => setIsEasterEggOpen(false)}
          className={`${fondo} z-50 animate-fadeInScale`}
        >
          <DialogHeader className={`relative flex items-center justify-center ${fondosBotones}`}>
            <h1 className={`md:text-4xl uppercase ${iconoBotones}`}>🎮 Galaga 🎮</h1>
            <button onClick={() => setIsEasterEggOpen(false)} className='absolute right-5 top-5'>
              <AiOutlineClose size={32} />
            </button>
          </DialogHeader>
          <DialogBody className="overflow-hidden max-h-[80vh] px-4 py-6">
            <iframe
              src="https://www.retrogames.cc/embed/20918-galaga-japan.html"
              width="100%"
              height="500px"
              allowFullScreen
              title="Galaga NES"
            ></iframe>
          </DialogBody>
        </Dialog>
      )}

      <Navegacion
        fondosBotones={fondosBotones}
        iconoBotones={iconoBotones}
        estilosTooltips={estiloTooltips}
        fondoHamburguer={fondoHamburguer}
        toggleNightMode={toggleNightMode}
        toggleLanguage={toggleLanguage}
        language={language}
        isNightMode={isNightMode}
      />
      <Intro
        fondo={fondo}
        texto={iconoBotones}
        fondoBoton={fondosBotones}
        fondosBotones={fondosBotones}
        estilosTooltips={estiloTooltips}
        iconoBotones={iconoBotones}
        language={language}
      />
      <Experiencia
        fondo={fondo}
        texto={iconoBotones}
        info={info}
        titular={titular}
        language={language}

      />
      <Educacion
        fondo={fondo}
        texto={iconoBotones}
        info={info}
        certificados={certificados}
        titular={titular}
        language={language}
      />
      <Skills
        fondo={fondo}
        texto={iconoBotones}
        titular={titular}
        language={language}
      />

      <Proyectos
        texto={iconoBotones}
        fondo={fondo}
        titular={titular}
        language={language}
      />

      <SobreMi
        fondo={fondo}
        texto={iconoBotones}
        language={language}
      />

      < Contacto
        fondo={fondo}
        texto={iconoBotones}
        fondoBoton={fondosBotones}
        titular={titular}
        language={language}
      />

      <Footer
        language={language}
      />
    </>
  )
}

export default Home