import React from 'react'
import FotoPerfil from "../assets/profile.png"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload } from 'react-icons/fi'
import AOS from 'aos'

const Intro = ({ fondo, texto, fondoBoton }) => {
    AOS.init();
    return (
        <section className={`${fondo} min-h-[85vh] lg:min-h-[78vh] flex items-center lg:pl-[7rem]`}
            id="inicio">
            <div className='container mx-auto mt-20 '>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-1'>
                    {/*TEXTO*/}
                    <div className='flex-1 text-center font-roboto lg:text-left'
                        data-aos="fade-down">
                        <h1 className={`${texto} text-[36px] md:text-[24px] font-bold leading-[1] mb-2 lg:text-[36]`}>
                            &#60; AGUSTIN <span className='text-green-500'>MACOGGI </span>
                            &#47;&#62;
                        </h1>
                        <div className='mb-6 text-[55px] lg:text-[78px] font-roboto font-semibold leading-[1]'>
                            <span className={`${texto} mr-2`}>Desarrollador <br /></span>
                            <TypeAnimation
                                sequence={[
                                    "Fullstack.",
                                    2000,
                                    "Front-end.",
                                    2000,
                                    "Back-end.",
                                    2000
                                ]}
                                speed={200}
                                className='text-green-500'
                                wrapper='span'
                                repeat={Infinity}
                            />

                        </div>
                        <p className={`${texto} mb-8 w-[90%] mx-auto lg:mx-0 font-semibold text-[17px] md:w-[80%] sm:w-[70%] `}>
                            Programo hace más de 2 años. Tengo conocimiento en los lenguajes de programación y frameworks más utilizados del mercado. Con compromiso, responsabilidad y flexibilidad, puedo llevar tu proyecto hacia adelante o unirme a tu grupo de trabajo fácilmente. ¡Conozcámonos y afrontemos un nuevo desafío juntos!
                        </p>
                        <div className=' flex lg:gap-3 sm:gap-1'>
                            <div className='flex max-w-2 gap-x-1 items-center mb-12 mx-auto lg:mx-0 justify-center'>
                                    <a
                                        href="https://drive.google.com/file/d/1EBIN8U4RgLWJcVb4wMSbhrabspabGyhQ/view"
                                        className={`${fondoBoton} inline-block rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer font-bold hover:scale-110 duration-300 hover:bg-green-500`}
                                        target='_blank'
                                    >
                                        <section className={`${texto} flex items-center gap-2`}>
                                            Currículum <FiDownload />
                                        </section>
                                    </a>
                                <a
                                    href="https://www.linkedin.com/in/agustinmacoggi/"
                                    className={`${fondoBoton} inline-block rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer font-bold hover:scale-110 duration-300 hover:bg-green-500`}
                                    target='_blank'
                                >
                                    <section className={`${texto} flex items-center gap-2`}>
                                        LinkedIn <FaLinkedin />
                                    </section>
                                </a>
                                <a
                                    href="https://github.com/AguzKind"
                                    className={`${fondoBoton} inline-block rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer font-bold hover:scale-110 duration-300 hover:bg-green-500 `}
                                    target='_blank'
                                >
                                    <section className={`${texto} flex items-center gap-2`}>
                                        GitHub <FaGithub />
                                    </section>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*IMAGEN*/}
                    <div className='lg:flex flex-1 max-w-[400px] lg:max-w-[500px] mx-auto'
                        data-aos="zoom-in-left">
                        <img src={FotoPerfil} alt="foto de perfil" className='w-full h-auto lg:w-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro