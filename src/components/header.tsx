import React from 'react';
import { NavLink } from 'react-router-dom';

function Header()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <NavLink to={"/home"} className="navbar-brand">MDEV1012</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to={"/home"} className="nav-link" aria-current="page"><i className="fa-solid fa-house fa-lg"></i> Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className="nav-link" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i> About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/apps"} className="nav-link" aria-current="page"><i className="fa-solid fa-mobile-button fa-lg"></i> Our Apps</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/services"} className="nav-link" aria-current="page"><i className="fa-solid fa-signs-post fa-lg"></i> Our Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link" aria-current="page"><i className="fa-solid fa-paper-plane fa-lg"></i> Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
}

export default Header;