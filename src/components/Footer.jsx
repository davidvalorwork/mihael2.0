import React from "react";

const footerStyle = {
  background: "linear-gradient(90deg, #2193b0 10%, #6dd5ed 90%)",
  color: "#fff",
  padding: "24px 0 12px 0",
  textAlign: "center",
  fontSize: 16,
};

export const Footer = () => (
  <footer style={footerStyle}>
    <div>
      &copy; {new Date().getFullYear()} Cristal Clear Water Technology. All rights reserved.
    </div>
    <div style={{ fontSize: 13}}>
      Designed by davidvalorwork@gmail.com
    </div>
  </footer>
);

export default Footer;
