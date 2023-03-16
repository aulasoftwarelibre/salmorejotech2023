import styles from "../styles/index.module.css";
import { Talk, TalkParameters } from "./Talk";
import { LineTime } from "./LineTime";
import { BreakAsPrimitives } from "../../../contexts/break/domain/Break";
import { Break } from "./Break";
import { TimestampAsPrimitives } from "../../../contexts/shared/domain/Timestamp";

export const SingleTalkLine = ({talk}: {talk: TalkParameters}) => {
  return (
    <div className={styles.scheduleLine}>
      {LineTime(talk.timestamp)}
      <Talk {...talk} />
    </div>
  )
}

export const DualTalkLine = ({ timestamp, primaryTalk, secondaryTalk }: {timestamp: TimestampAsPrimitives,primaryTalk: TalkParameters, secondaryTalk: TalkParameters}) => {  
  return (
    <div className={styles.scheduleLine}>
      {LineTime(timestamp)}
      <Talk {...primaryTalk} />
      <Talk {...secondaryTalk} />
    </div>
  );
};

export const BreakLine = ({title, timestamp}: BreakAsPrimitives) => {
  return (
    <div className={styles.scheduleLine}>
      {LineTime(timestamp)}
      <Break title={title}/>
    </div>
  );
}
