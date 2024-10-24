import styles from "./styles.module.css";
import back from "../../media/icons/back_3710800.png";
import { useState, useEffect } from "react";

const ButtonGreen = () => {
  const [green, setGreen] = useState("off");

  useEffect(() => {
    if (green === "on") {
      document.querySelector("." + styles.next).classList.add(styles.shift);
    }
    if (green === "off") {
      document.querySelector("." + styles.next).classList.remove(styles.shift);
    }
  }, [green]);

  const onMous = () => {
    setGreen("on");
  };

  const offMous = () => {
    setGreen("off");
  };

  return (
    <div className={styles.ButtonGreen} onMouseEnter={onMous} onMouseLeave={offMous}>
      <img className={styles.next} src={back} />
      <p className={styles.text}>Создать заказ</p>
    </div>
  );
};

export default ButtonGreen;
