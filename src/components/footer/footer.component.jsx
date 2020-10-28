import React from "react";
import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copy">
        @Copyright: 2020, Jibannagar Degree College
      </div>
      <div className="footer__author">
        <span>Design and Developed By Md. Rony Ahmmod</span>
        <a className="footer__link" href="https://facebook.com/rony.ahmmod.9">
          Follow on facebook
        </a>
      </div>
      <div className="footer__follow">
        <a className="footer__link" href="https://facebook.com/rony.ahmmod.9">
          Follow on facebook
        </a>
        <a className="footer__link" href="https://facebook.com/rony.ahmmod.9">
          Follow on youtube
        </a>
      </div>
    </div>
  );
};

export default Footer;
