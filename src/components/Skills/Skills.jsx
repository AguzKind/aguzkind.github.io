import React from 'react'
import SkillsModelo from './SkillsModelo'
import AngularImg from '../../assets/skills/angular.svg'
import ReactImg from '../../assets/skills/react.svg'
import TypescriptImg from '../../assets/skills/typescript.svg'
import TailwindImg from '../../assets/skills/tailwind.svg'
import BootstrapImg from '../../assets/skills/bootstrap.svg'
import DotNetImg from '../../assets/skills/Dot-net.svg'
import AWSImg from '../../assets/skills/aws.webp'
import EFCoreImg from '../../assets/skills/efcore.png'
import SqlImg from '../../assets/skills/sql.svg'
import JiraImg from '../../assets/skills/jira.svg'
import GitHubImg from '../../assets/skills/github.svg'
import PostmanImg from '../../assets/skills/postman.svg'
import CodeImg from '../../assets/skills/visualcode.png'
import StudioImg from '../../assets/skills/visual2022.png'

import Aos from 'aos'

const Skills = ({ fondo, titular }) => {
  const front = [
    {
      nombre: "React",
      img: ReactImg,
      sombra: "shadow-[#149eca]",
      link: "https://react.dev/",
    },
    {
      nombre: "Angular",
      img: AngularImg,
      sombra: "shadow-red-500",
      link: "https://angular.io/"
    },
    {
      nombre: "Typescript",
      img: TypescriptImg,
      sombra: "shadow-blue-700",
      link: "https://www.typescriptlang.org/",
    },
    {
      nombre: "TailwindCss",
      img: TailwindImg,
      sombra: "shadow-[#2dd4bf]",
      link: "https://tailwindcss.com/",
    },
    {
      nombre: "Bootstrap",
      img: BootstrapImg,
      sombra: "shadow-[#6b21a8]",
      link: "https://getbootstrap.com/",
    },
  ]
  const back = [
    {
      nombre: ".NET",
      img: DotNetImg,
      sombra: "shadow-purple-700",
      link: "https://dotnet.microsoft.com/en-us/",
    },
    {
      nombre: "EF Core",
      img: EFCoreImg,
      sombra: "shadow-pink-500",
      link: "https://learn.microsoft.com/en-us/ef/",
    },
    {
      nombre: "MS SQL Server",
      img: SqlImg,
      sombra: "shadow-yellow-500",
      link: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      nombre: "AWS",
      img: AWSImg,
      sombra: "shadow-orange-500",
      link: "https://aws.amazon.com/es/",
    },
  ]
  const herramientas = [
    {
      nombre: "Jira",
      img: JiraImg,
      sombra: "shadow-indigo-500",
      link: "https://www.atlassian.com/software/jira"
    },
    {
      nombre: "Github",
      img: GitHubImg,
      sombra: "shadow-gray-500",
      link: "https://github.com/",
    },
    {
      nombre: "Postman",
      img: PostmanImg,
      sombra: "shadow-orange-500",
      link: "https://www.postman.com/",
    },
    {
      nombre: "Visual Studio Code",
      img: CodeImg,
      sombra: "shadow-blue-500",
      link: "https://code.visualstudio.com/",
    },
    {
      nombre: "Visual Studio 2022",
      img: StudioImg,
      sombra: "shadow-purple-500",
      link: "https://visualstudio.microsoft.com/es/vs/",
    },
  ]
  Aos.init();
  return (
    <div id="skills" className={`${fondo}`}>
      <div className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className={`${titular} text-4xl font-bold text-center mb-7`}>
          TECNOLOGÍAS
        </h1>
      </div>
      <div className='lg:mx-[150px] ml-[15%] grid grid-rows-1 gap-8 lg:flex' data-aos="flip-up" data-aos-duration="6000">
        {front.map((item, idx) => (
          <SkillsModelo key={idx}
            nombre={item.nombre}
            img={item.img}
            sombra={item.sombra}
            link={item.link}
          />
        )
        )}
      </div>
      <div className='lg:mx-[150px] ml-[15%] grid grid-rows-1 gap-8 lg:flex mt-8'
        data-aos="flip-up"
        data-aos-duration="6000">
        {back.map((item, idx) => (
          <SkillsModelo key={idx}
            nombre={item.nombre}
            img={item.img}
            sombra={item.sombra}
            link={item.link}
          />
        )
        )}
      </div>
      <div className='lg:mx-[150px] ml-[15%] grid grid-rows-1 gap-8 lg:flex mt-8' data-aos="flip-up" data-aos-duration="6000">
        {herramientas.map((item, idx) => (
          <SkillsModelo key={idx}
            nombre={item.nombre}
            img={item.img}
            sombra={item.sombra}
            link={item.link}
          />
        )
        )}
      </div>
    </div>
  )
}

export default Skills