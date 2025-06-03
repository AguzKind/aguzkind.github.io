import React from 'react'
import AboutMe from '../assets/aboutmelg.png'

const SobreMi = ({ fondo, texto }) => {
    return (
        <div id="sobremi" className={`${fondo}`}>
            <div className='md:ml-20'>
                <div className='lg:flex flex-1 max-w-[678px] lg:max-w-[1080px] mx-auto'
                    data-aos="zoom-in-left">
                    <img src={AboutMe} alt="foto de perfil" className='w-full h-auto' />
                </div>
                <div className='container mx-auto mt-10 '>
                    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-1'>
                        <div className='flex-1 text-center font-roboto'
                            data-aos="fade-down">

                            <p className={`${texto} mx-14 lg:mx-auto mb-8 font-semibold text-[16px] text-left w-[80%]`}>
                                Mi nombre completo es Agustín Nicolás Macoggi. Vivo en el partido de San Vicente, provincia de Buenos Aires, Argentina. <br />
                                Soltero, con 26 años y tengo una gata, se llama Asa. <br />
                                <br />
                                Desde muy chico juego a videojuegos, y en mi adolescencia se despertó esa curiosidad de: '¿Cómo hacen para que esto funcione?'. <br />
                                A los 18 años, supe lo que quería hacer: Hacer que desde una idea esta se termine transformándose en una página web o en un programa.
                                <br />
                                <br />
                                Me considero una persona curiosa, dedicada, responsable, adaptable y autodidacta, siempre comprometida en alcanzar los objetivos de manera eficaz y adaptándome de manera dinámica al entorno. Fuera del ámbito profesional, me gusta desarrollar proyectos independientes que me permitan adquirir nuevas habilidades.   <br />
                                <br />
                                Aspiro a trabajar en lugares donde valoren a las personas, donde me den nuevas herramientas que fortalezcan el crecimiento profesional y personal. Me interesa colaborar con otros y participar en equipos de trabajo donde abunde un ambiente agradable y productivo.<br />
                                <br />
                                Para finalizar, te agradezco mucho el tiempo que te tomaste para pasar por acá. Si te gusta mi perfil y el mismo se adecua a lo que buscas vos o tu empresa, no dudes en enviarme un correo, contactarme por LinkedIn o llenar el formulario de abajo. Te mando un saludo y <span className='italic text-green-500'>to the infinity, and beyond.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi