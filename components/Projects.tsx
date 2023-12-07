"use client"
import React, { useEffect } from 'react'
import { projectsData } from '../lib/data'
import Project from './Project'
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../context/ActiveSection';
import { useSectionInView } from '../lib/hook';

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <div ref={ref} id='projects' className="bg-[#313741] max-h-full">
      <h1 className="text-5xl left- font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center py-20">SOME OF MY PROJECTS</h1>
    <div className="lg:flex lg:justify-center pb-32">
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project}/>
        </React.Fragment>
      ))}
    </div>
    </div>
  )
}
