/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import styles from './button.module.css';
import { withBasePath } from '../../lib/withBasePath';

type ButtonProps = {
  label: string,
  href: string,
}

const Button = ({label, href}: ButtonProps) => {
  return (
    <Fragment>
      <img className={styles.tiket} src={withBasePath('/images/tiket.svg')} alt="Tiket" />
      <a className={styles.button} href={href} rel="noreferrer" target="_blank">
        <p>{label}</p>
      </a>
    </Fragment>
  )
}

export default Button;