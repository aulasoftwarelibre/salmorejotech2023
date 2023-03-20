/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from './loading.module.css'


export default function Loading() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className={styles.fondo}>
      <div className={styles.tapa}></div>
      <img className={styles.tomate} src='/sprites/tomateForLoadingAnimation.svg' alt="Salmorejo Tech" />
      <img className={styles.logo} src='/sprites/isologo-blanco-sin-tomate.svg' alt="Salmorejo Tech" />
    </div>
  )
}