import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = (props) => {
  const [state, handleSubmit] = useForm("xyzkjkkw");
  if (state.succeeded) {
    return (
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get a free quote</h2>
                <p>Thank you for contacting us! We will get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2>Get a free quoute</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-custom btn-lg" disabled={state.submitting}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 contact-info">
              <div className="contact-item">
                <h3>Contact information</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p data-component-name="Contact" className="contact-copyright"> @ 2025 Cristal Clear Water Technology</p>
        </div>
      </div>
    </div>
  );
};
