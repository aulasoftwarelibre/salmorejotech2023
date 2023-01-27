/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './speakers.module.css'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

export interface SpeakerProps {
  name: string;
  bio: string;
  urlPhoto: string;
  contacts: Array<{ type: string, link: string }>;
}

export const SpeakerCard = ({name, bio, urlPhoto, contacts}:  SpeakerProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.speakerImage} src={urlPhoto} alt="Imagen del ponente" />
      <div className={styles.cardInfo}>
        <p className={styles.title}>{name}</p>
        <p className={styles.subtitle}>{bio}</p>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter /></a>
        <a href="https://github.com/aulasoftwarelibre"><BsGithub /></a>
        <a href="https://www.linkedin.com/company/aulasoftwarelibre/mycompany/"><BsLinkedin /></a>
      </div>
    </div>
  )
}