/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { Moleculas } from '../components/moleculas'
import Navbar from '../components/navbar'
import SpeakersGrid from '../components/speakers/grid'
import WhiteSection from '../components/whiteSection'
import styles from '../styles/team.module.css'


import team from '../../data/team.json';
import { SpeakerProps } from '../components/speakers'

const Team: NextPage = () => {

  const navbarContents = [
    {
      title: "Equipo",
      href: "#team",
      emphasised: false,
    },
    {
      title: "Aula Software Libre",
      href: "#asl",
      emphasised: false,
    },
    {
      title: "Contacto",
      href: "#contact",
      emphasised: false,
    },
    {
      title: "Entradas",
      href: "/",
      emphasised: true,
    },
    {
      title: "Landing",
      href: "/",
      emphasised: true,
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Equipo - Salmorejo Tech 2023</title>
      </Head>

      <main>
        <Navbar contents={navbarContents} variant='secondary'/>
        <Moleculas/>
          <section id="team-hero" className={styles.hero}>
            <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
            <h1 className={styles.heroSubtitle}>Todo es más fácil cuando tienes un equipo lleno de crácks!</h1>
          </section>

          <section id="team" className={styles.section}>
            <h1 className={styles.sectionTitle}>Team</h1>
            <SpeakersGrid speakers={team as SpeakerProps[]}/>
          </section>

          <WhiteSection id="asl" className={styles.section}>
            <h1 className={`${styles.sectionTitle} ${styles.black}`}>Aula de Software Libre</h1>
          </WhiteSection>
          
          <section id="contact" className={styles.section}>
            <h1 className={styles.sectionTitle}>Contacto</h1>
          </section>
        <div className='anchoMaximo'>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Team
