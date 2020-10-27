import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.style.scss";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <NavLink
            to="/history"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            History
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/history"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
