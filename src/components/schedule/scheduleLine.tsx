import styles from "./index.module.css";
import { Talk, TalkParameters } from "./talk";
import { LineTime } from "./LineTime";
import { BreakAsPrimitives } from "../../contexts/break/domain/Break";
import { Break } from "./Break";

export const SingleTalkLine = (talk: TalkParameters) => {
  return (
    <div className={styles.scheduleLine}>
      {LineTime(talk.timestamp)}
      <Talk {...talk} />
    </div>
  )
}

export const DualTalkLine = ({ primaryTalk, secondaryTalk }: {primaryTalk: TalkParameters, secondaryTalk: TalkParameters}) => {  
  return (
    <div className={styles.scheduleLine}>
      {LineTime(primaryTalk.timestamp)}
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
