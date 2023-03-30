/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { Fragment } from 'react'

import Button from '../components/button'
import { Footer } from '../components/footer'
import Loading from '../components/loading'
import { Moleculas } from '../components/moleculas'
import Navbar from '../components/navbar'

import { useContentWritter } from '../hooks/useContentWritter'

import SpeakersGrid from '../components/speakers/grid'
import speakers from '../../data/speakers.json'

import { SponsorsGrid } from '../components/sponsors/grid'
import sponsors from '../../data/sponsors.json'
import { SponsorProps } from '../components/sponsors'

import styles from '../styles/index.module.css'
import WhiteSection from '../components/whiteSection'
import { SpeakerProps } from '../components/speakers'
import { InfoTikets } from '../components/infoTikets'
import { Location } from '../components/location'
import { Schedule } from '../components/schedule'

const Home: NextPage = () => {

  const navbarContents = [
    {
      title: "Información",
      href: "#info",
      emphasised: false,
    },
    {
      title: "Localización",
      href: "#where",
      emphasised: false,
    },
    {
      title: "Ponentes",
      href: "#speakers",
      emphasised: false,
    },
    {
      title: "Sponsors",
      href: "#sponsors",
      emphasised: false,
    },
    {
      title: "Entradas",
      href: "https://www.eventbrite.es/e/entradas-salmorejotech-2023-535749429967",
      emphasised: true,
    },
    {
      title: "Equipo",
      href: "/team",
      emphasised: true,
    },
  ]

  const possibleContents = [
      'Cordobés...',
      'Tecnológico...',
      'Salmorejo...'
  ]

  const content = useContentWritter({ contents: possibleContents });

  return (
    <Fragment>
    <Head>
      <title>Salmorejo Tech 2023</title>
    </Head>
    <main>
      <Navbar contents={navbarContents}/>
      <Loading /> 
      <Moleculas />
      <div className='anchoMaximo'>
        <section id="Hero" className={styles.hero}>
          <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="logo-salmorejo-hero" alt="Logo de Salmorejo Tech" />
          <h1 style={{visibility: 'hidden', height: 0}}>Salmorejo Tech</h1>
          <h2 className={styles.subtitle}>Más <span>{content}</span></h2>
          <h2 className={styles.date}>28 de abril de 2023</h2>
          <div className={styles.centerTicketsButton}>
            <Button label="ENTRADAS" href="https://www.eventbrite.es/e/entradas-salmorejotech-2023-535749429967"/>
          </div>
        </section>
      </div>
      <section id="info" className={styles.section}>
        <h2 className={styles.sectionTitle}>Cruces de Mayo y Salmorejo</h2>
        <h3 className={styles.sectionSubTitle}>¿Hay algo más Cordobés?</h3>
        <InfoTikets/>
      </section>

      <section id="where" className={styles.section}>
        <h2 className={styles.sectionTitle}>¡La mejor ubicación!</h2>
        <h3 className={styles.sectionSubTitle}>Rectorado de la Universidad de Córdoba</h3>
        <Location/>
      </section>

      <WhiteSection id="schedule" className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.black}`}>Programa</h2>
        <Schedule />
      </WhiteSection>
      
      <section id="speakers" className={styles.section}>
        <h2 className={styles.sectionTitle}>Nuestros ponentes</h2>
        <SpeakersGrid speakers={speakers as SpeakerProps[]}/>
      </section>
      
      <WhiteSection id="sponsors" className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.black}`}>Sponsors</h2>
        <SponsorsGrid sponsors={sponsors as SponsorProps[]}/>
      </WhiteSection>

      <div className='anchoMaximo'>
        <Footer />
      </div>
    </main>
    </Fragment>
  )
}

export default Home