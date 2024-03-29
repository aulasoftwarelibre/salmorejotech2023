import styles from "../styles/index.module.css";

export const Break = ({title}: {title: string}) => {
  return (
    <div className={styles.breakContainer}>
      <h3 className={styles.breakTitle}>{title}</h3>
    </div>
  );
}
