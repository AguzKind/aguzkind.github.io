import React from 'react'

const SkillsModelo = ({nombre, img, sombra, link}) => {
  return (
     <a className={`${sombra} shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 w-[100px] p-1 border-black border-solid border-2 hover:scale-110  transition ease-in duration-200 hover:cursor-pointer`}
     href={link}
     target='_blank'>
        <img src={img} alt="skill" className='h-[50px] m-1'/>
        <span className='font-roboto font-bold'>{nombre}</span>
     </a>
  )
}

export default SkillsModelo