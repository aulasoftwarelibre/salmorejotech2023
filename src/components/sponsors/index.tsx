import React from 'react'
import styles from './sponsors.module.css'


export type PossibleType = "PERA" | "CHERRY"

export interface SponsorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string,
  type: PossibleType,
  imageUrl: string
  href: string,
}

export const Sponsor = ({name, type, imageUrl, ...props}: SponsorProps) => {
  const label = `${name} sponsored with ${type}`
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
      {...props}
    />
  )
}