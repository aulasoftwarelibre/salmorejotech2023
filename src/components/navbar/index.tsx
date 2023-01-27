/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize';
import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const contents = [
    {
      title: "Información",
      href: "#info",
    },
    {
      title: "Localización",
      href: "#where",
    },
    {
      title: "Ponentes",
      href: "#speakers",
    },
    {
      title: "Sponsors",
      href: "#sponsors",
    }
  ]

  const [isLowWidth, setLowWitdhCheck] = useState<boolean>(false);
  const {width} = useWindowSize();
  
  useEffect(() => {
    setLowWitdhCheck(width < 823);
  }, [width])

  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const toggleShown = () => {
    setShowNavbar(!showNavbar);
  }

  const formated_sections = <>
    {contents.map(content => (
      <Link key={`nav-${content.title}`} href={content.href}>
            <h2>{content.title}</h2>
      </Link>
    ))}
  </>

  const compactNavbar: JSX.Element | null = showNavbar ? (
    <div className={styles.compact_background} onClick={toggleShown}>
     {formated_sections} 
    </div>
  ): null;

  if (isLowWidth) {
    return (
    <>
    <header className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <Link href="/"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></Link>
          </div>
          <div id="compact-navbar" className={styles.base_compact}>
            {compactNavbar}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.emphasis}>
            <Link href="/team"><h2>Equipo</h2></Link>
            <Link href="/"><h2>Entradas</h2></Link>
          </div>
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleShown}/>
        </div>
      </nav>
    </header>
    </>
    )
  }

  return (
    <>
    <header className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <Link href="/"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></Link>
          </div>
            {formated_sections}
        </div>
        <div className={styles.right}>
          <div className={styles.emphasis}>
            <Link href="/team"><h2>Equipo</h2></Link>
            <Link href="/"><h2>Entradas</h2></Link>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar;
