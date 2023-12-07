"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from 'clsx';
import { useActiveSection } from "../context/ActiveSection";


export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-full border border-white border-opacity-40 bg-slate-900 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-purple-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li //text
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{y:-100, opacity: 0 }}
              animate={{y:0, opacity: 1}}
            >
              <Link //link
                className= {clsx("flex w-full items-center justify-center px-3 sm:px-1 py-3 hover:text-orange-500 transition", {
                  "text-orange-500": activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span className="bg-zinc-800 rounded-full absolute -left-2 -right-2 inset-0 -z-10"
                  layoutId="activeSection"
                  transition={
                    {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }
                  }
                  ></motion.span>
                  )}
                

              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
