import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Navbar, Container } from "react-bootstrap";
const Navbars = () => {
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
    <Container>
      <div>
        {/* <div>
	    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tree Name
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Oak</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Banyan</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Peepal</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Teak</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pine</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Neem</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>*/}
        <nav className="navbar navbar-expand-sm  navbar-dark bg-dark fixed=bottom mb-10">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent" 
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/event"
                    style={({ isActive }) => {
                      return isActive ? activeLink : inactiveLink;
                    }}
                  >
                    Event
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/treetag"
                    style={({ isActive }) => {
                      return isActive ? activeLink : inactiveLink;
                    }}
                  >
                    Camera
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/Home"
                    style={({ isActive }) => {
                      return isActive ? activeLink : inactiveLink;
                    }}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/leaderboard"
                    style={({ isActive }) => {
                      return isActive ? activeLink : inactiveLink;
                    }}
                  >
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default Navbars;