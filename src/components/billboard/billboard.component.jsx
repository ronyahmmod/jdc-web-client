import React from "react";
import { Link } from "react-router-dom";
import "./billboard.style.scss";

const Billboard = () => {
  return (
    <div className="billboard">
      <marquee className="billboard__items" onMouseOver={() => this.stop()}>
        <div className="billboard__item">
          <Link to="/" className="billboard__link">
            Addmission deadline 26/10/2020
          </Link>
        </div>
      </marquee>
    </div>
  );
};

export default Billboard;
