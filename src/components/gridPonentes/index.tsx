import React, { useEffect, useState } from "react";
import styles from './gridPonentes.module.css'
import axios from 'axios';
import Image from 'next/image';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsTelegram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { API_ROUTE } from "../../lib/data";

type Speaker = {
  id: string,
  name: string,
  bio: string,
  urlPhoto: string,
  contacts: Array<{ type: string, link: string }>,
  published: boolean,
}

function SpeakerCard(props: { id: string, name: string, bio: string, urlPhoto: string, contacts: Array<{ type: string, link: string }>, published: boolean }) {
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



// export default function GridPonentes() {

//   const [speakers, setSpeakers] = useState<Array<Speaker>>(new Array());

//   // useEffect va a "ejecutar" la funcion que le digamos cada vez que usemos este componente"
//   useEffect(() => {
//     axios
//       .get(API_ROUTE)
//       .then(response => {
//         //console.log(response)
//         if (response.status === 404) {
//           return;
//         }
//         const { data } = response;
//         const { content } = data;  // {data {msg, content}}
//         setSpeakers(content);
//         //console.log(speakers);
//       })
//       .catch(e => {})
//   }, [])

//   return (
//     <>
// <div className={styles.container}></div>
//       {speakers.map(
//         (speaker) => {
//           return <SpeakerCard
//             key={speaker.id}
//             id={speaker.id}
//             name={speaker.name}
//             bio={speaker.bio}
//             urlPhoto={speaker.urlPhoto}
//             contacts={speaker.contacts}
//             published={speaker.published}
//           />
//         })}
// </div>
//     </>
//   )
// }

// por si hay que hacer pruebas sin tener la api encendida
export default function GridPonentes() {
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
          published={true}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Leiva"}
          bio={"El de neón"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/paulaGarcia.jpg"}
          contacts={[]}
          published={false}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Tomás"}
          bio={"El xulacoh"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/javiVelasco.jpg"}
          contacts={[]}
          published={false}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Arturo"}
          bio={"El monumento ;)"}
          urlPhoto={"https://salmorejo.tech/2022/images/speakers/davidBonilla.jpg"}
          contacts={[]}
          published={true}
        />
      </div>
    </>
  )
}