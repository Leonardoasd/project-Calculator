import React from 'react';
import styles from "./Display.module.css"

const Display = ({ value }) => {
  return (
    <input type="text" value={value} className={styles.Display} readOnly />
  );
};

export default Display;
