/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './speakers.module.css'
import { BsTwitter, BsGithub, BsLinkedin, BsGlobe } from 'react-icons/bs';

export interface Contact {
  type: 'TWITTER'|'WEB'|'LINKEDIN'|'GITHUB',
  link: string,
}

export interface SpeakerProps {
  name: string;
  bio: string;
  urlPhoto: string;
  contacts: Array<Contact>;
}

const LinkTypeAsIcon = {
  'TWITTER': <BsTwitter/>,
  'WEB': <BsGlobe/>,
  'LINKEDIN': <BsLinkedin/>,
  'GITHUB': <BsGithub/>,
}

export const SpeakerCard = ({name, bio, urlPhoto, contacts}:  SpeakerProps) => {

  const renderContactLink = (index: number, contact: Contact) => {
    if(!LinkTypeAsIcon[contact.type]) return;
    return (
      <a 
        key={`${index}_${name}-${contact.type}`}
        className={styles[contact.type.toLowerCase()]} 
        href={contact.link} 
        aria-label={`${name}'s link for ${contact.type}`}
        rel="noreferrer" target="_blank"
      >
        {LinkTypeAsIcon[contact.type]}
      </a>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.speakerImage} src={urlPhoto} alt="Imagen del ponente" />
      <div className={styles.cardInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
      <div className={styles.socialMedia}>
        {contacts.map((contact, index) => renderContactLink(index, contact))}
      </div>
    </div>
  )
}