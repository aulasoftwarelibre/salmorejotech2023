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
  'TWITTER': <BsTwitter/>,
  'WEB': <BsGlobe/>,
  'LINKEDIN': <BsLinkedin/>,
  'GITHUB': <BsGithub/>,
}

export const TeamMemberCard = ({name, bio, urlPhoto, contacts}:  TeamMemberProps) => {

  const renderContactLink = (contact: Contact) => {
    if(!LinkTypeAsIcon[contact.type]) return;
    return (
      <a 
        key={`${name}-${contact.type}`}
        className={styles[contact.type.toLowerCase()]} 
        href={contact.link} 
        aria-label={`${name}'s link for ${contact.type}`}
      >
        {LinkTypeAsIcon[contact.type]}
      </a>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.teamMemberImage} src={urlPhoto} alt="Imagen del ponente" />
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