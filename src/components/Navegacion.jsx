import { useState } from 'react'
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'
import { BsPersonSquare, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { ImMenu } from 'react-icons/im'
import { MdWorkHistory, MdContacts } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import { Tooltip } from "@material-tailwind/react";
import AOS from 'aos'
import { motion } from 'framer-motion';
import Translations from '../data/Translations'

const Navegacion = ({ fondosBotones, iconoBotones, estilosTooltips, fondoHamburguer, toggleNightMode, toggleLanguage, language, isNightMode }) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        AOS.init()
    }

    return (
        <div>
            <ImMenu onClick={handleNav} className={`${iconoBotones} fixed top-4 right-6 z-[99] md:hidden bg-green-500 p-2 rounded-md hover:scale-110 cursor-pointer ease-in duration-200`} size={50} />
            {
                nav ? ( /*Menu Celular*/
                    <motion.div id="hamburguer"
                        className={`${fondoHamburguer} text-center fixed top-0 left-0 w-full min-h-screen overflow-y-auto flex flex-col justify-center items-center z-20 font-roboto ease-in duration-300 px-4 pt-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))]`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}>
                        <a onClick={handleNav} href="#inicio" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <AiFillHome size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].introtitle}</span>
                        </a>
                        <a onClick={handleNav} href="#experiencia" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <MdWorkHistory size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].experienciatitle}</span>
                        </a>
                        <a onClick={handleNav} href="#educacion" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <FaUserGraduate size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].educationtitle}</span>
                        </a>
                        <a onClick={handleNav} href="#skills" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <AiFillCode size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].skillstitle}</span>
                        </a>
                        <a onClick={handleNav} href="#proyectos" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <RiComputerFill size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].proyectstitle}</span>
                        </a>
                        <a onClick={handleNav} href="#sobremi" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <BsPersonSquare size={20}
                                className={iconoBotones} />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].aboutmetitle}</span>
                        </a>
                        <a onClick={handleNav} href="#contacto" className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold
                        font-roboto`}>
                            <MdContacts size={20}
                                className={iconoBotones}
                            />
                            <span className={`${iconoBotones} pl-4`}>{Translations[language].contactmetitle}</span>
                        </a>
                        <a onClick={() => {
                            toggleNightMode()
                            handleNav()
                        }} className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold font-roboto`}>

                            {
                                isNightMode
                                    ? <BsMoonFill size={20} className={iconoBotones} />
                                    : <BsSunFill size={20} className={iconoBotones} />
                            }

                            <span className={`${iconoBotones} pl-4`}>{Translations[language].darkmodetitle}</span>
                        </a>

                        <a onClick={() => {
                            toggleLanguage()
                            handleNav()
                        }} className={`${fondosBotones} w-[75%] flex justify-center items-center rounded-full shadow-md shadow-green-500 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-500 font-bold font-roboto`}>
                            <span className={`${iconoBotones} text-2xl`}>
                                {language === 'es' ? 'EN' : 'ES'}
                            </span>
                            <span className={`${iconoBotones} pl-4`}>
                                {language === 'es' ? 'Change to English' : 'Cambiar a Español'}
                            </span>
                        </a>
                    </motion.div>
                ) : (
                    ' '
                )}
            <div className="md:block hidden fixed md:top-[8%] z-10">
                <div className='flex flex-col'>
                    {/* Menu Desktop */}
                    <Tooltip content={Translations[language].introtitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#inicio" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <AiFillHome size={20}
                                className={iconoBotones} />
                        </a>
                    </Tooltip>
                    <Tooltip content={Translations[language].experienciatitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#experiencia" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <MdWorkHistory size={20}
                                className={iconoBotones} />
                        </a>
                    </ Tooltip>
                    <Tooltip content={Translations[language].educationtitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#educacion" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <FaUserGraduate size={20}
                                className={iconoBotones} />
                        </a>
                    </ Tooltip>
                    <Tooltip content={Translations[language].skillstitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#skills" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <AiFillCode size={20}
                                className={iconoBotones} />
                        </a>
                    </ Tooltip>

                    <Tooltip content={Translations[language].proyectstitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}
                    >
                        <a href="#proyectos" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <RiComputerFill size={20}
                                className={iconoBotones} />
                        </a>
                    </Tooltip>
                    <Tooltip content={Translations[language].aboutmetitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#sobremi" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <BsPersonSquare size={20}
                                className={iconoBotones} />
                        </a>
                    </Tooltip>
                    <Tooltip content={Translations[language].contactmetitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a href="#contacto" className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}>
                            <MdContacts size={20}
                                className={iconoBotones} />
                        </a>
                    </Tooltip>
                    <Tooltip content={Translations[language].darkmodetitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-4 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500`}
                            onClick={toggleNightMode}>
                            {
                                isNightMode
                                    ? <BsMoonFill size={20} className={iconoBotones} />
                                    : <BsSunFill size={20} className={iconoBotones} />
                            }
                        </a>
                    </Tooltip>
                    <Tooltip content={Translations[language].changelanguagetitle} placement="right" animate={{
                        mount: { scale: 1, x: 0 },
                        unmount: { scale: 0, x: -25 },
                    }}
                        className={`${estilosTooltips} font-bold font-roboto`}>
                        <a className={`${fondosBotones} rounded-full shadow-md shadow-green-500 m-2 p-2 cursor-pointer hover:scale-110 duration-300 hover:bg-green-500 ${iconoBotones} font-bold text-center`}
                            onClick={toggleLanguage}>
                            {language === 'es' ? 'EN' : 'ES'}
                        </a>
                    </Tooltip>
                </div>
            </div>
        </div >
    )
}
export default Navegacion