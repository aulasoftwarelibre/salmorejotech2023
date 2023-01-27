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
      <div className={styles.divider1}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
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
      <div className={styles.divider2}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </Fragment>
  )
}