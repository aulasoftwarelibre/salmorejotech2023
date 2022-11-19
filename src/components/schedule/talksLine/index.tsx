import styles from "./talksLine.module.css";
import Image from 'next/image';

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
  if (talk2) {
    return <>
    <div className={styles.container}>
    <div className={styles.container}>
      <div className={styles.date}>
        <h4>{talk1.startsAt}</h4>
        <h4>{talk1.endsAt}</h4>
      </div>
      
      <div className={styles.talkInfo}>
        <div>
          <h3>{talk1.title}</h3>
          <h4>{talk1.speaker.name}</h4>
          <div className={styles.labels}>
            {talk1.labels.map((label,index)=>{
              return <div key={index}>{label}</div>
            })}
          </div>
        </div>
        
        <div>
        <Image src={talk1.speaker.imageUrl} width={80} height={80} alt={"Speaker image"} />
        </div>
      </div>

    </div>

    <div className={styles.container}>
      <div className={styles.date}>
        <h4>{talk1.startsAt}</h4>
        <h4>{talk1.endsAt}</h4>
      </div>
      
      <div className={styles.talkInfo}>
        <div>
          <h3>{talk1.title}</h3>
          <h4>{talk1.speaker.name}</h4>
          <div className={styles.labels}>
            {talk1.labels.map((label,index)=>{
              return <div key={index}>{label}</div>
            })}
          </div>
        </div>
        
        <div>
        <Image src={talk1.speaker.imageUrl} width={80} height={80} alt={"Speaker image"} />
        </div>
      </div>

    </div>

</div>
    </>
  }
  return <>
    <div className={styles.container}>

      <div className={styles.date}>
        <h4>{talk1.startsAt}</h4>
        <h4>{talk1.endsAt}</h4>
      </div>
      
      <div className={styles.talkInfo}>
        <div>
          <h3>{talk1.title}</h3>
          <h4>{talk1.speaker.name}</h4>
          <div className={styles.labels}>
            {talk1.labels.map((label,index)=>{
              return <div key={index}>{label}</div>
            })}
          </div>
        </div>
        
        <div>
        <Image src={talk1.speaker.imageUrl} width={80} height={80} alt={"Speaker image"} />
        </div>
      </div>

    </div>
    </>
}