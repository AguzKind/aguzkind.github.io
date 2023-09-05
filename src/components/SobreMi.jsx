import React from 'react'
import AboutMe from '../assets/aboutme.jpg'

const SobreMi = ({ fondo, texto }) => {
    return (
        <div id="sobremi" className={`${fondo}`}>
            <div className='md:ml-20'>
            <div className='lg:flex flex-1 max-w-[350px] lg:max-w-[500px] mx-auto'
                data-aos="zoom-in-left">
                <img src={AboutMe} alt="foto de perfil" className='w-full h-auto lg:w-auto rounded-3xl  border-green-500 border-dashed border-2' />
            </div>
            <div className='container mx-auto mt-20 '>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-1'>
                    <div className='flex-1 text-center font-roboto'
                        data-aos="fade-down">
                        <h1 className={`${texto} text-[36px] md:text-[24px] font-bold leading-[1] mb-2 lg:text-[36]`}>
                            &#60; FULL<span className='text-green-500'>STACK </span>
                            &#47;&#62;
                        </h1>
                        <div className='mb-6 text-[55px] lg:text-[78px] font-roboto font-semibold leading-[1]'>
                            <span className={`${texto} mr-2`}>Un poco mas acerca de mi!</span>
                        </div>
                        <p className={`${texto} mb-8 mx-auto lg:mx-0 font-semibold text-[16px] text-center w-[95%]`}>
                        Mi nombre completo es Agustín Nicolás Macoggi. Vivo en el partido de San Vicente, provincia de Buenos Aires, Argentina. <br />
                            Soltero, con 24 años y tengo una gata, se llama Asa. <br />
                            Desde muy chico juego a videojuegos, y en mi adolescencia se despertó esa curiosidad de: '¿Cómo hacen para que esto funcione?'. <br />
                            A los 18 años, supe lo que quería hacer: Hacer que desde una idea esta se termine transformándose en una página web o en un programa. <br />
                            Me caracterizo por ser una persona organizada, dedicada, responsable, proactiva y autodidacta. Una persona que siempre busca cumplir con los objetivos de la mejor manera y adaptándose al entorno.   <br />
                            El objetivo que tengo a nivel personal es poder seguir creciendo y desarrollándome como desarrollador, que es lo que me apasiona hacer. Deseo seguir adquiriendo experiencia y el día de mañana ser yo quien transfiera esos conocimientos a otras personas de manera que también genere un crecimiento en ellas. <br />
                            Me gusta trabajar en ambientes donde se apueste por las personas, donde se busque desarrollarlas y brindarles herramientas para que puedan crecer tanto a nivel profesional como personal. Disfruto ayudar a los demás y trabajar en equipo.<br />
                            Para finalizar, te agradezco mucho el tiempo que te tomaste para pasar por acá. Si te gusta mi perfil o el mismo se adecua a lo que busca tu empresa, no dudes en enviarme un correo o contactarme por LinkedIn. Te mando un saludo y <span className='italic text-green-500'>to the infinity, and beyond.</span>
                        </p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default SobreMi