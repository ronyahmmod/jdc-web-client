import React from "react";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import "./carousel.style.scss";

const Carousel = () => {
  return (
    <div className="carousel slide" id="carousel-slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt={slide1} />
        </div>
        <div className="carousel-item">
          <img
            src={slide2}
            className="d-block w-100 carousel__image"
            alt={slide2}
          />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carousel-slide"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel-slide"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
