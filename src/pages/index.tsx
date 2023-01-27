/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Button from '../components/button'
import { Footer } from '../components/footer'
import SpeakersGrid from '../components/speakers/grid'
import Loading from '../components/loading'
import { Moleculas } from '../components/moleculas'
import { Navbar } from '../components/navbar'
import Sponsors from '../components/sponsors'
import { useContentWritter } from '../hooks/useContentWritter'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {

  const possibleContents = [
      'Cordobés...',
      'Tecnológico...',
      'Salmorejo...'
  ]

  const content = useContentWritter({ contents: possibleContents });

  return (
    <><Head>
      <title>Salmorejo Tech 2023</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />

      {/** Meta Info General*/}
      <meta name="description" content="SalmorejoTech es un evento tecnológico para todos aquellos dispuestos a aprender" />
      <meta name="keywords"
        content="evento, ASL, salmorejo, salmorejotech, tech, salmorejotech2023, 2023, salmorejotech2022, 2022, salmorejotech2021, congreso, mesa redonda, conferencia, libre, software libre" />
      <link rel="canonical" href="https://salmorejo.tech" />
    </Head>
    <main>
      <Navbar />
      <Loading /> 
      <Moleculas />
      <div className='anchoMaximo'>
        <section id="Hero" className={styles.hero}>
          <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
          <h3 className={styles.subtitle}>Más <span>{content}</span></h3>
          <h2 className={styles.date}>28 de abril de 2023</h2>
          <div className={styles.centerTicketsButton}>
            <Button label="ENTRADAS" />
          </div>
        </section>
      </div>

      {/** <SpeakersGrid /> */}
      <section id="Solo estoy para separar footer de hero" style={{ display: "block", height: "10vw" }} />

      <Sponsors />

      <div className='anchoMaximo'>
        <Footer />
      </div>
    </main></>
  )
}

export default Home