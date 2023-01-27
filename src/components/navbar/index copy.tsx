/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from './navbar.module.css';
import Image from 'next/image';
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <header className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <Link href="/"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></Link>
          </div>
          <div className={styles.links}>
            <Link href="/"><h2>Información</h2></Link>
            <Link href="/"><h2>Localización</h2></Link>
            <Link href="/"><h2>Ponentes</h2></Link>
            <Link href="/"><h2>Sponsors</h2></Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.emphasis}>
            <Link href="/team"><h2>Equipo</h2></Link>
            <Link href="/"><h2>Entradas</h2></Link>
          </div>
          <GiHamburgerMenu className={styles.hamburger}/>
        </div>
      </nav>
      <div id="fullScreen"></div>
    </header>
  )
}