import React from "react";
import "./hero.style.scss";

const Hero = ({ image, title, sub_title }) => {
  return (
    <div className="card hero">
      <img className="card-img-top hero__image" src={image} alt={title} />
      <div className="card-body hero__body">
        <div className="card-title hero__title">{title}</div>
        <span className="hero__sub-title">{sub_title}</span>
      </div>
    </div>
  );
};

export default Hero;
