import React, { useEffect, useRef } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import "./features.css";
const featurableWidgetId = "2fbf9657-7a81-4404-9bfd-b7529e621c01";

export const Features = (props) => {
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.18 }
    );
    featuresRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      featuresRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [props.data]);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
        />
        <div className="row align-items-center mb-4">
          <div className="col-12 text-center">
            <h2 className="features-title">Features</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-xs-12 col-sm-6 col-md-3 feature-item animate-on-scroll"
                ref={el => featuresRef.current[i] = el}
                style={{animationDelay: `${i * 0.2}s`}}
              >
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{i === 0 ? "We provide top-quality water filtration systems and installation, ensuring you always have clean, safe water." : d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};