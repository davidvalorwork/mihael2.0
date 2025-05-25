import React, { useState, useEffect } from "react";

const windowStyle = {
  position: "fixed",
  bottom: "110px",
  right: "32px",
  width: "340px",
  background: "linear-gradient(135deg, #dbeafe 0%, #60a5fa 100%)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
  borderRadius: "22px",
  zIndex: 1001,
  padding: "18px 16px 16px 16px",
  color: "#1e293b",
  fontFamily: "inherit",
  opacity: 1,
  transform: 'translateY(0)',
  transition: 'opacity 0.35s, transform 0.35s',
};

const ANIMATION_STYLE = `
@keyframes chatbot-slide-up {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.chatbot-animated {
  animation: chatbot-slide-up 0.44s cubic-bezier(.63,-0.01,.46,1.06);
}
`;


const closeBtnStyle = {
  position: "absolute",
  top: "10px",
  right: "14px",
  background: "none",
  border: "none",
  fontSize: "20px",
  color: "#60a5fa",
  cursor: "pointer",
};

const optionBtnStyle = {
  display: "block",
  width: "100%",
  margin: "8px 0",
  padding: "10px 14px",
  background: "#fff",
  color: "#2563eb",
  border: "none",
  borderRadius: "12px",
  fontWeight: 500,
  fontSize: "16px",
  cursor: "pointer",
  textAlign: "left",
  transition: "background 0.2s, color 0.2s",
};

const answerStyle = {
  background: "#fff",
  color: "#334155",
  borderRadius: "12px",
  padding: "10px 14px",
  margin: "8px 0",
  fontSize: "15px",
};

const questions = [
  {
    q: "What services do you offer?",
    a: "We offer a range of services including web development, design, and digital marketing. Contact us for more details!",
  },
  {
    q: "How can I contact support?",
    a: "You can reach support via our contact form or by emailing admcctec@gmail.com.",
  },
  {
    q: "Where are you located?",
    a: "We are located in Tomball, Texas, but serve clients worldwide!",
  },
];

export default function ChatBotWindow({ onClose }) {
  const [selected, setSelected] = useState(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Inject animation style only once
    if (!document.getElementById('chatbot-animation-style')) {
      const style = document.createElement('style');
      style.id = 'chatbot-animation-style';
      style.innerHTML = ANIMATION_STYLE;
      document.head.appendChild(style);
    }
    // Trigger animation
    setTimeout(() => setAnimated(true), 10);
  }, []);

  return (
    <div style={windowStyle} className={animated ? 'chatbot-animated' : ''}>
      <button style={closeBtnStyle} onClick={onClose} aria-label="Close chat">×</button>
      <h3 style={{marginTop: 0, marginBottom: 12, color: '#2563eb'}}>Ask a Question</h3>
      {selected === null ? (
        <div>
          {questions.map((item, idx) => (
            <button
              key={idx}
              style={optionBtnStyle}
              onClick={() => setSelected(idx)}
            >
              {item.q}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <div style={answerStyle}>{questions[selected].a}</div>
          <button style={{...optionBtnStyle, background:'#dbeafe', color:'#2563eb'}} onClick={() => setSelected(null)}>
            Ask another question
          </button>
        </div>
      )}
    </div>
  );
}
