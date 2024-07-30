// Modal.js
import React from 'react';


const Modal = ({ isOpen, onClose, imageSrc, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {imageSrc && <img src={imageSrc} alt="Modal Content" className="modal-image" />}
        {message && <p className="modal-message">{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
