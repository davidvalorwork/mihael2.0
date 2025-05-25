import React, { useEffect, useState } from "react";
import "./navigation.css";
import { getActiveSection } from "./navigationActive";

export const Navigation = (props) => {
  const sectionIds = ["features", "about", "services", "contact"];
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = getActiveSection(sectionIds, 90);
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandStyle = {
    fontSize: "14px",
    padding: "0px"
  };

  const logoStyle = {
    height: "60px",
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
    <nav id="menu" className="navbar navbar-expand-md bg-white shadow-sm">
      <div className="container-fluid px-4">
        <a
          className="navbar-brand p-0 me-2 d-flex align-items-center"
          href="/"
          itemScope
          itemType="https://schema.org/Organization"
          rel="home"
        >
          <span itemProp="logo">
            <img
              src={"/img/logo.jpeg"}
              alt="Cristal Clear Water Technology company logo"
              style={{height: "60px"}}
            />
          </span>
          <span className="ms-2">
            <img
              src={"/img/onlyText.png"}
              alt="Text Logo"
              style={{width: "160px", marginTop: "12px"}}
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="#features" className={`nav-link${activeSection === "features" ? " active" : ""}`}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-link${activeSection === "about" ? " active" : ""}`}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className={`nav-link${activeSection === "services" ? " active" : ""}`}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-link${activeSection === "contact" ? " active" : ""}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
