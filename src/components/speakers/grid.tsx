import { SpeakerCard, SpeakerProps } from ".";
import styles from './speakers.module.css';

interface SpeakersGridProps {
  speakers: SpeakerProps[]
}

const SpeakersGrid = ({speakers}: SpeakersGridProps) => {

  return (
    <div className={styles.container}>
      {speakers.map(speaker => {
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