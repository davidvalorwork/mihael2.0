import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import "./testimonials.css";
const featurableWidgetId = "2fbf9657-7a81-4404-9bfd-b7529e621c01";

export const Testimonials = (props) => {
  if (!props.data) return "loading";
  const data = [...props.data];
  console.log(data)
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our customers say</h2>
        </div>
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
        />
        <div className="row">
          {data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-xs-6 col-sm-4 col-md-2">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={d.img} alt="" />
                </div>
                <div className="testimonial-content">
                  <p>{d.text}</p>
                  <div className="testimonial-meta"> - {d.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
