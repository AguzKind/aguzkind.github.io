import React from 'react'
import SkillsModelo from './SkillsModelo'
import AngularImg from '../../assets/skills/angular.svg'
import ReactImg from '../../assets/skills/react.svg'
import TypescriptImg from '../../assets/skills/typescript.svg'
import TailwindImg from '../../assets/skills/tailwind.svg'
import BootstrapImg from '../../assets/skills/bootstrap.svg'
import DotNetImg from '../../assets/skills/Dot-net.svg'
import JavaImg from '../../assets/skills/java.svg'
import SqlImg from '../../assets/skills/sql.svg'
import TrelloImg from '../../assets/skills/trello.svg'
import JiraImg from '../../assets/skills/jira.svg'
import GitHubImg from '../../assets/skills/github.svg'
import PostmanImg from '../../assets/skills/postman.svg'
import Aos from 'aos'

const Skills = ({ fondo }) => {
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
      sombra: "shadow-purple-500",
      link: "https://dotnet.microsoft.com/en-us/",
    },
    {
      nombre: "Java",
      img: JavaImg,
      sombra: "shadow-orange-500",
      link: "https://www.java.com/es/",
    },
    {
      nombre: "SQL Server",
      img: SqlImg,
      sombra: "shadow-yellow-500",
      link: "https://www.microsoft.com/en-us/sql-server",
    },
  ]
  const herramientas = [
    {
      nombre: "Trello",
      img: TrelloImg,
      sombra: "shadow-blue-500",
      link: "https://trello.com/",
    },
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
  ]
  Aos.init();
  return (
    <div id="skills" className={`${fondo}`}>
      <div className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className='text-4xl font-bold text-center text-green-500 mb-7'
          data-aos="fade-up">
          Skills
        </h1>
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 mx-auto gap-y-20 w-[80%] md:w-[90%]'>
        <div className='mx-auto'>
          <h1 className='text-2xl font-bold text-center text-green-500 mb-3'>
            Front-End
          </h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-9 mx-auto border-green-500 border-dashed border-2 rounded-xl py-7 px-4'
          >
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
        </div>
        <div className='mx-auto'>
          <h1 className='text-2xl font-bold text-center text-green-500 mb-3'>
            Back-End
          </h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-9 mx-auto border-green-500 border-dashed border-2 rounded-xl py-7 px-4'
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
        </div>
        <div className='mx-auto'>
          <h1 className='text-2xl font-bold text-center text-green-500 mb-3'>
            Herramientas
          </h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-9 mx-auto border-green-500 border-dashed border-2 rounded-xl py-7 px-4'
            data-aos="flip-up"
            data-aos-duration="6000">
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
      </div>

    </div>
  )
}

export default Skills