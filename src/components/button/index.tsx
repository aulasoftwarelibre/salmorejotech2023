/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string,
  href: string,
}

const Button = ({label, href}: ButtonProps) => {
  return (<>
    <img className={styles.tiket} src='/images/tiket.svg' alt="Tiket" />
    <a className={styles.button} href={href} rel="noreferrer" target="_blank">
      <p>{label}</p>
    </a></>
  )
}

export default Button;