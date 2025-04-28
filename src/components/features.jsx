import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import "./features.css"
const featurableWidgetId = "2fbf9657-7a81-4404-9bfd-b7529e621c01";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
        />
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};