/* eslint-disable @next/next/no-img-element */
import { TalkAsPrimitives } from "../../../contexts/talk/domain/Talk";
import styles from "../styles/index.module.css";
import { Labels } from "./Labels";

export type TalkParameters = TalkAsPrimitives & {mask:  string}

export const Talk = (talk: TalkParameters) => {

  return (
    <div className={styles.container}>
      <span className={styles.talkTitle}>{talk.title}</span>
      <div className={styles.horizontal}>
        <div className={styles.vertical}>
          <span className={styles.speakerName}>{talk.speakerInfo.name}</span>
          <Labels labels={talk.labels} talkTitle={talk.title}/>
        </div>
        <img
          className={`${styles[talk.mask]} ${styles.speakerImage}`}
          src={talk.speakerInfo.imageUrl}
          alt={`Imagen de ${talk.speakerInfo.name}`}
        />
      </div>
    </div>
  );
};
