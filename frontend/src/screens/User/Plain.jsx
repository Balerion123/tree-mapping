import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Plain() {
  const activeLink = {
    color: "#ffaa00",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const inactiveLink = {
    color: "#EEF0F2",
    fontSize: "1.2rem",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm  navbar-dark bg-dark fixed=bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/event"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                ></NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/treetag"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                ></NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Home"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                ></NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/leaderboard"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                ></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Plain;
