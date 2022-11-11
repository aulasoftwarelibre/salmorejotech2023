/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from './navbar.module.css';
import Image from 'next/image';


export const Navbar = () => {
  return (
    <header className={styles.main}>
      <nav className={styles.nav}>
        <div>
          <Link href="/"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></Link>
          <Link href="/"><h1>Información</h1></Link>
          <Link href="/"><h1>Localización</h1></Link>
          <Link href="/"><h1>Ponentes</h1></Link>
          <Link href="/"><h1>Sponsors</h1></Link>
        </div>
        <div className={styles.emphasis}>
          <Link href="/team"><h1>Equipo</h1></Link>
          <Link href="/"><h1>Entradas</h1></Link>
        </div>
      </nav>
    </header>
  )
}