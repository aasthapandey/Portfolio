import React from "react"
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2.js"
import AboutContent from "../components/AboutContent.js";

const About = () => {
    return (
      <div>
        <Navbar />
        <HeroImg2 heading="ABOUT." text="I'm a Front-End Web Developer" />
        <AboutContent />
        <Footer />
      </div>
    );
}

export default About