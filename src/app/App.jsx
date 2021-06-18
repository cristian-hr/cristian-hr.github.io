import '../scss/App.scss';
import { useRef } from 'react';
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer"

function App() {

  const contactRef = useRef(null)
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)

  const executeScroll = (element) => element.current.scrollIntoView()  

  return (
    <div className="App">
      <Navbar 
        homeRef={homeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        executeScroll={executeScroll}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div> 
      <Footer />     
    </div>
  );
}

export default App;
