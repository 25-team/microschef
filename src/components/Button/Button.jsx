import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, isLoading, disabled, variant = "default", ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${isLoading ? styles.loading : ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "..." : children}
    </button>
  );
};

export default Button;
