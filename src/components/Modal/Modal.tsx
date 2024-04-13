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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded relative w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <button
          onClick={onClose}
          className="relative m-2 ml-auto mt-0 block text-black text-xl"
        >
          <span className="sr-only">Закрыть</span>
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
