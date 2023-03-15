/* eslint-disable @next/next/no-img-element */
import { TalkAsPrimitives } from "../../contexts/talk/domain/Talk";
import styles from "./index.module.css";


export type TalkParameters = TalkAsPrimitives & {mask:  string}


export const Talk = (talk: TalkParameters) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.talkTitle}>{talk.title}</h3>
      <div className={styles.horizontal}>
        <div className={styles.vertical}>
          <h4 className={styles.speakerName}>{talk.speakerInfo.name}</h4>
          <div className={styles.labels}>
            {talk.labels.map((label, index) => {
              return <div className={styles.label} style={{backgroundColor: label.color}} key={index}>{label.text}</div>;
            })}
          </div>
        </div>
        <img
          className={`${styles[talk.mask]} ${styles.speakerImage}`}
          src={talk.speakerInfo.imageUrl}
          alt={talk.speakerInfo.name}
        />
      </div>
    </div>
  );
};
