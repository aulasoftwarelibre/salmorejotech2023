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
} 

const Navbar = ({contents}: NavbarProps) => {
  const nonEmphasisedContents = contents.filter(content => !content.emphasised);
  const emphasisedContents = contents.filter(content => content.emphasised);

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
      <Link key={`nav-${content.title}`} href={content.href}>
            <h2>{content.title}</h2>
      </Link>
    ))}
  </>

  const formatedEmphasisedLinks = (
    <div className={styles.emphasis}>
      {emphasisedContents.map(content => (
        <Link key={`nav-${content.title}`} href={content.href}>
          <h2>{content.title}</h2>
        </Link>
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
    <div className={styles.main}>
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
          {formatedEmphasisedLinks}
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleShown}/>
        </div>
      </nav>
    </div>
    )
  }

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.icon}>
              <Link href="/"><img src='/sprites/isotipo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" /></Link>
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
