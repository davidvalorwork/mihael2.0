import React from "react";

export const Navigation = (props) => {
  const brandStyle = {
    fontSize: "14px", // Ajusta el tamaño según tus necesidades
    padding: "0px"
  };

  const logoStyle = {
    height: "60px", // Ajusta el tamaño según tus necesidades
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll flex"
            href="#page-top"
            style={brandStyle}
          >
            <img
              src="img/logo.jpeg" // Reemplaza con la ruta a tu logo
              alt="Logo"
              style={logoStyle} // Aplica el estilo del logo
            />

          </a>{ }
          <a  href="#page-top">
            <img
              src="img/onlyText.png"
              style={{ width: "160px", marginTop: "13px", marginLeft: "-10px"}}
            />
          </a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Our Products
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
