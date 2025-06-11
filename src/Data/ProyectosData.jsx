import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap, FaWindows, FaGithub } from "react-icons/fa"
import { SiMaterialformkdocs, SiDotnet, SiPostman, SiVitest, SiSwagger } from "react-icons/si"
import { MdAnimation } from "react-icons/md"
import { BiLogoVisualStudio } from "react-icons/bi"
import { BsTypeItalic } from "react-icons/bs"
import { IoLogoJavascript } from "react-icons/io5"
import { DiDotnet, DiVisualstudio } from "react-icons/di"
import { LuCircleFadingPlus } from "react-icons/lu"
import { TbBrandLinqpad } from "react-icons/tb"
import { SiAxios, SiTypescript } from "react-icons/si"

import PortfolioIMG from '../assets/proyects/Portfolio.webp'
import AgendaIglesiaIMG from '../assets/proyects/Agenda_iglesia.webp'
import ConversorCriptoIMG from '../assets/proyects/Conversor_criptomonedas.webp'
import CrudEmpleadosIMG from '../assets/proyects/CRUD_Empleados.webp'
import GeneralaIMG from '../assets/proyects/Generala.webp'
import GymTrackerIMG from '../assets/proyects/gym_tracker.webp'
import ToDoListIMG from '../assets/proyects/ToDo_list.webp'
import VeterinariaIMG from '../assets/proyects/Veterinaria.webp'
import ChallengeTDevsIMG from '../assets/proyects/Challenge_TDevs.webp'
import ChallengeNVXIMG from '../assets/proyects/Challenge_NVX.webp'
import WiiGameSToreIMG from '../assets/proyects/WiiGameStore.webp'








const ProyectosData = [
    {
        id: 1,
        img: PortfolioIMG,
        titulo: "Portfolio",
        descripcion: "Portfolio personal donde muestro mi trayectoria profesional, mi educación, proyectos, etc. Proyecto personal y autodidacta.",
        linkRepo: "https://github.com/AguzKind/aguzkind.github.io",
        linkDemo: "https://aguzkind.dev.ar",
        tags: [
            { name: "Vite", icon: <SiVitest />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "React", icon: <FaReact />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "TailwindCSS", icon: <RiTailwindCssFill />, colorClass: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-900" },
            { name: "Material Tailwind/React", icon: <SiMaterialformkdocs />, colorClass: "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-900" },
            { name: "Animation-on-Scroll", icon: <MdAnimation />, colorClass: "bg-gradient-to-r from-teal-100 to-teal-200 text-teal-900" },
            { name: "React-Type-Animation", icon: <BsTypeItalic />, colorClass: "bg-black text-white" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-white text-black" },
        ]
    },
    {
        id: 2,
        img: ChallengeTDevsIMG,
        titulo: "Challenge TDevs",
        descripcion: "Challenge técnico realizado para la empresa TogetherDevs. Proyecto completo (Frontend, creación de API REST, uso de ORM, base de datos) que simula un gestor de stock de productos. Posee JWT para autenticación de usuarios. Instrucciones de instalación/depuración dentro del repositorio.",
        linkRepo: "https://github.com/AguzKind/ChallengeTDevs",
        linkDemo: "",
        tags: [
            { name: "Vite", icon: <SiVitest />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "React", icon: <FaReact />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "TailwindCSS", icon: <RiTailwindCssFill />, colorClass: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-900" },
            { name: "C#", icon: <SiDotnet />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "ASP.NET", icon: <DiDotnet />, colorClass: "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-900" },
            { name: "Entity Framework", icon: <LuCircleFadingPlus />, colorClass: "bg-gradient-to-r from-green-100 to-green-200 text-green-900" },
            { name: "SQL Server", icon: <FaDatabase />, colorClass: "bg-gradient-to-r from-red-100 to-red-200 text-red-900" },
            { name: "Postman", icon: <SiPostman />, colorClass: "bg-gradient-to-r from-orange-200 to-orange-300 text-orange-900" },
            { name: "Swagger", icon: <SiSwagger />, colorClass: "bg-gradient-to-r from-green-100 to-green-200 text-green-900" },
            { name: "Visual Studio", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },


        ]
    },
    {
        id: 3,
        img: ChallengeNVXIMG,
        titulo: "Challenge NVX",
        descripcion: "Challenge técnico realizado para la empresa NVX. Proyecto API que permite el registro y obtención de usuarios. Contiene algoritmo de encriptación y Pruebas unitarias. Instrucciones de instalación/depuración dentro del repositorio.",
        linkRepo: "https://github.com/AguzKind/ChallengeGaia",
        linkDemo: "",
        tags: [
            { name: "C#", icon: <SiDotnet />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "ASP.NET", icon: <DiDotnet />, colorClass: "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-900" },
            { name: "LinQ", icon: <TbBrandLinqpad />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "Swagger", icon: <SiSwagger />, colorClass: "bg-gradient-to-r from-green-100 to-green-200 text-green-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },




        ]
    },
    {
        id: 4,
        img: CrudEmpleadosIMG,
        titulo: "CRUD Empleados",
        descripcion: "CRUD simple de empleados de una fábrica. Ejercicio hecho para reforzar teoría.",
        linkRepo: "https://github.com/AguzKind/CRUD-ASP.NET",
        linkDemo: "",
        tags: [
            { name: "ASP.NET", icon: <DiDotnet />, colorClass: "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-900" },
            { name: "Bootstrap", icon: <FaBootstrap />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-900" },
            { name: "Entity Framework", icon: <LuCircleFadingPlus />, colorClass: "bg-gradient-to-r from-green-100 to-green-200 text-green-900" },
            { name: "SQL Server", icon: <FaDatabase />, colorClass: "bg-gradient-to-r from-red-100 to-red-200 text-red-900" },
            { name: "Postman", icon: <SiPostman />, colorClass: "bg-gradient-to-r from-orange-200 to-orange-300 text-orange-900" },
            { name: "Visual Studio", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },


        ]
    },
    {
        id: 5,
        img: VeterinariaIMG,
        titulo: "Veterinaria WEB",
        descripcion: "Web de seguimiento de pacientes para una Veterinaria Fictícia. Primer proyecto realizado para el proceso de autodidacta en React.",
        linkRepo: "https://github.com/AguzKind/citas_veterinaria",
        linkDemo: "https://vet-react-demo.netlify.app/",
        tags: [
            { name: "Vite", icon: <SiVitest />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "React", icon: <FaReact />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "TailwindCSS", icon: <RiTailwindCssFill />, colorClass: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-900" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },

        ]
    },
    {
        id: 6,
        img: ConversorCriptoIMG,
        titulo: "Conversor Crypto",
        descripcion: "Web para realizar conversiones entre dinero y criptomonedas. Segundo proyecto realizado para el proceso de autodidacta en React y el primer proyecto que utiliza API Rest.",
        linkRepo: "https://github.com/AguzKind/Conversor-cripto",
        linkDemo: "https://conversor-cripto.netlify.app/",
        tags: [
            { name: "Vite", icon: <SiVitest />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "CSS3", icon: <FaCss3Alt />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "React", icon: <FaReact />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },

        ]
    },
    {
        id: 7,
        img: ToDoListIMG,
        titulo: "To Do List",
        descripcion: "Lista de tareas que utiliza localStorage para guardar las tareas ingresadas. Proyecto realizado por practicas.",
        linkRepo: "https://github.com/AguzKind/listadetareas",
        linkDemo: "https://aguzkind.github.io/listadetareas/",
        tags: [
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "CSS3", icon: <FaCss3Alt />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
        ]
    },
    {
        id: 8,
        img: AgendaIglesiaIMG,
        titulo: "Agenda Iglesia",
        descripcion: "Aplicación tipo agenda (ABM) para uso de la Parroquia de San Vicente. Se guardan los usos de los distintos establecimientos y se puede imprimir las agendas/solicitudes. Instrucciones de instalación/depuración dentro del repositorio.",
        linkRepo: "https://github.com/AguzKind/ProgramaIglesia",
        linkDemo: "",
        tags: [
            { name: "C#", icon: <SiDotnet />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "WinForms", icon: <FaWindows />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
            { name: "Visual Studio", icon: <DiVisualstudio />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900" },
            { name: "SQL Server (Access)", icon: <FaDatabase />, colorClass: "bg-gradient-to-r from-red-100 to-red-200 text-red-900" },
        ]
    },
    {
        id: 9,
        img: GeneralaIMG,
        titulo: "Juego de dados",
        descripcion: "Juego de dados para PC. El jugador con mas puntaje gana. Posibilidad de guardar la puntuación en una base de datos. Instrucciones de instalación/depuración dentro del repositorio.",
        linkRepo: "https://github.com/AguzKind/JuegoDados",
        linkDemo: "",
        tags: [
            { name: "C#", icon: <SiDotnet />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "WinForms", icon: <FaWindows />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
            { name: "Visual Studio", icon: <DiVisualstudio />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900" },
            { name: "SQL Server (Access)", icon: <FaDatabase />, colorClass: "bg-gradient-to-r from-red-100 to-red-200 text-red-900" },
        ]
    },
    {
        id: 10,
        img: GymTrackerIMG,
        titulo: "GYM Tracker",
        descripcion: "[WIP] Aplicación que permite el seguimiento y progreso personal del peso. Instrucciones de instalación/depuración dentro del repositorio.",
        linkRepo: "https://github.com/AguzKind/JuegoDados",
        linkDemo: "",
        tags: [
            { name: "C#", icon: <SiDotnet />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "WinForms", icon: <FaWindows />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
            { name: "Visual Studio", icon: <DiVisualstudio />, colorClass: "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900" },
            { name: "SQL Server", icon: <FaDatabase />, colorClass: "bg-gradient-to-r from-red-100 to-red-200 text-red-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
        ]
    },
    {
        id: 11,
        img: WiiGameSToreIMG,
        titulo: "Wii Games Store",
        descripcion: "[WIP] Página web que simula una tienda online de juegos físicos para la consola Nintendo Wii. Incluye carrito de compra y uso de peticiones HTTP.",
        linkRepo: "https://github.com/AguzKind",
        linkDemo: "",
        tags: [
            { name: "Vite", icon: <SiVitest />, colorClass: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900" },
            { name: "HTML", icon: <FaHtml5 />, colorClass: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900" },
            { name: "Javascript", icon: <IoLogoJavascript />, colorClass: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900" },
            { name: "React", icon: <FaReact />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "TailwindCSS", icon: <RiTailwindCssFill />, colorClass: "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-900" },
            { name: "Typescript", icon: <SiTypescript />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "Axios", icon: <SiAxios />, colorClass: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900" },
            { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, colorClass: "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900" },
            { name: "Github", icon: <FaGithub />, colorClass: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900" },
        ]
    },
];

export default ProyectosData