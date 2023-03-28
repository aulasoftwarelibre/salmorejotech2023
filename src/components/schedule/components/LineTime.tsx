import { TimestampAsPrimitives } from "../../../contexts/shared/domain/Timestamp"
import styles from '../styles/index.module.css';

export const LineTime = (timestamp: TimestampAsPrimitives) => {
  return (
    <div className={styles.date}>
      <span>{timestamp.startsAt}</span>
      <span>{timestamp.endsAt}</span>
    </div>
  )
} 