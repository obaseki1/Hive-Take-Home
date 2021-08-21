import React from 'react';
import './Step.css';
function Step({ pic, title, caption }) {
  return (
    <div className="step">
      <img src={pic} />
      <div className="step-bottom">
        <span className="step-title">{title}</span>
        <span className="step-caption">{caption}</span>
      </div>
    </div>
  );
}

export default Step;
