/* eslint-disable @next/next/no-img-element */
import styles from './infoTikets.module.css';
import { BiWorld } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsTelegram, BsFacebook, BsPinFill } from 'react-icons/bs';
import { RiCopyleftLine } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import React from 'react';
import Carousel from '../carousel';

export const InfoTikets = () => {
  return (
      <>
      <h2 className={styles.title}>Esta vez el salmorejo en Cruces de Mayo</h2>
      <h1 className={styles.subTitle}>¿Hay algo más Cordobés?</h1>
      <div className={styles.row_wrapper}>
        <div className={styles.SM}>
          <p>Vuelve el evento teconológico con sabor cordobés. 
            El 28 de Abril coincidiendo con las cruces de mayo.
            Disfruta de los mejores profesionales del sector tecnológico
            durante esta fiesta cordobesa que inunda la ciudad<br></br></p>
            
            <p className={styles.centered}><br></br>
            +400 asistentes<br></br>
            13 ponencias<br></br>
            🥐 Desayuno, 🥘 Almuerzo y 🍻 Networking <br></br>
            GRATIS<br></br>
            <br></br></p>

            <p>Un evento para la comunidad por los miemros del aula de software libre (link a la sección de equipo)</p>
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