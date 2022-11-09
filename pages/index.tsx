/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
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
    <div className={styles.container}>
      <Head>
        <title>Salmorejo Tech 2023</title>
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
        <section id="Hero" className={styles.hero}>
          <img className={styles.logo} src='/sprites/isologo-blanco.svg' id="LogoSalmorejo" alt="Salmorejo Tech" />
          <h3 className={styles.subtitle}>Más <span>{content}</span></h3>
          <h2 className={styles.date}>28 de abril de 2023</h2>
          <div className="boton"><button><p>ENTRADAS</p></button></div>
        </section>
        
        <div className="moleculas parallax bg1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        <div className="moleculas parallax bg7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        {/* <div className="moleculas parallax bg01">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div> */}
        <div className="moleculas parallax bg02">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        {/* <div className="moleculas parallax bg03">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div> */}
        <div className="moleculas parallax bg04">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        {/* <div className="moleculas parallax bg05">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div> */}
        {/* <div className="moleculas parallax bg06">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div> */}
        <div className="moleculas parallax bg07">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum atque assumenda rem maxime aut error? Neque quia, architecto molestias explicabo ex ipsum distinctio temporibus aut laudantium quisquam minus illo?</div>
        
        <section id="Solo estoy para separar footer de hero" style={{ display: "block", height: "50vh" }} />

        <Footer/>
      </main>
    </div>
  )
}

export default Home
