import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import './index.css';

function App() {
  useEffect(() => {
    // Dynamic document title based on focus
    const handleFocus = () => document.title = 'Engr. Faisal Khan | iqrasofts CEO';
    const handleBlur = () => document.title = 'SYSTEM ALERT: Connection Lost?';
    
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    handleFocus(); // Set initial

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <>
      <Navbar />
      <SocialSidebar />
      
      <main>
        {/* Global Navbar Spacer - Increased to ensure clear visual separation */}
        <div className="h-32 md:h-40" />
        <Hero />
        <div className="w-full h-[150px]" />
        <About />
        <div className="w-full h-[150px]" />
        <Skills />
        <div className="w-full h-[200px]" />
        <Experience />
        <div className="w-full h-[150px]" />
        <Projects />
        <div className="w-full h-[150px]" />
        <Education />
        <div className="w-full h-[150px]" />
        <Certifications />
        <div className="w-full h-[150px]" />
        <Contact />
        <div className="w-full h-[150px]" />
      </main>

      <Footer />
    </>
  );
}

export default App;
