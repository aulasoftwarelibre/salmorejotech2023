import React, { useEffect, useState } from "react";
import styles from './gridPonentes.module.css'
import axios from 'axios';
import Image from 'next/image';
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
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <Image className={styles.speakerImage} src={props.urlPhoto} alt="Imagen del ponente" width={280} height={280} />
      </div>
      <ul className={styles.socialMedia}>
        <li><svg className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"></path>
        </svg></li>
        <li className={styles.background}><svg className={styles.svg} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
        </svg></li>
        <li><svg className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
        </svg></li>
      </ul>
      <div className={styles.cardInfo}>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.subtitle}>{props.bio}</p>
      </div>

    </article>
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
          urlPhoto={"https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg"}
          contacts={[]}
          published={true}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Leiva"}
          bio={"El de neón"}
          urlPhoto={"https://pbs.twimg.com/profile_images/1451939478810005510/H1Ql5yYD_400x400.jpg"}
          contacts={[]}
          published={false}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Tomás"}
          bio={"El xulacoh"}
          urlPhoto={"https://pbs.twimg.com/profile_images/1428402345910706181/6v9LHnxJ_400x400.jpg"}
          contacts={[]}
          published={false}
        />
        <SpeakerCard
          key={4534634}
          id={"6e5436"}
          name={"Arturo"}
          bio={"El monumento ;)"}
          urlPhoto={"https://pbs.twimg.com/profile_images/1414362780996673540/hHSRLMfQ_400x400.jpg"}
          contacts={[]}
          published={true}
        />
      </div>
    </>
  )
}