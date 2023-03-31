import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo";
import Toggler from "../UI/Toggler";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function setNavState() {
    setIsNavOpen((prevState) => {
      return !prevState;
    });
  }
  return (
    <header className="header">
      <Logo />
      <nav className={`${isNavOpen ? "header-nav open" : "header-nav"}`}>
        <ul className="header-nav-link">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : undefined;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => {
                return isActive ? "active" : undefined;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => {
                return isActive ? "active" : undefined;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => {
                return isActive ? "active" : undefined;
              }}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <Toggler handleIsNavOpen={setNavState} isNavOpen={isNavOpen} />
    </header>
  );
}

export default Header;
