/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize';
import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


interface Link {
  title: string,
  href: string,
  emphasised: boolean,
}

interface NavbarProps {
  contents: Link[],
  variant?: 'primary' | 'secondary',
} 

const Navbar = ({contents, variant='primary'}: NavbarProps) => {
  const nonEmphasisedContents = contents.filter(content => !content.emphasised);
  const emphasisedContents = contents.filter(content => content.emphasised);

  const mainClasses = `${styles.main} ${variant === 'secondary' ? styles.purple : ''}`

  const [isLowWidth, setLowWitdhCheck] = useState<boolean>(false);
  const {width} = useWindowSize();
  
  useEffect(() => {
    setLowWitdhCheck(width < 823);
  }, [width])

  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const toggleShown = () => {
    setShowNavbar(!showNavbar);
  }

  const formatedNonEmphasisedLinks = <>
    {nonEmphasisedContents.map(content => (
      <a key={`nav-${content.title}`} href={content.href}>
            <h2 className={styles.link}>{content.title}</h2>
      </a>
    ))}
  </>

  const formatedEmphasisedLinks = (
    <div className={styles.emphasis}>
      {emphasisedContents.map(content => (
        <a key={`nav-${content.title}`} href={content.href}>
          <h2 className={styles.link}>{content.title}</h2>
        </a>
      ))}
    </div>
  )

  const compactNavbar: JSX.Element | null = showNavbar ? (
    <div className={styles.compact_background} onClick={toggleShown}>
     {formatedNonEmphasisedLinks} 
    </div>
  ): null;

  if (isLowWidth) {
    return (
    <div className={mainClasses}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <a href="#Hero"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></a>
          </div>
          <div id="compact-navbar" className={styles.base_compact}>
            {compactNavbar}
          </div>
        </div>
        <div className={styles.right}>
          {formatedEmphasisedLinks}
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleShown}/>
        </div>
      </nav>
    </div>
    )
  }

  return (
    <div className={mainClasses}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <a href="#Hero"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></a>
          </div>
            {formatedNonEmphasisedLinks}
        </div>
        <div className={styles.right}>
          {formatedEmphasisedLinks}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
