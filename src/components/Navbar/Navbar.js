import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="custom-container">
        <a href="#home" className="navbar-brand">
          Delivery
        </a>
        <div
          className={
            isToggle
              ? "toggle-items show d-none d-sm-inline"
              : "toggle-items d-none d-sm-inline"
          }
        >
          <ul className="navbar-nav mx-auto flex-sm-row">
            <li className="nav-item mx-md-5 mx-sm-3">
              <a
                href="#home"
                className="nav-link"
                onClick={() => setIsToggle(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-md-5 mx-sm-3">
              <a
                href="#about"
                className="nav-link"
                onClick={() => setIsToggle(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-md-5 mx-sm-3">
              <a
                href="#services"
                className="nav-link"
                onClick={() => setIsToggle(false)}
              >
                Services
              </a>
            </li>
            <li className="nav-item mx-md-5 mx-sm-3">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setIsToggle(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="toggle-nav d-sm-none d-inline">
          <FontAwesomeIcon
            icon={faGrip}
            className="fa-2x"
            onClick={() => setIsToggle(!isToggle)}
          />
        </div>
        <div className="btn btn-warning rounded-pill d-none d-lg-block py-2 px-4 fw-bold">
          Order now!
        </div>
      </div>
    </div>
  );
};

export default Navbar;
