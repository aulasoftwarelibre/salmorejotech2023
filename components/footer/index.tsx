/* eslint-disable @next/next/no-img-element */
import styles from './footer.module.css';
import { BiWorld } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsTelegram, BsFacebook, BsPinFill } from 'react-icons/bs';
import { RiCopyleftLine } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

export const Footer = () => {
  return (
    <footer className={styles.footer} id="Footer">
      <div className={styles.row_wrapper}>
        <section className={styles.SM} id="SocialMedia">
          <img
            className={styles.logo}
            src="/images/logo-aula-blanco.png"
            alt="Logo del Aula de Software Libre"
          />
          <div className={styles.icons}>
            <a><BsTwitter /></a>
            <a><BsInstagram /></a>
            <a><BsGithub /></a>
            <a><BsYoutube /></a>
            <a><BsTelegram /></a>
            <a><BsFacebook /></a>
            <a><BiWorld /></a>

          </div>
        </section>
        <section className={styles.Contact_us} id="Contact us">
          <h1>¡Encuentranos!</h1>
          <a className={styles.contact}>
            <GrMail /> aulasoftwarelibre@uco.es
          </a>
          <a className={styles.contact}>
            <BsPinFill/> Aulario Averroes. Campus Rabanales
          </a>
        </section>
      </div>
      <section id="CopyLeft" className={styles.CopyLeft}>
        <p><RiCopyleftLine/> Aula de Software Libre. Universidad de Córdoba. </p>
      </section>
    </footer>
  )
}