import React, { useState } from "react";
import styles from './gridPonentes.module.css'
import Image from 'next/image';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

type Speaker = {
  id: string,
  name: string,
  bio: string,
  urlPhoto: string,
  contacts: Array<{ type: string, link: string }>,
}

function SpeakerCard(props: { id: string, name: string, bio: string, urlPhoto: string, contacts: Array<{ type: string, link: string }> }) {
  return (
    <div className={styles.card}>
      <Image className={styles.speakerImage} src={props.urlPhoto} alt="Imagen del ponente" width={280} height={280} />
      <div className={styles.cardInfo}>
        <p className={styles.title}>{props.name}</p>
        <p className={styles.subtitle}>{props.bio}</p>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter /></a>
        <a href="https://github.com/aulasoftwarelibre"><BsGithub /></a>
        <a href="https://www.linkedin.com/company/aulasoftwarelibre/mycompany/"><BsLinkedin /></a>
      </div>
    </div>
  )
}


export default function SpeakerGrid() {
  const [speakers, setSpeakers] = useState<Array<Speaker>>(new Array());
  return (
    <>
      <div className={styles.container}>
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Juanjo"}
          bio={"El de las vistas"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/eduSatoe.jpg"}
          contacts={[]}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Leiva"}
          bio={"El de neón"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/paulaGarcia.jpg"}
          contacts={[]}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Tomás"}
          bio={"El xulacoh"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/javiVelasco.jpg"}
          contacts={[]}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Arturo"}
          bio={"El monumento ;)"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/davidBonilla.jpg"}
          contacts={[]}
        />
      </div>
    </>
  )
}