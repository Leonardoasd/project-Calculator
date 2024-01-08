import React from 'react';
import styles from "./Button.module.css";

const Button = ({ onClick, value , nombre}) => {
  return (
    <button onClick={() => onClick(value)} id={nombre} className={styles[nombre]} >
      {value}
    </button>
  );
};

export default Button;
