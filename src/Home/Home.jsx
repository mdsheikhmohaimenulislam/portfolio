import React from "react";
import Banner from "../Components/Banner/Banner";
import SkillsSection from "../Components/SkillsSection/SkillsSection";

import Contact from "../Components/Contact/Contact";
import AboutSection from "../Components/AboutSection/AboutSection";
import Projects from "../Components/Projects/Projects";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <SkillsSection />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
