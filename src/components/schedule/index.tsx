import React, { useEffect, useState } from "react";
import styles from './schedule.module.css'
import Image from 'next/image';

type Speaker = {
  id: string,
  name: string,
  bio: string,
  urlPhoto: string,
  contacts: Array<{ type: string, link: string }>,
  published: boolean,
}

export default function SpeakerCard(props: { id: string, name: string, bio: string, urlPhoto: string, contacts: Array<{type: string, link: string}>, published: boolean }) {
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
