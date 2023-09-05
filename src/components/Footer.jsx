import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-black text-center p-[40px]'>
        <div className="flex flex-row flex-wrap items-center gap-x-12 justify-center">
        <p className='text-white font-roboto font-semibold'>Hecho con ❤️ por:</p>
        <img src={Logo} alt="logo" className='w-[300px]'/>
        </div>
    </footer>
  )
}

export default Footer