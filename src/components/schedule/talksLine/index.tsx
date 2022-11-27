import styles from "./talksLine.module.css";
import {TalksLinePropsInterface } from '../../../interfaces/schedule.interfaces';
import { Talk } from "../talk";


export const TalksLine = ({ talk1, talk2 }: TalksLinePropsInterface) => {
  return (
    <>
      <div className={styles.talkLine}>
        <div className={styles.date}>
          <h4>{talk1.startsAt}</h4>
          <h4>{talk1.endsAt}</h4>
        </div>

        <Talk {...talk1} />

        {talk2 && (
          <Talk {...talk2} />
        )}
        
      </div>
    </>
  );

};
