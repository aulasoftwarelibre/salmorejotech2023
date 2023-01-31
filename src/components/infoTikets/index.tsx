/* eslint-disable @next/next/no-img-element */
import styles from './infoTikets.module.css';
import React from 'react';
import Carousel from '../carousel';
import Link from 'next/link';

export const InfoTikets = () => {
  return (
      <>
      <div className={styles.info}>
        <div className={styles.text}>
          <p>Vuelve el <strong>evento teconológico con sabor cordobés. El 28 de Abril</strong> coincidiendo con las <strong>cruces de mayo</strong>. Disfruta de los mejores profesionales del sector durante esta fiesta cordobesa que inunda la ciudad.</p>
          <ul className={styles.centered}>
            <li>+400 asistentes</li>
            <li>13 ponencias</li>
            <li>🥐 Desayuno, 🥘 Almuerzo y 🍻 Networking</li>
            <li className={styles.emphasis}>GRATIS</li>
          </ul>
          <p className={styles.aula}>Un evento para la comunidad por los <Link href="/team">miembros del aula de software libre</Link></p>
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
    </>
  )
}