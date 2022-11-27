import styles from "./talk.module.css";

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

export const Talk = (talk: Talk) => {
  return (
    <>
      <div className={styles.container}>
        <h3>{talk.title}</h3>
        <div className={styles.horizontal}>
          <div className={styles.vertical}>
            <div className={styles.labels}>
              {talk.labels.map((label, index) => {
                return <div className={styles[label]} key={index}>{label} </div>;
              })}
            </div>
            <h4>{talk.speaker.name}</h4>
          </div>

          <img
            className={styles.img}
            src={talk.speaker.imageUrl}
            alt={talk.speaker.name}
          />
        </div>
      </div>
    </>
  );
};
