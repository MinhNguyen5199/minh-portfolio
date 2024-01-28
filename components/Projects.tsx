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
    <div id='projects' className="bg-[#313741] max-h-full overflow-hidden">
      <h1 ref={ref} className="text-5xl left- font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center py-20">SOME OF MY PROJECTS</h1>
    <div className="xl:grid xl:grid-cols-3 xl:justify-items-center pb-32">
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project}/>
        </React.Fragment>
      ))}
    </div>
    </div>
  )
}
