import React, { useState } from "react";
import "../styles/products/Gallery.css";

export const Gallery = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        <div className="accordion">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="accordion-item">
                  <div
                    className="accordion-title"
                    onClick={() => toggleAccordion(i)}
                  >
                    <h3>{d.title}</h3>
                    <span>{activeIndex === i ? "-" : "+"}</span>
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <div className="product-item">
                      <div className="img-container">
                        {d.imgUrls
                          ? d.imgUrls.map((url, index) => (
                              <div key={index} className="row">
                                <img
                                  src={url}
                                  alt={`${d.title} ${index + 1}`}
                                  width="400"
                                  height="200"
                                />
                                {d.texts && <p>{d.texts[index]}</p>}
                              </div>
                            ))
                          : d.imgUrl && (
                              <img
                                src={d.imgUrl}
                                alt={d.title}
                                width="400"
                                height="200"
                              />
                            )}
                      </div>
                      <div className="text-container">
                        <p>{d.description}</p>
                        <ul>
                          {d.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
