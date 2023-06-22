import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          <br />
          I am Frontend Web Developer.
          <br />
          <br />
          My tech skills include ReactJs, Javascript and Typescript. I also have
          basic knowleadge about Cloud Computing and have a certification of
          AZ-900.
          <br />
          <br />I am passionate about web development, and love working on fun
          little projects during my free time.
          <br />
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
          <br />
          <br />
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
