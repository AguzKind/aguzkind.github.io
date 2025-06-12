import Translations from '../data/Translations'
import AboutMe from '../assets/aboutmelg.png'

const SobreMi = ({ fondo, texto, language }) => {
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

                            <div className={`${texto} mb-8 font-semibold text-left`}>
                                {Translations[language].aboutme.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className={`${texto} mx-14 lg:mx-auto mb-8 font-semibold text-[16px] text-left w-[77%]`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <p className={`${texto} mx-14 lg:mx-auto mb-8 font-semibold text-[16px] text-left w-[77%]`}>
                                {Translations[language].lastaboutme}{' '}
                                <span className='italic text-green-500'>
                                    {Translations[language].lastaboutmeItalic}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi