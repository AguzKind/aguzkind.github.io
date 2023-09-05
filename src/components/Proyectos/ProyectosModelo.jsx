import React from 'react'
import Aos from 'aos'
import { motion } from 'framer-motion'
import { TiExport } from 'react-icons/ti'
import { FaGithub } from 'react-icons/fa'

const ProyectosModelo = ({ img, titulo, linkRepo, linkDemo }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className='bg-[#077187] relative flex items-center justify-center h-auto w-full shadow-md shadow-orange-500 rounded-xl group transition ease-in-out duration-300'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-5 ' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-white text-2xl font-bold tracking-wider text-center'>
          {titulo}
        </h3>
        <div className='flex flex-row justify-center align-middle gap-8'>
        <a
          href={linkDemo}
          className='inline-block rounded-full shadow-md bg-black shadow-orange-500 m-2 p-4 cursor-pointer font-bold hover:scale-110 duration-300 hover:bg-orange-500 px-10'
          target='_blank'
        >
          <section className='text-white flex items-center gap-2'>
            Demo <TiExport />
          </section>
        </a>
        <a
          href={linkRepo}
          className=' inline-block rounded-full shadow-md bg-black shadow-orange-500 m-2 p-4 cursor-pointer font-bold hover:scale-110 duration-300 hover:bg-orange-500 px-10'
          target='_blank'
        >
          <section className='text-white flex items-center gap-2'>
            Repo <FaGithub />
          </section>
        </a>
        </div>
      </div>
    </div>
  )
}
export default ProyectosModelo