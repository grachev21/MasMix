import styles from "./styles.module.css";

const ButtonPlayStop = ({ type }) => {
  return (
    <div className={styles.ButtonPlayStop}>
      <div className={type ? styles.stop : styles.play}></div>
    </div>
  );
};

export default ButtonPlayStop;
