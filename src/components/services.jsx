import React from "react";
import "./services.css";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide top-quality water filtration systems and professional
            installation services. Our team is dedicated to ensuring that you
            have access to clean, safe, and great-tasting water. With our
            advanced technology and expert advice, we guarantee reliable and
            efficient solutions tailored to your needs.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-md-4 fade-in"
                style={{
                  '--delay': `${0.1 + i * 0.15}s`,
                  animationDelay: `${0.1 + i * 0.15}s`,
                }}
              >
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
