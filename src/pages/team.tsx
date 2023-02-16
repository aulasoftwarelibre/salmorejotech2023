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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        
        {/** Meta Info General*/}
        <meta name="description" content="SalmorejoTech es un evento tecnológico para todos aquellos dispuestos a aprender" />
        <meta name="keywords"
          content="evento, ASL, salmorejo, salmorejotech, tech, salmorejotech2023, 2023, salmorejotech2022, 2022, salmorejotech2021, congreso, mesa redonda, conferencia, libre, software libre" />
        <link rel="canonical" href="https://salmorejo.tech" />
      </Head>

      <main>
        <Navbar contents={navbarContents} variant='secondary'/>
        <Moleculas/>
          <section id="team-hero" className={styles.hero}>
            <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
            <h1 className={styles.heroSubtitle}>Todo es más fácil cuando tienes un equipo lleno de crácks!</h1>
          </section>

          <section id="team" className={styles.section}>
            <h1 className={styles.sectionTitle}>🍅 Un equipo increíble 🍅</h1>
            <TeamMembersGrid teamMembers={team as TeamMemberProps[]}/>
          </section>

          <WhiteSection id="asl" className={styles.section}>
            <h1 className={`${styles.sectionTitle} ${styles.black}`}>🐧Aula de Software Libre🐧</h1>
            <div className={styles.wrapper}>
              <div className={`${styles.column} ${styles.imageWrapper}`}>
                <img src="/images/logo-aula-negro.png" alt="Logo del aula de software libre"/>
              </div>
              <div className={`${styles.column} ${styles.aulaInfo}`}>
                <h2 className={styles.title}>Más que un grupo de estudiantes🚀</h2>
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
