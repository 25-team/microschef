import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  return <input className={styles.input} type="text" {...props} />;
};

export default InputField;
