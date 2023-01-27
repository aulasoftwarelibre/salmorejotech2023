import React, { Fragment } from 'react'
import { Sponsor, SponsorProps } from '.'
import { AlphabeticalSort } from '../../lib/alphabeticalSort'
import styles from './sponsors.module.css'

interface SponsorsGridProps {
  sponsors: SponsorProps[]
}

export const SponsorsGrid = ({sponsors}: SponsorsGridProps) => {
  
  const sponsorsPera = sponsors.filter(sponsor => sponsor.type === 'PERA').sort((a, b) => AlphabeticalSort(a.name, b.name));
  const sponsorsCherry = sponsors.filter(sponsor => sponsor.type === 'CHERRY').sort((a, b) => AlphabeticalSort(a.name, b.name));
  
  const orderedSponsors = [...sponsorsPera, ...sponsorsCherry];

  return (
    <Fragment>
      <div className={styles.background}>
        <div className={styles.container}>
          {orderedSponsors.map( sponsor => {
            return <Sponsor
              key={`Sponsor ${sponsor.name}`} 
              name={sponsor.name} 
              type={sponsor.type} 
              imageUrl={sponsor.imageUrl}
              href={sponsor.href}
            />
          })}
        </div>
      </div>

    </Fragment>
  )
}