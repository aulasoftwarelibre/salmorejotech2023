/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string,
}

const Button = ({label}: ButtonProps) => {
  return (
    <Fragment>
    <img className={styles.tiket} src='/images/tiket.svg' alt="Tiket" />
    <div className={styles.button}>
      <p>{label}</p>
    </div>
    </Fragment>
  )
}

export default Button;