import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollProgress from './components/ScrollProgress';
import Lightbox from './components/Lightbox';
import CurvedBackground from './components/CurvedBackground';
import AnimationObserver from './components/AnimationObserver';
import ThemeSwitcher from './components/ThemeSwitcher';
import { LightboxProvider } from './context/LightboxContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LightboxProvider>
        <div className="min-h-screen bg-white relative">
          <CurvedBackground />
          <ScrollProgress />
          <Header />
          <Hero />
          <About />
          <Qualifications />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <FloatingButtons />
          <ThemeSwitcher />
          <Lightbox />
          <AnimationObserver />
        </div>
      </LightboxProvider>
    </ThemeProvider>
  );
}

export default App;