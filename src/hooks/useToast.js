
import { useState, useCallback } from 'react';

let id = 0;

function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, duration = 5000 }) => {
    const toastId = id++;
    
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: toastId,
        title,
        description,
        duration
      }
    ]);

    return toastId;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
  }, []);

  return { toast, toasts, removeToast };
}

export { useToast };
