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
        <div className="section-title text-center">
          <h2>Features</h2>
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
                <>
                  {i === 0 ? (
                    <img src="https://www.thespruce.com/thmb/lyyDrdHSXkk6wMb6naHm258LZ0o=/7354x0/filters:no_upscale():max_bytes(150000):strip_icc()/installing-a-reverse-osmosis-system-2718849-hero-4b9b0d7bbd3941eeb12d23d3ebd7296b.jpg" alt="Reverse Osmosis System" style={{width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', marginBottom: '10px'}} />
                  ) : i === 1 ? (
                    <img src="https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/original/products/476/2359/brondell-capella-RC250-reverse-osmosis-water-filteration-system-installed__98769.1738792955.jpg?c=1" alt="Brondell Capella RO System" style={{width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', marginBottom: '10px'}} />
                  ) : i === 2 ? (
                    <img src="https://www.automaticgatesolutions.com.au/assets/images/installation.jpg" alt="Installation" style={{width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', marginBottom: '10px'}} />
                  ) : i === 3 ? (
                    <img src="https://media.licdn.com/dms/image/v2/D4D12AQEq8AGlM2pV7A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1698848022098?e=2147483647&v=beta&t=EfJ9MCeTxZPutxxjW1B7D2p_3gPLny08QxaR9VGwxqA" alt="Feature 4" style={{width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', marginBottom: '10px'}} />
                  ) : (
                    <i className={d.icon}></i>
                  )}
                  <h3>{d.title}</h3>
                  <p>{i === 0 ? "We provide top-quality water filtration systems and installation, ensuring you always have clean, safe water." : d.text}</p>
                </>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};