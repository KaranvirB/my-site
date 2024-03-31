import { StaticImageData } from "next/image"
import Image from "next/image"
import dino from "../../../public/img/24930593642580a16c91bc6bea418a4f.png"

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

type Project = {
    title: string,
    info: string,
    src: string,
    alt: string,
    id: number 
}

const projects: Project[] = [
    {
        title: "Smart Blinds",
        info: "Blinds which use sensors to learn the users' habits, and create it's own operating schedule with machine learning. Accompanied by a mobile app packed with functions to operate the blinds remotely.",
        src: "https://www.youtube.com/embed/485xVgggrxg?si=-h8aO34rx1_Oj0tk",
        alt: "Promotional video for smart blinds",
        id: 0
    },
    {
        title: "Mineformers",
        info: "A Minecraft mod which allows players to create powerful tools using materials inspired by the Transformers franchise.",
        src: "https://www.youtube.com/embed/485xVgggrxg?si=-h8aO34rx1_Oj0tk",
        alt: "Demonstration of mod items",
        id: 1
    },
    {
        title: "Tournamentor (WIP)",
        info: "A web application which will allow users to create custom tournament brackets by simply entering the number of contestants and names.",
        src: "https://www.youtube.com/embed/485xVgggrxg?si=-h8aO34rx1_Oj0tk",
        alt: "Demonstration of current website state",
        id: 2
    },
    {
        title: "Self-driving Car",
        info: "A project made using JavaScript where a virtual car learns to navigate around a 2-D track using artificial intelligence and neural networks.",
        src: "https://www.youtube.com/embed/485xVgggrxg?si=-h8aO34rx1_Oj0tk",
        alt: "Demonstration of self-driving car",
        id: 3
    },
]

export const Projects = ({project}: {project: Project}) => {
    return(
        <div className="w-full border-4 border-glacier-500 rounded-[5%] text-glacier-300 m-[5vh] overflow-hidden hover:bg-glacier-500 duration-300 hover:text-white">
            <div>
                <h1 className="px-[5%] pt-[5%] text-3xl">{project.title}</h1>
                <p className="px-[5%] pt-[5%] text-xl">{project.info}</p>   
            </div>
            <iframe 
                className="p-[5%] mx-auto size-[70%]" 
                src={project.src} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export const ProjectScroll = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end']
    })

    const x = useTransform(scrollYProgress, [0, 0.6, 0.9], ["280%", "-50%", "-53%"])

    return(
        <div className="flex-col md:h-[calc(100vh-15rem)] sm:h-[calc(100vh-8.5rem)] bg-black w-full font-extralight sticky md:top-[15rem] sm:top-[8.5rem] z-10 border-transparent rounded-t-[3rem] overflow-hidden">
            <h1 className="md:h-[7rem] sm:h-[4.5rem] md:text-7xl sm:text-3xl w-full font-serif text-glacier-300 tracking-wider hover:bg-glacier-300 duration-300 hover:text-black p-5 pl-16 hover:border-transparent rounded-t-[3rem]">My work</h1>
            <motion.div style={{ x }} className="flex flex-row h-full w-[200%] pb-[10vh]">
                {projects.map((project) => {
                    return <Projects project={project} key={project.id}/>
                })}
            </motion.div>
        </div>
    )
}