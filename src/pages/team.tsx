/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { Moleculas } from '../components/moleculas'
import Navbar from '../components/navbar'
import WhiteSection from '../components/whiteSection'
import styles from '../styles/team.module.css'


import team from '../../data/team.json';
import TeamMembersGrid from '../components/teamMember/grid'
import { TeamMemberProps } from '../components/teamMember'

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
      title: "Entradas",
      href: "https://www.eventbrite.es/e/entradas-salmorejotech-2023-535749429967",
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
            <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="logo-salmorejo-hero" alt="Logo de Salmorejo Tech" />
            <h1 style={{visibility: 'hidden', height: 0}}>Salmorejo Tech</h1>
            <h2 className={styles.heroSubtitle}>Todo es más fácil cuando tienes un equipo lleno de crácks!</h2>
          </section>

          <section id="team" className={styles.section}>
            {/* <h1 className={styles.sectionTitle}>🍅 Un equipo increíble 🍅</h1> */}
            <TeamMembersGrid teamMembers={team as TeamMemberProps[]}/>
          </section>

          <WhiteSection id="asl" className={styles.section}>
            <h2 className={`${styles.sectionTitle} ${styles.black}`}>🐧Aula de Software Libre🐧</h2>
            <div className={styles.wrapper}>
              <div className={`${styles.column} ${styles.imageWrapper}`}>
                <img src="/images/logo-aula-negro.png" alt="Logo del aula de software libre"/>
              </div>
              <div className={`${styles.column} ${styles.aulaInfo}`}>
                <h3 className={styles.title}>Más que un grupo de estudiantes🚀</h3>
                <p>El Aula de Software Libre es un espacio único y dinámico en el que se promueve el compartir conocimiento y el uso del software libre. A través de diversos eventos y actividades durante todo el año, nuestro objetivo es acercar a personas de todo tipo a las ventajas y la importancia del software libre.</p>
              </div>
            </div>
          </WhiteSection>
          
        <div className='anchoMaximo'>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Team
