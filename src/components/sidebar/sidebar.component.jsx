import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.style.scss";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <NavLink
            to="/"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            History
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/chairman-message"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Chairman Message
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/principal-message"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Principal Message
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/vice-chairman-message"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Vice Principal Message
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/organogram"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Organogram
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/gb"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Governing Body
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/teacher-stuff"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Teacher/Stuff
          </NavLink>
        </li>

        <li className="sidebar__menu-item">
          <NavLink
            to="/services"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Services
          </NavLink>
        </li>
        <li className="sidebar__menu-item">
          <NavLink
            to="/notice-board"
            className="sidebar__menu-item-link"
            exact
            activeClassName="sidebar__menu-item--active"
          >
            Notice Board
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
