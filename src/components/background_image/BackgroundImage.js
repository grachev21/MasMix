import styles from "./styles.module.css";

const BackgroundImage = ({ image, block}) => {
  return <img className={styles.BackgroundImage} src={image}></img>;
};

export default BackgroundImage;
