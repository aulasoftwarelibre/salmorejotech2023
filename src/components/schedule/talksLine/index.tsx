import styles from "./talksLine.module.css";

export const TalksLine = (props: { id: string, title: string, info: string, date: string, labels: Array<string>, isBreak: boolean, track: number, imageUrl: string, name: string}) => {
  let hours:string[]=props.date.split(" ");

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {hours.map((hour,index)=>{
          return <h4 key={index}>{hour}</h4>
        })}
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};
