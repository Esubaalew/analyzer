import React from 'react';
import '../styles/ComingSoon.css'; 
import icon from '../assets/icon.jpg';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img src={icon} alt="Icon" className="coming-soon-icon" />
      <h1>Coming Soon!</h1>
      <p>Get ready to unlock insights into your Telegram chats! The upcoming Telegram Data Analyzer will transform your conversations into actionable data. Stay tuned!</p>
    </div>
  );
};

export default ComingSoon;
