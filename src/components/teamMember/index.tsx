/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './teamMembers.module.css'
import { BsTwitter, BsGithub, BsLinkedin, BsGlobe } from 'react-icons/bs';

export interface Contact {
  type: 'TWITTER'|'WEB'|'LINKEDIN'|'GITHUB',
  link: string,
}

export interface TeamMemberProps {
  name: string;
  rol: 'INFRASTRUCTURE' | 'MANAGEMENT' | 'MARKETING';
  bio: string;
  urlPhoto: string;
  contacts: Array<Contact>;
}

const LinkTypeAsIcon = {
  'TWITTER': <BsTwitter aria-hidden/>,
  'WEB': <BsGlobe aria-hidden/>,
  'LINKEDIN': <BsLinkedin aria-hidden/>,
  'GITHUB': <BsGithub aria-hidden/>,
}

export const TeamMemberCard = ({name, bio, urlPhoto, contacts}:  TeamMemberProps) => {

  const renderContactLink = (contact: Contact) => {
    if(!LinkTypeAsIcon[contact.type]) return;
    return (
      <a 
        key={`${name}-${contact.type}`}
        className={styles[contact.type.toLowerCase()]} 
        href={contact.link} 
        aria-label={contact.type === 'WEB' ? `Pagina web de ${name}` : `Perfil de ${name} en ${contact.type}`}
      >
        {LinkTypeAsIcon[contact.type]}
      </a>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.teamMemberImage} src={urlPhoto} alt={`Foto de ${name}`} />
      <div className={styles.spaceBetween}>
        <div className={styles.cardInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.bio}>{bio}</p>
        </div>
        <div className={styles.socialMedia}>
          {contacts.map(contact => renderContactLink(contact))}
        </div>
      </div>
    </div>
  )
}