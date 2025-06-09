// src/components/CalendlyModal.js
import React from 'react';
import { PopupModal } from 'react-calendly';

const CalendlyModal = ({ onClose }) => {
  return (
    <PopupModal
      url="https://calendly.com/productera/insightagent-demo"
      onModalClose={onClose}
      open={true}
      rootElement={document.getElementById('root')}
    />
  );
};

export default CalendlyModal;