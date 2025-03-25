
import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ title, description, duration = 5000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Allow time for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? 'toast-visible' : 'toast-hidden'}`}>
      <div className="toast-content">
        {title && <h4 className="toast-title">{title}</h4>}
        {description && <p className="toast-description">{description}</p>}
      </div>
    </div>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export { Toast, ToastContainer };
