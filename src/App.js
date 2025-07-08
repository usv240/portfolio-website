// App.js
import React, { useRef } from 'react';
import './App.css';
import './styles/global.css'; // Import the global CSS here
import Home from './components/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import AboutMe from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import Certifications from './components/Certifications';


function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* Pass scrollToContact function as a prop to Home */}
        <Home onHireMeClick={scrollToContact} />
        
        <AboutMe />
        <Skills />
        <JobExperience />
        <Certifications />
        <Project />
        <Education />
        {/* Pass the contactRef as a ref prop to Contact */}
        <Contact contactRef={contactRef} />
      </main>
    </div>
  );
}

export default App;
