import React from "react";
import styles from "./styles.module.css";

const IconButton = ({ children, handleClick }) => (
  <button type="button" className={styles.iconButton} onClick={handleClick}>
    {children}
  </button>
);

export default IconButton;
