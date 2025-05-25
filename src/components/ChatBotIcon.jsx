import React from "react";

const iconStyle = {
  position: "fixed",
  bottom: "32px",
  right: "32px",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #dbeafe 0%, #60a5fa 100%)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  cursor: "pointer",
};

const svgStyle = {
  width: "36px",
  height: "36px",
};

export default function ChatBotIcon({ onClick }) {
  return (
    <div style={iconStyle} title="Chat with Bot" onClick={onClick}>
      <svg style={svgStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <ellipse cx="8.5" cy="10.5" rx="1.5" ry="2" fill="#60a5fa" />
        <ellipse cx="15.5" cy="10.5" rx="1.5" ry="2" fill="#60a5fa" />
        <path d="M8 15c1.333 1 4.667 1 6 0" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
