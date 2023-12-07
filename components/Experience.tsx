"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from '../lib/hook';
import SchoolIcon from "../public/book.png";
import WorkIcon from "../public/suitcase.png";
import StarIcon from "../public/project.png";
import Image from 'next/image';
import { experiencesData } from '../lib/data';
import { color } from 'framer-motion';
export default function Experience() {
  const {ref} = useSectionInView("Experience", 0.5);
  return (
    <section ref={ref} id="experience" className="bg-[#313741] pb-[5rem]" >
      <p className="text-5xl left- font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent text-center py-10">Experience</p>
      <VerticalTimeline lineColor="#67aae0" >
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement visible={true}
            contentStyle={{
              color: '#fff',
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 0 15px #d4223f",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "10px",
              background: "#b58851",
              
            }}
            contentArrowStyle={{ borderRight: '15px solid  #FF9B42' }}
            date={item.date }
            iconStyle={{ background: '#313741', color: '#00d7bb', boxShadow: "0 0 20px #0FA3B1", scale: 1.2 }}
            icon={item.icon}
          >
            <h1 className=" bg-gradient-to-r text-purple-800 shadow-black font-bold text-3xl capitalize">{item.title}</h1>
            <h4 className="font-semibold py-2 text-xl capitalize">{item.location}</h4>
            <p className="!mt-1 !font-normal text-white text-lg font-mono ">{item.description}</p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
      </VerticalTimeline>
    </section>
  )
}
