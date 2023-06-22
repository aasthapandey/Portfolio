import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2.js";
import Form from "../components/Form.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
