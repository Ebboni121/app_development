// User.js
import React, { useState } from 'react';
import Modal from './modal'; // Import the Modal component

const User = ({ image, name, date, comments, message }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card">
      <img 
        src={image} 
        alt={name} 
        className="user-image" 
        onClick={openModal} 
        style={{ cursor: 'pointer' }}
      />
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{comments}</p>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc={image}
        message={message}
      />
    </div>
  );
};

export default User;
