import React, { useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && event.target === modalRef.current.parentNode) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div ref={modalRef} className="modal__container">
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
