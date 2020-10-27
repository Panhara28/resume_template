import React from 'react';

export const Navbar = () => {
  return(
    <nav
      className="navbar navbar-expand-lg navbar-custom navbar-light"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" height="15" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span data-feather="menu" className="fea icon-md"></span></button
        >

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-link mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#news">Blog</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="javascript:void(0)"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Pages
              </a>
              <div
                className="dropdown-menu rounded m-0"
                aria-labelledby="navbarDropdown"
              >
                <div className="container mx-0 mx-md-0">
                  <div className="row">
                    <div className="col-md-12">
                      <a className="dropdown-item" href="page-blog.html">Blog</a>
                      <a className="dropdown-item" href="page-blog-detail.html"
                        >Blog Detail</a
                      >
                      <a className="dropdown-item" href="page-portfolio.html"
                        >Portfolio</a
                      >
                      <a className="dropdown-item" href="page-portfolio-detail.html"
                        >Portfolio Detail</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon">
            <li className="list-inline-item">
              <a href="javascript:void(0)"><i className="mdi mdi-facebook"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void(0)"><i className="mdi mdi-twitter"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void(0)"><i className="mdi mdi-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}