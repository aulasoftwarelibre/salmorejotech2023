/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string,
}

const Button = ({label}: ButtonProps) => {
  return (
    <button
      type="button"
      className={styles.button}>
      <p>{label}</p>
    </button>
  )
}

export default Button;