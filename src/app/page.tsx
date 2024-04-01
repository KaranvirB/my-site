'use client'
import { useTransform, useScroll, motion, scroll, useSpring } from 'framer-motion'
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import { Albert_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import dino from '../../public/img/24930593642580a16c91bc6bea418a4f.png'
import linkedin from '../../public/img/circle-linkedin-512.webp'
import github from '../../public/img/25231.png'
import { ProjectScroll } from './components/projects';

const albert = Albert_Sans({subsets: ["latin"]})

export default function Home() {
  
  const name = useRef(null)
  const end = useRef(null)

  const { scrollYProgress: target1 } = useScroll({
    target: name,
    offset: ['start end', 'start start']
  })

  const { scrollYProgress: target2 } = useScroll({
    target: end,
    offset: ['start end', 'start start']
  })

  const scale1 = useTransform(target1, [0, 1], [1.8, 0.5])
  const scale2 = useTransform(target2, [0, 1], [0.5, 1.3])

  useEffect( () => {
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect( () => {
    const lenis = new Lenis({
      duration: 1.3
    })
    
    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })

  return (
      <main className="items-center bg-black mx-[5vh] mt-[40vh] space-y-[80vh]">

        <motion.div initial="hidden" animate="visible" style={{ scale: scale1 }} ref={name} className="sticky top-0 will-change-auto" variants={{
          hidden: {
            opacity: 0,
            scale: 0.5,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.5,
              duration: 0.5
            }
          },
        }}>
          <div className="flex items-center justify-center font-thin text-glacier-500 tracking-widest md:text-9xl sm:text-6xl">Karanvir Bhogal</div>
        </motion.div>

        <div className="flex-col md:h-[calc(100vh-8rem)] sm:h-[calc(100vh-4rem)] bg-glacier-500 w-full font-extralight sticky md:top-[8rem] sm:top-[4rem] z-5 border-transparent rounded-t-[3rem]">
          <h1 className="md:h-[7rem] sm:h-[4.5rem] md:text-7xl sm:text-3xl w-full font-serif text-glacier-200 tracking-wider hover:bg-glacier-300 duration-300 hover:text-black p-5 pl-16 hover:border-transparent rounded-t-[3rem]">About me</h1>
          <motion.div initial={{ opacity: 0,  }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 1 }} className="flex md:flex-row sm:flex-col w-full p-16 md:space-x-[10%]">
            <p className="md:w-[50%] md:text-3xl sm:text-xl tracking-wide md:leading-loose text-glacier-200 my-auto">
              Hello! My name is Karanvir and I am a recent Software Engineering graduate from Ontario Tech University. 
              I mainly specialize in object oriented programming and web programming, but I have also worked on machine learning, mobile app development, and databases.
              Outside of programming, some of my interests include Dinosaurs, Transformers, Music, and Art.
            </p>
            <div className="flex md:w-[40%] md:h-[40%] my-auto mx-auto aspect-square">
              <Image src={dino} alt="Dinosaur Logo" className="my-auto"></Image>
            </div>
          </motion.div>
        </div>

        <ProjectScroll/>

        <div className="flex-col md:h-[calc(100vh-22rem)] sm:h-[calc(100vh-13rem)] bg-glacier-500 w-full font-extralight sticky md:top-[22rem] sm:top-[13rem] z-20 border-transparent rounded-t-[3rem]">
          <h1 className="md:h-[7rem] sm:h-[4.5rem] md:text-7xl sm:text-3xl w-full font-serif text-glacier-200 tracking-wider hover:bg-glacier-300 duration-300 hover:text-black p-5 pl-16 hover:border-transparent rounded-t-[3rem]">Links</h1>
          <div className="flex justify-center w-full p-[5%] space-x-[20%]">
            <Link href='https://www.linkedin.com/in/karanvir-bhogal' target='_blank' className="size-[20%]"><Image src={linkedin} alt="LinkedIn logo"></Image></Link>
            <Link href='https://github.com/KaranvirB' target='_blank' className="size-[20%]"><Image src={github} alt="Github logo"></Image></Link>
          </div>
        </div>

        <div className="flex items-center justify-center bg-black sticky w-full md:h-[calc(100vh-29rem)] sm:h-[calc(100vh-17.5rem)] md:top-[29rem] sm:top-[17.5rem] z-20 border-transparent rounded-t-[3rem]">
          <motion.div style={{scale: scale2}} ref={end} className="flex sm:text-center bg-black font-thin text-glacier-500 tracking-widest md:text-9xl sm:text-6xl">
            Thank you for visiting!
          </motion.div>
        </div>

      </main>
  );
}
