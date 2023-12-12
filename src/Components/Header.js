import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Travelix<span>Travel Agency</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="oi oi-menu">Menu</span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">About</li>
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">Destination</li>
            </NavLink>
            <NavLink
              to="/hotel"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">Hotel</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">Contact</li>
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <li className="nav-link">Admin</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
