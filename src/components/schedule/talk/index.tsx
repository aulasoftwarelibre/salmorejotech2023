/* eslint-disable @next/next/no-img-element */
import { TalkInterface } from "../../../interfaces/schedule.interfaces";
import styles from "./talk.module.css";

export const Talk = (talk: TalkInterface) => {
  return (
    <>
      <div className={styles.container}>
        <h3>{talk.title}</h3>
        <div className={styles.horizontal}>
          <div className={styles.vertical}>
            <h4>{talk.speaker.name}</h4>
            <div className={styles.labels}>
              {talk.labels.map((label, index) => {
                return <div className={styles[label]} key={index}>{label} </div>;
              })}
            </div>
          </div>
          <img
            className={styles[talk.randomMask]}
            src={talk.speaker.imageUrl}
            alt={talk.speaker.name}
          />
        </div>
      </div>
    </>
  );
};