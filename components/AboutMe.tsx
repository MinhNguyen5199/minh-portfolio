"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import avatar from "../public/avatar.jpeg";
import { info } from "../lib/data";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/ActiveSection";
import { useSectionInView } from "../lib/hook";

const motionLoading = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 125,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  hidden: { opacity: 0, scale: 0 },
};

export default function AboutMe() {
  const { ref, controls } = useSectionInView("About", 0.5);

  return (
    <div id="about" className="bg-[#22252c] max-h-full pt-[10%] relative">
      <motion.div
        ref={ref}
        className="lg:grid lg:gap-4 lg:grid-cols-2 lg:ml-[8%] pb-[7%]"
        initial="hidden"
        animate={controls}
        variants={motionLoading}
      >
        <div className="lg:mt-[-50px]">
          <Image
            src={avatar}
            width={400}
            height={100}
            alt="Picture of the author"
            className="ml-auto mr-auto rounded-full "
          />
          <a
            className="group h-16 w-[270px] pl-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-serif text-2xl font-bold text-white mx-auto my-5 hover:scale-90 active:scale-125 transition flex items-center cursor-pointer"
            href="/cv.pdf"
          >
            Download Resume{" "}
            <span>
              <HiDownload className="group-hover:translate-y-2" />
            </span>
          </a>
        </div>
        <div>
          <div className="max-lg:text-center">
            <h1 className="pb-[1rem] text-6xl font-bold bg-gradient-to-r  from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent ">
              ABOUT ME
            </h1>
            <p className="pb-[1rem] text-white text-[16px] font-[400px] lg:mr-[140px] leading-7 font-mono">
            Hi there! I&apos;m Minh Nguyen, an aspiring web developer with a passion for creating dynamic web projects. I bring enthusiasm and dedication to all stages of the development cycle. Proficient in essential technologies like HTML5, CSS3, JavaScript, React, Nextjs, MongoDB and PostgreSQL, and eager to learn and grow. I&apos;m excited about gaining experience and building a strong foundation in web development.
            </p>
            {info.map((item) => (
              <p
                key={item[1]}
                className="pb-[0.3rem] text-white text-[18px] font-serif"
              >
                <span className="text-[#00d7bb] font-bold text-[20px]">
                  {item[2]}{" "}
                </span>{" "}
                {item[1]}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
