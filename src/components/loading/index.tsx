import React from 'react'
import styles from './loading.module.css'


export default function Loading() {
  
  return (
    
    <div className={styles.fondo}>
      <section id="Hero" className={styles.hero}>
        <div className={styles.tapa}></div>
        <img className={styles.tomate} src='/sprites/tomateSolo.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
        <img className={styles.logo} src='/sprites/isologo-blanco-sin-tomate.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
      </section>
    </div>
  )
}