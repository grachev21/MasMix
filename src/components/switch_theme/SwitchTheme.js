import { useState, useEffect, useRef } from "react";
import useSound from "use-sound";
import invertIcons from "./Invert_no_invert";
import day from "../../media/icons/day.png";
import night from "../../media/icons/night.png";
import styles from "./styles.module.css";
import switchSound from "../../media/audio/knopka-klik-chetkii-blizkii-suhoi-spokoinyii.mp3";

const SwitchTheme = () => {
  const [play] = useSound(switchSound);

  const [Dark, setDark] = useState("light");

  const btnRef = useRef(null);

  useEffect(() => {
    if (Dark === "dark") {
      document.querySelector("html").classList.add("dark");
      btnRef.current.classList.add(styles.ball_white);
    } else {
      document.querySelector("html").classList.remove("dark");
      btnRef.current.classList.remove(styles.ball_white);
    }
  }, [Dark]);

  const switchDayNight = () => {
    play();
    setDark(function (currentValue) {
      if (currentValue == "light") {
        invertIcons("dark");
        return "dark";
      } else {
        invertIcons("light");
        return "light";
      }
    });
  };

  return (
    <button className={styles.SwitchTheme} onClick={switchDayNight}>
      <img className={styles.icons_day + " dont-invert-icons"} src={day} />
      <img className={styles.icons_night + " dont-invert-icons"} src={night} />
      <div ref={btnRef} className={styles.ball}></div>
    </button>
  );
};

export default SwitchTheme;
