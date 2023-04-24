import React from 'react'
import styles from './sponsors.module.css'


export type PossibleType = "PERA" | "CHERRY"

export interface SponsorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string,
  type: PossibleType,
  imageUrl: string
  href: string,
}

export const Sponsor = ({name, type, imageUrl, href, ...props}: SponsorProps) => {
  const label = `Logo de ${name}, click para ir a su web!`
  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  }
  const classes = styles.sponsor
  return (
    <a
      id={`Sponsor ${name}`}
      style={backgroundImage}
      className={classes}
      aria-label={label} 
      href={href !== '' ? href : undefined}
      rel="noreferrer" target="_blank"
      {...props}
    />
  )
}