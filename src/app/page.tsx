
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Header from "../../components/header";
import Intro from "../../components/intro";


export default function Home() {
  return (
    <main className="">
      <Header />
      <Intro />
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
      

    </main>
  )
}
