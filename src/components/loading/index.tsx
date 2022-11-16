import React from 'react'
import styles from './loading.module.css'


export default function Loading() {
  
  return (
    <div className={styles.fondo}>
      <div className={styles.tapa}></div>
      <img className={styles.tomate} src='/sprites/tomateForLoadingAnimation.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
      <img className={styles.logo} src='/sprites/isologo-blanco-sin-tomate.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
    </div>
  )
}