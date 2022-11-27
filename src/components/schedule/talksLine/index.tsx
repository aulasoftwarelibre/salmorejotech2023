import styles from "./talksLine.module.css";
import Image from "next/image";
import { Talk } from "../talk";

type Talk = {
  id: string;
  title: string;
  info: string;
  startsAt: string;
  endsAt: string;
  labels: Array<string>;
  track: number;
  speaker: SpeakerInfo;
};

type SpeakerInfo = {
  imageUrl: string;
  name: string;
};

type TalksLineProps = {
  talk1: Talk;
  talk2?: Talk;
};

export const TalksLine = ({ talk1, talk2 }: TalksLineProps) => {
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
