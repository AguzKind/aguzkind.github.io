import { useState, useEffect } from 'react'
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { TiExport } from "react-icons/ti"
import { ProyectosDataEs, ProyectosDataEn } from '../../Data/ProyectosData.jsx';
import ProyectosModelo from './ProyectosModelo.jsx'
import Translations from '../../Data/Translations.js'

const Proyectos = ({ texto, fondo, titular, language }) => {

  const ProyectosData = language === 'es' ? ProyectosDataEs : ProyectosDataEn;

  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);


  return (
    <div className={`${fondo}`}>
      <div id="proyectos" className='md:max-w-[85%] md:ml-[7%] py-32'>
        <h1 className={`${titular} text-4xl font-bold text-center mb-7 uppercase`}>
          {Translations[language].proyectstitle}
        </h1>

        {/* Grid de proyectos */}
        <div className='grid grid-cols-1 mx-5 lg:grid-cols-2 gap-12 text-center'>
          {ProyectosData.map(project => (
            <ProyectosModelo
              key={project.id}
              img={project.img}
              titulo={project.titulo}
              onClick={() => openModal(project)}
              language={language}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={closeModal}
        ></div>
      )}
      {/* Modal (Dialog) */}
      <Dialog
        size="lg"
        open={isModalOpen}
        handler={closeModal}
        className={`${fondo} `}
      >
        <DialogHeader className={`flex justify-between items-center ${texto}`}>
          <h1 className='md:text-4xl uppercase mt-2'>{selectedProject?.titulo}</h1>
          <button onClick={closeModal}>
            <AiOutlineClose size={24} />
          </button>
        </DialogHeader>
        <DialogBody className='overflow-y-auto max-h-[80vh] px-4 py-6 sm:py-8 md:py-10'>
          <div className={`${texto} flex flex-col items-center `}>
            <div className="flex justify-center items-center mb-6 px-4">
              <div className="max-w-[800px] max-h-[70vh] w-full h-full">
                <img
                  src={selectedProject?.img}
                  alt={selectedProject?.titulo}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Descripción */}
            <p className="mb-6 text-xl text-center max-w-[800px]">
              {selectedProject?.descripcion}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 font-bold tecnologias justify-center">
              {selectedProject?.tags?.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full border-black border text-xl ${tag.colorClass}`}
                  >
                    {tag.icon} {tag.name}
                  </span>
                );
              })}
            </div>

            <div className={`${texto} flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4`}>
              <a
                href={selectedProject?.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors duration-300 w-[300px] sm:w-auto"
              >
                <FaGithub /> Repo
              </a>

              {selectedProject?.linkDemo ? (
                <a
                  href={selectedProject?.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-lg font-medium hover:bg-green-500 transition-colors duration-300 w-[300px] sm:w-auto"
                >
                  <TiExport /> Demo
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg text-lg font-medium cursor-not-allowed w-[300px] sm:w-auto"
                >
                  <TiExport /> Demo
                </button>
              )}
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );

}


export default Proyectos