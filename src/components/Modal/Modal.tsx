import React, { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__container">
        <button
          onClick={onClose}
          className="modal__button modal__button--close"
        >
          <span className="visually-hidden">Закрыть</span>
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
