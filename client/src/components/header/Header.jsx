import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";

function Header() {
  const {loginStatus}=useAuth();
  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <Link to="/">Annas</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            {loginStatus?   <li>
              <Link to="/logout">Logout</Link>
            </li>:<><li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li></> }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
