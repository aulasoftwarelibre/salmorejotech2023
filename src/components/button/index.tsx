/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string,
}

const Button = ({label}: ButtonProps) => {
  return (
    <>
    <img className={styles.tiket} src='/images/tiket.svg' alt="Tiket" />
    <div className={styles.button}>
      <p>{label}</p>
    </div>
    </>
  )
}

export default Button;