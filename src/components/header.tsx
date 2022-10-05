import React from 'react';

function Header()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">MDEV1012</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html"><i className="fa-solid fa-house fa-lg"></i> Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="about.html"><i className="fa-solid fa-circle-info fa-lg"></i> About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="apps.html"><i className="fa-solid fa-mobile-button fa-lg"></i> Our Apps</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="services.html"><i className="fa-solid fa-signs-post fa-lg"></i> Our Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="contact.html"><i className="fa-solid fa-paper-plane fa-lg"></i> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
}

export default Header;