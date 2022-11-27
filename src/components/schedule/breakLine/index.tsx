import styles from "./breakLine.module.css";

type BreakLineProps = {
  title: string,
  startsAt: string,
  endsAt: string
};

export const BreakLine = ({title, startsAt, endsAt}: BreakLineProps) => {

  return (
    <>
    <div className={styles.breakLine}>
      
      <div className={styles.date}>
        <h4>{startsAt}</h4>
        <h4>{endsAt}</h4>
      </div>
      
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    
    </div>
    </>
  );
}
