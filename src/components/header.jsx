import React, { useEffect, useRef } from "react";
import "./header.css";

export const Header = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLoadedData = () => {
      if (videoRef.current) {
        videoRef.current.volume = 0.1;
        videoRef.current.classList.add("fade-in");
        videoRef.current.style.zIndex = "0";
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.style.zIndex = "-1";
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <video autoPlay loop id="bg-video" ref={videoRef}>
                <source src="../videos/4.mp4" type="video/mp4" />
              </video>
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 >
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
