/* eslint-disable @next/next/no-img-element */
import { TalkAsPrimitives } from "../../../contexts/talk/domain/Talk";
import styles from "../styles/index.module.css";
import { Labels } from "./Labels";

export type TalkParameters = TalkAsPrimitives & {mask:  string}

export const Talk = (talk: TalkParameters) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.talkTitle}>{talk.title}</h3>
      <div className={styles.horizontal}>
        <div className={styles.vertical}>
          <h4 className={styles.speakerName}>{talk.speakerInfo.name}</h4>
          <Labels labels={talk.labels} talkTitle={talk.title}/>
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
