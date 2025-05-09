// src/components/CalendlyModal.js
import React from 'react';
import { PopupModal } from 'react-calendly';

const CalendlyModal = ({ isOpen, onClose }) => {
  return (
    <PopupModal
      url="https://calendly.com/productera/insightagent-demo"
      onModalClose={onClose}
      open={isOpen}
      rootElement={document.getElementById('root')}
    />
  );
};

export default CalendlyModal;