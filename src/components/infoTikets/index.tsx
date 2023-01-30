/* eslint-disable @next/next/no-img-element */
import styles from './infoTikets.module.css';
import { BiWorld } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsTelegram, BsFacebook, BsPinFill } from 'react-icons/bs';
import { RiCopyleftLine } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import React from 'react';
import Carousel from '../carousel';
import Link from 'next/link';

export const InfoTikets = () => {
  return (
      <>
      <div className={styles.row_wrapper}>
        <div className={styles.text}>
          <p>Vuelve el <strong>evento teconológico con sabor cordobés. El 28 de Abril</strong> coincidiendo con las <strong>cruces de mayo</strong>. Disfruta de los mejores profesionales del sector durante esta fiesta cordobesa que inunda la ciudad.</p>
          <ul className={styles.centered}>
            <li>+400 asistentes</li>
            <li>13 ponencias</li>
            <li>🥐 Desayuno, 🥘 Almuerzo y 🍻 Networking</li>
            <li className={styles.emphasis}>GRATIS</li>
          </ul>
          <p className={styles.aula}>Un evento para la comunidad por los <strong><Link href="/team">miembros del aula de software libre</Link></strong></p>
        </div>
        <div className={styles.carousel}>
          <Carousel
            images={[
              {src: '/images/s1.jpg', alt: 'some-alt'},
              {src: '/images/s2.jpg', alt: 'some-alt'},
              {src: '/images/s3.jpg', alt: 'some-alt'}
            ]}
          />
        </div>
    </div>
    </>
  )
}