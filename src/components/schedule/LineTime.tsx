import { TimestampAsPrimitives } from "../../contexts/shared/domain/Timestamp"
import styles from './index.module.css';


export const LineTime = (timestamp: TimestampAsPrimitives) => {
  return (
    <div className={styles.date}>
      <h4>{timestamp.startsAt}</h4>
      <h4>{timestamp.endsAt}</h4>
    </div>
  )
} 