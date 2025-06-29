import React from "react";
import Banner from "../Components/Banner/Banner";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import AboutSection from "../Components/AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects/>
      <SkillsSection />
      <AboutSection/>
      <Contact/>
    </div>
  );
};

export default Home;
