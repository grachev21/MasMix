import styles from "./styles.module.css";

const ButtonBlue = ({ text }) => {
  return (
    <div className={styles.ButtonBlue}>
      <p className={styles.text}>{text+"xx"}</p>
    </div>
  );
};
export default ButtonBlue;
