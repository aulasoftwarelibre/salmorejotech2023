import styles from "./index.module.css";

export const Break = ({title}: {title: string}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.breakTitle}>{title}</h3>
    </div>
  );
}
