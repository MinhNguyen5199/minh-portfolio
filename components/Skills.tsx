"use client"
import React from 'react'
import { skillsData } from '../lib/data'
import Image from "next/image";
import { useSectionInView } from '../lib/hook';
import { motion } from 'framer-motion';

const motionLoading ={
  initial: {opacity: 0, y: 100},
  animate: (index: number)=>( {opacity: 1, y: 0, transition:{
    delay: 0.05 * index,
  }}),
};

export default function Skills() {
  const {ref, controls} = useSectionInView("Skills", 0.25);
  const convertedContent = JSON.parse(JSON.stringify(skillsData));
  return (
    
    <div ref={ref}  className="bg-[#22252c] h-full xl:pl-[10rem] ">
      <p className="text-5xl left- font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center pt-10 pb-5">SKILLS</p>
      {convertedContent.map((skill:any) => (
        <div className="p-5" key={skill.type}>
          <label className="font-levi bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-black max-sm:text-[2rem] max-md:text-[2rem] text-[4rem]">{skill.type}</label><br></br>
          {skill.list.map((item:any, index:number) => (
              <motion.div key={index}  id="skills" initial="initial"
              whileInView="animate"
              viewport={{once: true}}
              custom={index}
              variants={motionLoading}className="text-center inline-block p-3">
              <Image src={item.icon} width="60" height="100" alt={item.name} className="bg-white rounded-lg m-auto" 
              />
            <label className="text-white text-lg font-mono "
            >{item.name}</label>
            </motion.div>
          ))}
          </div>
        ))}
    </div>
  )
}
