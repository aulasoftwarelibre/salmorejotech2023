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

function SpeakerCard(props: { id: string, name: string, bio: string, urlPhoto: string, contacts: Array<{type: string, link: string}>, published: boolean }) {
  return (
    <article className={styles.speakerCard}>
      <div style={{display: "flex",marginBottom:10, justifyContent: "center"}}>
        <Image className={styles.speakerImage} src={props.urlPhoto} alt="Imagen del ponente" width={200} height={200}/>
      </div>
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
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
        contacts={""}
        published={true}
      />
      <SpeakerCard
        key={4534634}
        id={"6e5436"}
        name={"Leiva"}
        bio={"El de neón"}
        urlPhoto={"https://pbs.twimg.com/profile_images/1451939478810005510/H1Ql5yYD_400x400.jpg"}
        contacts={""}
        published={false}
      />
      <SpeakerCard
        key={4534634}
        id={"6e5436"}
        name={"Tomás"}
        bio={"El xulacoh"}
        urlPhoto={"https://pbs.twimg.com/profile_images/1428402345910706181/6v9LHnxJ_400x400.jpg"}
        contacts={""}
        published={false}
      />
      <SpeakerCard
        key={4534634}
        id={"6e5436"}
        name={"Arturo"}
        bio={"El monumento ;)"}
        urlPhoto={"https://pbs.twimg.com/profile_images/1414362780996673540/hHSRLMfQ_400x400.jpg"}
        contacts={""}
        published={true}
      />
      </div>
    </>
  )
}