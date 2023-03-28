/* eslint-disable @next/next/no-img-element */
import styles from './footer.module.css';
import { BiWorld } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsTelegram, BsFacebook, BsPinFill } from 'react-icons/bs';
import { RiCopyleftLine } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import React from 'react';

export const Footer = () => {
  return (
    <footer className={styles.footer} id="Footer">
      <div className={styles.row_wrapper}>
        <section className={styles.SM} id="SocialMedia">
          <img className={styles.logo}
            src="/images/logo-cuadrado-invertido-blender.svg"
            alt="Logo del Aula de Software Libre"
          />
        </section>
        <section className={styles.Contact_us} id="Contact us">
          <h1>¡Encuentranos!</h1>
          <a href="mailto:aulasoftwarelibre@uco.es" className={styles.contact} rel="noreferrer" target="_blank">
            <GrMail /> aulasoftwarelibre@uco.es
          </a>
          <a href="https://g.page/aulasoftwarelibre?share" className={styles.contact} rel="noreferrer" target="_blank">
            <BsPinFill/> Aulario Averroes. Campus Rabanales
          </a>
          <div className={styles.icons}>
            <a aria-label="Perfil del Aula de Software Libre en Twitter" rel="noreferrer" target="_blank" href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter aria-hidden/></a>
            <a aria-label="Perfil del Aula de Software Libre en Instagram" rel="noreferrer" target="_blank" href="https://www.instagram.com/aulasoftwarelibre/"><BsInstagram aria-hidden/></a>
            <a aria-label="Perfil del Aula de Software Libre en Github" rel="noreferrer" target="_blank" href="https://github.com/aulasoftwarelibre"><BsGithub aria-hidden/></a>
            <a aria-label="Canal del Aula de Software Libre en Youtube" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCfWiR5j-cbKcGTi9faK8P6w"><BsYoutube aria-hidden/></a>
            <a aria-label="Grupo del Aula de Software Libre en Telegram" rel="noreferrer" target="_blank" href="https://t.me/AulaSoftwareLibreUCO"><BsTelegram aria-hidden/></a>
            <a aria-label="Perfil del Aula de Software Libre en Facebook" rel="noreferrer" target="_blank" href="https://www.facebook.com/AulaSoftwareLibre"><BsFacebook aria-hidden/></a>
            <a aria-label="Pagina web del Aula de Software Libre" rel="noreferrer" target="_blank" href="https://www.uco.es/aulasoftwarelibre/"><BiWorld aria-hidden/></a>
          </div>
        </section>
      </div>
      <section id="CopyLeft" className={styles.CopyLeft}>
        <p><RiCopyleftLine/> Aula de Software Libre. Universidad de Córdoba. </p>
      </section>
    </footer>
  )
}