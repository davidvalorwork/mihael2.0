import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { OrderForm } from "./OrderForm";

export const Header = (props) => {
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleLoadedData = () => {
      if (videoRef.current) {
        videoRef.current.volume = 0.1;
        videoRef.current.classList.add("fade-in");
        videoRef.current.style.zIndex = "0";
      }
    };

    const handleClickOutside = (event) => {
      if (isModalOpen && !document.querySelector(".modal-content").contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.style.zIndex = "-1";
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleOrderNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
                    className="btn btn-custom btn-lg page-scroll"
                    onClick={handleOrderNowClick}
                  >
                    Order now
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <OrderForm />
          </div>
        </div>
      )}
    </>
  );
};
