import { LabelAsPrimitives } from "../../../contexts/talk/domain/TalkLabel";
import styles from '../styles/index.module.css';

export const Labels = ({labels, talkTitle}: {labels: LabelAsPrimitives[], talkTitle: string}) => {
  return (
    <div className={styles.labels}>
      {labels.map((label) => {
        return <div className={styles.label} style={{backgroundColor: label.color, color: label.textColor}} key={`Label-${label.text}-${talkTitle}`}>{label.text}</div>;
      })}
    </div>
  )    
}
