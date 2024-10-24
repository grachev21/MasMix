import { useState } from "react";
import useSound from "use-sound";

import styles from "./styles.module.css";
import ButtonPlayStop from "../button_play_stop/ButtonPlayStop";

const MusicPanel = ({ genre, before, after, onChange, getIndex, value }) => {
  const [isSoundBefore, setIsSoundBefore] = useState("off");
  const [playBefore, { pause: pauseBefore, stop: stopBefore }] = useSound(before);
  const [isSoundAfter, setIsSoundAfter] = useState("off");
  const [playAfter, { pause: pauseAfter, stop: stopAfter }] = useSound(after);

  const handleChange = (event) => {
    // onChange((event.target.value = isSoundBefore == "on" || isSoundAfter == "on" ? "on" : "off"));
    onChange((event.target.value = getIndex));
  };

  const track_control = (props) => {
    if (props === "stop") {
      if (isSoundBefore === "on" || isSoundAfter === "on") {
        stopBefore();
        stopAfter();
        setIsSoundBefore("off");
        setIsSoundAfter("off");
      } else {
        playBefore();
        setIsSoundBefore("on");
      }
    }

    if (props === "after") {
      if (isSoundAfter === "on") {
        pauseAfter();
        setIsSoundAfter("off");
      } else {
        playAfter();
        pauseBefore();
        setIsSoundBefore("off");
        setIsSoundAfter("on");
      }
    }

    if (props === "before") {
      if (isSoundBefore === "on") {
        pauseBefore();
        setIsSoundBefore("off");
      } else {
        playBefore();
        pauseAfter();
        setIsSoundBefore("on");
        setIsSoundAfter("off");
      }
    }
  };

  return (
    <div className={styles.MusicPanel}>
      <div className={styles.top_block}>
        <div className={styles.name}>{genre}</div>
        <div className="progress-bar"></div>
      </div>
      <div className={styles.bottom_block}>
        <div
          onClick={(event) => {
            track_control("stop");
            handleChange(event);
          }}>
          <ButtonPlayStop type={isSoundAfter == "on" || isSoundBefore == "on" ? true : false} />
        </div>

        <div className={styles.before_after}>
          <p
            className={isSoundBefore == "on" ? styles.play_before : styles.before}
            onClick={(event) => {
              track_control("before");
              handleChange(event);
            }}>
            before
          </p>
          <p
            className={isSoundAfter == "on" ? styles.play_after : styles.after}
            onClick={(event) => {
              track_control("after");
              handleChange(event);
            }}>
            after
          </p>
        </div>
      </div>
      <h1>
        value={value}getIndex{getIndex}
      </h1>
    </div>
  );
};

export default MusicPanel;
