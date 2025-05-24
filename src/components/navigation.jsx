import React from "react";

export const Navigation = (props) => {
  const brandStyle = {
    fontSize: "14px", // Ajusta el tamaño según tus necesidades
    padding: "0px"
  };

  const logoStyle = {
    height: "60px", // Ajusta el tamaño según tus necesidades
  };

  // Gradient link style
  const gradientLinkStyle = {
    background: "linear-gradient(90deg, #2193b0 10%, #6dd5ed 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              className="navbar-brand page-scroll flex"
              href="/"
              style={brandStyle}
              itemScope
              itemType="https://schema.org/Organization"
              rel="home"
            >
              <span itemProp="logo">
                <img
                  src="img/logo.jpeg"
                  alt="Cristal Clear Water Technology company logo"
                  style={logoStyle}
                />
              </span>
            </a>
            <a href="#page-top" style={{ marginLeft: "10px" }}>
              <img
                src="img/onlyText.png"
                style={{ width: "100px", marginTop: "8px" }}
                alt="Text Logo"
              />
            </a>
          </div>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll nav-link-gradient" style={gradientLinkStyle}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll nav-link-gradient" style={gradientLinkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll nav-link-gradient" style={gradientLinkStyle}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll nav-link-gradient" style={gradientLinkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
