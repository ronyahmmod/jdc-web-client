import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <nav className="navbarext">
      <ul className="navbarext__menubar">
        <li className="navbarext__menu">
          <Link to="/" className="navbarext__link">
            Home
          </Link>
        </li>

        <li className="navbarext__menu">
          Services
          <ul className="navbarext__menu-items">
            <li className="navbarext__menu-item">
              <Link to="/std-app" className="navbarext__link">
                Certificate
              </Link>
            </li>
            <li className="navbarext__menu-item">
              <Link to="/std-app" className="navbarext__link">
                Testimonial
              </Link>
            </li>
            <li className="navbarext__menu-item">
              <Link to="/std-app" className="navbarext__link">
                Charachter Certificate
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbarext__menu">
          Sections
          <ul className="navbarext__menu-items">
            <li className="navbarext__menu-item">
              <Link to="/gen" className="navbarext__link">
                Genaral
              </Link>
            </li>
            <li className="navbarext__menu-item">
              <Link to="/technical" className="navbarext__link">
                Technical
              </Link>
            </li>
            <li className="navbarext__menu-item">
              <Link to="/honours" className="navbarext__link">
                Honours
              </Link>
            </li>
            <li className="navbarext__menu-item">
              <Link to="/open" className="navbarext__link">
                Open University
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbarext__menu">
          <Link to="/notice" className="navbarext__link">
            Notice
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/result" className="navbarext__link">
            Result
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/gb" className="navbarext__link">
            Governing Body
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/exam" className="navbarext__link">
            Examination
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/form-fillup" className="navbarext__link">
            Form Fillup
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/admission" className="navbarext__link">
            Admission
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/complain" className="navbarext__link">
            Complain
          </Link>
        </li>
        <li className="navbarext__menu">
          <Link to="/contact" className="navbarext__link">
            Contact US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
