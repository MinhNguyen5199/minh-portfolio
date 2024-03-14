"use client"
import React, { useEffect } from 'react'
import Socital from './Socital'
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../context/ActiveSection';
import { useSectionInView } from '../lib/hook';


export default function Intro() {
  const {ref} = useSectionInView("About", 0.75);

  return (
    <div ref={ref} id='home' className=" relative bg-hero-pattern min-h-screen bg-center bg-no-repeat bg-cover ">
      <div className="absolute text-center top-[55%] translate-x-0 -translate-y-1/2 lg:left-[10%] xl:left-[15%]">
      <p className="font-levi text-black font-black max-sm:text-[4rem] max-md:text-[4rem] text-[8rem]">Minh<br/>Nguyen</p>
      <p className="font-Pacifico-Regular font-light text-[2rem] md:text-[3rem] ">Full-stack Developer</p>
      </div>
      <Socital/>
    </div>
    
    
  )
}
