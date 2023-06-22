import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css"

import React from 'react'

const WorkCard = (props) => {
    return (
      <div className="project-card">
        <img src={props.imgSrc} alt="youtube" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <NavLink to={props.details} className="btn">
              Details
            </NavLink>
            <NavLink to="url.com" className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default WorkCard