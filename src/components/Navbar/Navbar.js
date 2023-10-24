import "../Navbar/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {" "}
      <header className="fixed-header">
        <div className="">
          <div className="">
            <nav className="navbar">
              <ul className="navbar-ul">
                <li className="liclass">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="liclass">
                  <NavLink
                    to="/aboutus"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li className="liclass">
                  <NavLink
                    to="/book"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Book
                  </NavLink>
                </li>
                <li className="liclass">
                  <NavLink
                    to="/contactus"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="col"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
