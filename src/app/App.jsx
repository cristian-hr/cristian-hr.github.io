import '../scss/App.scss';
import { useRef } from 'react';
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"

function App() {

  const contactRef = useRef(null)
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)

  const executeScroll = (element) => element.current.scrollIntoView()  

  return (
    <div className="App">
      <Navbar 
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        executeScroll={executeScroll}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>      
    </div>
  );
}

export default App;
