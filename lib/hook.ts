import { useInView } from "react-intersection-observer";
import { SectionName, useActiveSection } from "../context/ActiveSection";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export function useSectionInView(
  sectionName:SectionName,threshold=0.75 ) {
    const controls = useAnimation();
  const {ref, inView} = useInView({
    threshold,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSection();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000 ){
      setActiveSection(sectionName);
      controls.start("visible");
    }
  }, [controls, inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref, controls, inView
  };
}