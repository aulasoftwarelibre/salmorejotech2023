import styles from "./talksLine.module.css";
import Image from 'next/image';


export const TalksLine = (props: { id: string, title: string, info: string, date: string, labels: Array<string>, track: number, imageUrl: string, name: string}) => {
  let hours:string[]=props.date.split(" ");

  return (
    <div className={styles.container}>

      <div className={styles.date}>
        {hours.map((hour,index)=>{
          return <h4 key={index}>{hour}</h4>
        })}
      </div>
      
      <div className={styles.talkInfo}>
        <div>
          <h3>{props.title}</h3>
          <h4>{props.name}</h4>
          <div className={styles.labels}>
            {props.labels.map((hour,index)=>{
              return <div key={index}>{hour}</div>
            })}
          </div>
        </div>
        
        <div>
        <Image src="https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg" width={150} height={150} alt={"Speaker image"} />
        </div>
      </div>

    </div>
  );
};
