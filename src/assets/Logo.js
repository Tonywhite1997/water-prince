import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <i className="fa-solid fa-droplet"></i>
        <div className="container">
          <div>
            <span className="logo-water">Water</span>
            <span className="logo-prince">Prince</span>
          </div>
          <div className="nig-ltd">NIGERIA LTD</div>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
