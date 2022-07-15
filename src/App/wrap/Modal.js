import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return function cleanUp() {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleEscapeKey = (event) => {
    event.code === "Escape" && closeModal();
  };

  const handleBackdropClick = (event) => {
    event.target === event.currentTarget && closeModal();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalWimdow}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
