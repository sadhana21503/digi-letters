import React from 'react';
import './Popup.scss';

const Popup = ({ title,  onClose }) => {
  return (
    <section className="popup-overlay" onClick={onClose}>
      <section className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>Number of Letters: 4</p>
        <button onClick={onClose}>Close</button>
      </section>
    </section>
  );
};

export default Popup;