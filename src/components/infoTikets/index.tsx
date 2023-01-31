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
              {src: '/photos/i1.jpg', alt: 'equipo aula de software libre'},
              {src: '/photos/i2.jpg', alt: 'ponencia salmorejoTech'},
              {src: '/photos/i3.jpg', alt: 'recepción'},
              {src: '/photos/i4.jpg', alt: 'ponencia juan tomas'},
              {src: '/photos/i5.jpg', alt: 'ponencia carmen ansio'},
              {src: '/photos/i6.jpg', alt: 'carpa networking'},
              {src: '/photos/i7.jpg', alt: 'equipo aula de software libre y adrian bolonio'},
              {src: '/photos/i8.jpg', alt: 'carpa networking'},
              {src: '/photos/i9.jpg', alt: 'ponencia javi velasco'},
              {src: '/photos/i10.jpg', alt: 'público salmorejoTech'},
              {src: '/photos/i11.jpg', alt: 'carpa networking'},
            ]}
          />
        </div>
      </div>
      <h1 className={styles.title}>¡La mejor ubicación!</h1>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>Volvemos al <strong>rectorado de la Universidad de cordoba</strong> a celebrar la cuarta edición de nuestro congreso con <strong>¡más sorpresas y más salmorejo!</strong></p>
        </div>
          <div className={styles.responsiveMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.4784613139254!2d-4.789346679821876!3d37.88469009468491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf60e271dc79%3A0xde994cae3981bc29!2sUniversity%20of%20Cordoba!5e0!3m2!1sen!2ses!4v1675175766697!5m2!1sen!2ses" width="600" height="450" ></iframe>
          </div>
          <ul className={styles.centered}>
            <li>Avenida de Medina Azahara, 5 Cordoba 14005, España</li>
          </ul>
      </div>
    </>
  )
}