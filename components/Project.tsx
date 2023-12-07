"use client";
import React, { useRef } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

type ProjectPros = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  demoLink,
  githubCode,
  tags,
  imageUrl,
}: ProjectPros) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      {/* <div>
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
      />
      </div> */}

      {/* <div className="relative ">
    <a className="w-[300px] absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
      <h1  className="tracking-wider" >Title</h1>
      <p  className="mx-auto">Description</p>
      
      </a>
      <a href="https://stackoverflow.com/questions/65917029/tailwind-css-display-text-on-image-hover" className="relatative">
        <div className="flex flex-wrap content-center">
            <Image src={imageUrl} quality={100} width={300} height={300} className="mx-auto aspect-square" alt="hello"/>
        </div>
    </a>
  </div> */}

      <div className="relative group m-3 ">
        <div>
          <Image
            src={imageUrl}
            quality={100}
            width={330}
            height={330}
            alt={title}
            className="aspect-square max-lg:ml-auto max-lg:mr-auto rounded-2xl w-[21rem]"
          />
        </div>
        <div className=" duration-300 inset-x-0 absolute top-0 text-xl group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 group-hover:p-2 text-black font-semibold w-[21rem] lg:w-full h-[100%] group-hover:cursor-pointer rounded-2xl max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 ">
          <div className="h-full w-full bg-gray-200 scale-0 group-hover:scale-100 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-1000 opacity-0 group-hover:opacity-100 rounded-2xl pl-2">
            <h1 className="text-center uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent py-5 decoration-8">
              {title}
            </h1>
            <p className="text-base font-mono">{description}</p>
            <div className="flex gap-2 py-2 absolute bottom-[80px]">
              <Link
                href={demoLink}
                target="_blank"
                className="my-auto text-blue-500 hover:underline tracking-wider"
              >
                Demo
              </Link>
              <Link
                href={githubCode}
                target="_blank"
                className="my-auto text-blue-500 hover:underline tracking-wider"
              >
                Github
              </Link>
            </div>
            <ul className="flex flex-wrap mt-4 mr-3 gap-2 sm:mt-auto absolute bottom-4">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <div className="flex gap-2 mt-auto">
        <Link href={demoLink} target="_blank" className="mt-auto text-blue-500 hover:underline tracking-wider">Demo</Link>
        <Link href={githubCode} target="_blank" className="mt-auto text-blue-500 hover:underline tracking-wider">Github</Link>
        </div>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition transform group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-3
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-3
        group-even:right-[initial] group-even:-left-40"
      /> */}
    </motion.div>
  );
}
