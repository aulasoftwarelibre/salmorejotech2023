import { SpeakerCard, SpeakerProps } from ".";
import { AlphabeticalSort } from "../../lib/alphabeticalSort";
import styles from './speakers.module.css';

interface SpeakersGridProps {
  speakers: SpeakerProps[]
}

//<SpeakerCard
//  key={4534634}
//  name={"Juanjo"}
//  bio={"El de las vistas"}
//  urlPhoto={"https://salmorejo.tech/2022/images/speakers/eduSatoe.jpg"}
//  contacts={[]}
///>

const SpeakersGrid = ({speakers}: SpeakersGridProps) => {

  const orderedSpeakers = speakers.sort((a, b) => AlphabeticalSort(a.name, b.name))

  return (
    <div className={styles.container}>
      {orderedSpeakers.map(speaker => {
        return (
          <SpeakerCard 
            key={`speaker - ${speaker.name}`} 
            name={speaker.name}
            bio={speaker.bio}
            urlPhoto={speaker.urlPhoto}
            contacts={speaker.contacts}
          />
        )
      })}
    </div>
  )
}

export default SpeakersGrid;