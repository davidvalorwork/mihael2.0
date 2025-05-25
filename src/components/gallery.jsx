import React, { useState } from "react";
import "./gallery.css";
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
                <div
                  key={`${d.title}-${i}`}
                  className={`accordion-item ${
                    d.title === "Reverse Osmosis" ? "reverse-osmosis" : ""
                  }`}
                >
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
                    <div
                      className={`product-item ${
                        d.title === "Reverse Osmosis" ? "reverse-osmosis" : ""
                      }`}
                    >
                      {d.title !== "Reverse Osmosis" && (
  <div className="img-container">
    {d.imgUrls
      ? d.imgUrls.map((url, index) => (
          <div key={index} className="row">
            <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
               style={{display: 'block'}}>
              <img
                src={url}
                alt={`${d.title} ${index + 1}`}
                width="400"
                height="200"
                style={{cursor: 'pointer'}}
              />
            </a>
            {d.texts && d.texts[index]
  ? <p>{d.texts[index]}</p>
  : (index === 2 && (
      <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
         style={{ textDecoration: 'none' }}>
        <button style={{
          padding: '8px 20px',
          background: 'linear-gradient(90deg, #2193b0 10%, #6dd5ed 90%)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          See Details
        </button>
      </a>
    ))}
          </div>
        ))
      : d.imgUrl && (
          <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
             style={{display: 'block'}}>
            <img
              src={d.imgUrl}
              alt={d.title}
              width="400"
              height="200"
              style={{cursor: 'pointer'}}
            />
          </a>
        )}
  </div>
)}
                      <div className="text-container">
                        <p>{d.description}</p>
                      </div>
                      {d.title === "Reverse Osmosis" && (
  <div className="img-container">
    {d.imgUrls
      ? d.imgUrls.map((url, index) => (
          <div key={index} className="row">
            <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
               style={{display: 'block'}}>
              <img
                src={url}
                alt={`${d.title} ${index + 1}`}
                width="400"
                height="200"
                style={{cursor: 'pointer'}}
              />
            </a>
            {d.texts && d.texts[index]
  ? <p>{d.texts[index]}</p>
  : (index === 2 && (
      <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
         style={{ textDecoration: 'none' }}>
        <button style={{
          padding: '8px 20px',
          background: 'linear-gradient(90deg, #2193b0 10%, #6dd5ed 90%)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          See Details
        </button>
      </a>
    ))}
          </div>
        ))
      : d.imgUrl && (
          <a href={`/product/${d.title.toLowerCase().replace(/\s+/g, '-')}`}
             style={{display: 'block'}}>
            <img
              src={d.imgUrl}
              alt={d.title}
              width="400"
              height="200"
              style={{cursor: 'pointer'}}
            />
          </a>
        )}
  </div>
)}
                      <div className="text-container">
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
