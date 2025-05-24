import React from "react";
import "./about.css";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 about-img-col fade-in">
            <img 
              src="https://blog.burnsmcd.com/hubfs/CORP_AmplifiedPerspectives/assets/Infrastructure/using-technology-to-manage-our-vital-water-resources-Patrick-Clifford-amplified-perspectives-burns-mcdonnell.jpg" 
              className="img-responsive about-img-rounded" 
              alt="About us" 
              style={{borderRadius: '32px', boxShadow: '0 8px 40px rgba(33,147,176,0.13)', border: '6px solid #e3f3fa', width: '100%', maxHeight: 340, objectFit: 'cover'}}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text fade-in" style={{fontFamily: "'Bebas Neue', Arial, sans-serif", animation: 'fadeIn 2s forwards'}}>
              <h2 style={{fontFamily: "'Bebas Neue', Arial, sans-serif", fontSize: '2.8em', letterSpacing: '0.07em', background: 'linear-gradient(90deg, #2193b0 10%, #6dd5ed 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', textShadow: '2px 4px 16px rgba(33,147,176,0.07)', marginBottom: '0.3em', textTransform: 'uppercase', display: 'inline-block'}}>About us</h2>
              <p style={{fontFamily: "'Poppins', 'Montserrat', Arial, sans-serif", fontSize: '1.2em', color: '#1a355e', marginBottom: 20}}>
                <i className="fa fa-tint" style={{color:'#2193b0',marginRight:8}}></i>
                {props.data ? props.data.paragraph : "loading..."}
                <i className="fa fa-cogs" style={{color:'#6dd5ed',marginLeft:8}}></i>
              </p>
              <h3 style={{fontFamily: "'Bebas Neue', Arial, sans-serif", color: '#2193b0', fontWeight: 700, letterSpacing: '1px', fontSize: '1.5em', marginBottom: 18}}>Why choose us?</h3>
              <div className="list-style row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{paddingLeft: 0, listStyle: 'none'}}>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} style={{fontFamily: "'Poppins', 'Montserrat', Arial, sans-serif", fontSize: '1.08em', color: '#2193b0', marginBottom: 10, display: 'flex', alignItems: 'center'}}>
                            <i className="fa fa-check-circle" style={{color:'#6dd5ed',marginRight:10}}></i>{d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{paddingLeft: 0, listStyle: 'none'}}>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} style={{fontFamily: "'Poppins', 'Montserrat', Arial, sans-serif", fontSize: '1.08em', color: '#2193b0', marginBottom: 10, display: 'flex', alignItems: 'center'}}>
                            <i className="fa fa-star" style={{color:'#2193b0',marginRight:10}}></i>{d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
