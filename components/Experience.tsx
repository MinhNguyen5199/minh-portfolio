"use client"
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import { experiencesData } from '../lib/data';
import { motion } from 'framer-motion';
import { useSectionInView } from "../lib/hook";

interface Item {
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly icon: React.CElement<any, any>;
  readonly date: string;
}

function ExperienceItem({ item, index }: { item: Item, index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isEven = index % 2 === 0;
  const direction = isEven ? -100 : 100;

  return (
    <motion.div 
      ref={ref} 
      initial={{ x: direction, opacity: 0, scale: 1.5 }} 
      animate={{ x: inView ? 0 : direction, opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }} 
      transition={{ duration: 2, type: 'spring', bounce: 0.5 }} 
      key={index}
    >
      <VerticalTimelineElement
        visible={true}
        position={isEven ? 'left' : 'right'}
        contentStyle={{
          color: '#fff',
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 0 15px #d4223f',
          textAlign: 'left',
          padding: '1.3rem 2rem',
          borderRadius: '10px',
          background: '#b58851',
        }}
        contentArrowStyle={{
          borderRight: isEven ? (inView ? '15px solid #FF9B42' : 'none') : (inView ? '15px solid #FF9B42' : 'none'),
          borderLeft: isEven ? (inView ? 'none' : '15px solid #FF9B42') : 'none',
        }}
        date={item.date}
        iconStyle={{ background: '#313741', color: '#00d7bb', boxShadow: '0 0 20px #0FA3B1', scale: 1.2 }}
        icon={item.icon}
      >
        <div className='py-5'>
        <h1 className=" bg-gradient-to-r text-purple-800 shadow-black font-bold text-3xl capitalize">{item.title}</h1>
        <h4 className="font-semibold py-2 text-xl capitalize">{item.location}</h4>
        <p className="!mt-1 !font-normal text-white text-lg font-mono ">{item.description}</p>
        </div>
      </VerticalTimelineElement>
    </motion.div>
  );
}

export default function Experience() {
  const { ref} = useSectionInView("Experience", 0.1);
  return (
    <section ref={ref} id="experience" className="bg-[#313741] pb-[5rem]">
      <p  className="text-5xl left- font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center py-10">Experience</p>
      <VerticalTimeline lineColor="#67aae0" className="space-y-[5rem]">
        {experiencesData.map((item, index) => (
          <ExperienceItem item={item} index={index} key={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
}