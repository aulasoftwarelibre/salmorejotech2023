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
            src="/images/logo-cuadrado-invertido-blender.svg"
            alt="Logo del Aula de Software Libre"
          />
          <div className={styles.icons}>
            <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter /></a>
            <a href="https://www.instagram.com/aulasoftwarelibre/"><BsInstagram /></a>
            <a href="https://github.com/aulasoftwarelibre"><BsGithub /></a>
            <a href="https://www.youtube.com/channel/UCfWiR5j-cbKcGTi9faK8P6w"><BsYoutube /></a>
            <a href="https://t.me/AulaSoftwareLibreUCO"><BsTelegram /></a>
            <a href="https://www.facebook.com/AulaSoftwareLibre"><BsFacebook /></a>
            <a href="https://www.uco.es/aulasoftwarelibre/"><BiWorld /></a>

          </div>
        </section>
        <section className={styles.Contact_us} id="Contact us">
          <h1>¡Encuentranos!</h1>
          <a href="mailto:aulasoftwarelibre@uco.es" className={styles.contact} rel="noreferrer">
            <GrMail /> aulasoftwarelibre@uco.es
          </a>
          <a href="https://g.page/aulasoftwarelibre?share" className={styles.contact} rel="noreferrer">
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