import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Navbars";
import { Outlet } from "react-router-dom";
import React from "react";
import Plain from "./Plain";

const User = () => {
  return (
    <div>
      <Plain />
      <div>
        <Outlet />
      </div>
      <Navbars />
    </div>
  );
};

export default User;