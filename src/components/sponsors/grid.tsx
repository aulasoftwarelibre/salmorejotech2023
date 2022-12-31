import { hrtime } from 'process'
import React from 'react'
import { PossibleType, Sponsor } from '.'
import styles from './sponsors.module.css'

const LoremSponsors: {name: string, type: PossibleType, imageUrl: string, href: string}[] = [
  {
    name: "Genially",
    type: "PERA",
    imageUrl: "https://raw.githubusercontent.com/aulasoftwarelibre/salmorejotech2022/04c24317a08e1323756351495a1822abaa58ea52/images/sponsors/genially.svg",
    href: "https://genial.ly"
  },
  {
    name: "Audiense",
    type: "PERA",
    imageUrl: "https://raw.githubusercontent.com/aulasoftwarelibre/salmorejotech2022/04c24317a08e1323756351495a1822abaa58ea52/images/sponsors/audiense.svg",
    href: "https://audiense.co"
  },
  {
    name: "Atmira",
    type: "CHERRY",
    imageUrl: "https://raw.githubusercontent.com/aulasoftwarelibre/salmorejotech2022/04c24317a08e1323756351495a1822abaa58ea52/images/sponsors/atmira.svg",
    href:"https://atmira.net"
  }, 
  {
    name: "SNGULAR",
    type: "CHERRY",
    imageUrl: "https://raw.githubusercontent.com/aulasoftwarelibre/salmorejotech2022/04c24317a08e1323756351495a1822abaa58ea52/images/sponsors/SNGULAR.svg", 
    href: "https://sngular.com"
  }
]


export const SponsorsGrid = () => {
  
  const SponsorsMocked = [...LoremSponsors, ...LoremSponsors, ...LoremSponsors, ...LoremSponsors]

  return (
    <>
      <div className={styles.divider1}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
      <div className={styles.background}>
        <div className={styles.container}>
          {SponsorsMocked.map( sponsor => {
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
    </>
  )
}