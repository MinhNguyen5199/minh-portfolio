"use client"
import React from 'react'
import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import archive from 'react-useanimations/lib/archive';


export default function Socital() {
  return (
    
    <div className="flex justify-center">
      <a href='https://www.linkedin.com/in/minh-nguyen-237a55237/'>
      <div className="hover:scale-150 active:scale-125 transition mx-5">
          <UseAnimations
            animation={linkedin}
            size={80}
            strokeColor={'#0072B1'}
            loop={true}
            wrapperStyle={{ margin: 3 }}
          />
        </div>
      </a>
      <a href={'https://github.com/MinhNguyen5199'}>
        <div className="hover:scale-150 active:scale-125 transition mx-5">
          <UseAnimations
            animation={github}
            size={80}
            wrapperStyle={{ margin: 3 }}
            strokeColor={'#FFFFFF'}
          />
        </div>
      </a>
      <a href={'mailto:hoangminhabc11@gmail.com'}>
        <div className="hover:scale-150 active:scale-125 transition mx-5 -mt-2">
          <UseAnimations
            animation={archive}
            size={80}
            strokeColor={'#EA4335'}
          />
        </div>
      </a>
    </div>
  )
}
