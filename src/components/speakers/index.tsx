/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './speakers.module.css'
import { BsTwitter, BsGithub, BsLinkedin, BsGlobe, BsYoutube } from 'react-icons/bs';

export interface Contact {
  type: 'TWITTER'|'WEB'|'LINKEDIN'|'GITHUB'|'YOUTUBE',
  link: string,
}

export interface SpeakerProps {
  name: string;
  bio: string;
  urlPhoto: string;
  contacts: Array<Contact>;
}

const LinkTypeAsIcon = {
  'TWITTER': <BsTwitter aria-hidden/>,
  'WEB': <BsGlobe aria-hidden/>,
  'LINKEDIN': <BsLinkedin aria-hidden/>,
  'GITHUB': <BsGithub aria-hidden/>,
  'YOUTUBE': <BsYoutube aria-hidden/>
}

export const SpeakerCard = ({name, bio, urlPhoto, contacts}:  SpeakerProps) => {

  const renderContactLink = (contact: Contact) => {
    if(!LinkTypeAsIcon[contact.type]) return;

    let label = `Perfil de ${name} en ${contact.type}`
    
    if (contact.type === 'WEB') label = `Pagina web de ${name}`;
    if (contact.type === 'YOUTUBE') label = `Canal de youtube de ${name}`;
    
    return (
      <a 
        key={`${name}-${contact.type}`}
        className={styles[contact.type.toLowerCase()]} 
        href={contact.link} 
        aria-label={label}
      >
        {LinkTypeAsIcon[contact.type]}
      </a>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.speakerImage} src={urlPhoto} alt={`Foto de ${name}`} />
      <div className={styles.cardInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
      <div className={styles.socialMedia}>
        {contacts.map(contact => renderContactLink(contact))}
      </div>
    </div>
  )
}