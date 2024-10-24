import icon from "../../media/icons/Mixer.png";
import styles from "./styles.module.css";

const DividingLine = () => {
  return (
    <div>
      <div className={styles.icons}>
        <div className={styles.left_line}></div>
        <img className={styles.icon + " invert-icons"} src={icon} alt="" />
        <div className={styles.right_line}></div>
      </div>
    </div>
  );
};

export default DividingLine;
