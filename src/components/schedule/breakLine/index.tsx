import styles from "./breakLine.module.css";

export const BreakLine = (props: { title: string, date:string }) => {
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
