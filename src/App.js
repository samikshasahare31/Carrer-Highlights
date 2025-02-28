import React from "react";
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from "./Contact";
import ExperienceCard from "./Experience";
import Achievements from "./Achievements";

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="Experience">
        <ExperienceCard/>
      </section>
      <section id="Achievements">
        <Achievements/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
