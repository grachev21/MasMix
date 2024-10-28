import { useEffect, useState } from "react";
import useSound from "use-sound";

import styles from "./styles.module.css";
import ButtonPlayStop from "../button_play_stop/ButtonPlayStop";

const MusicPanel = ({ genre, before, after, onChange, getIndex, value }) => {
  const [isSoundBefore, setIsSoundBefore] = useState(false);
  const [playBefore, { pause: pauseBefore, stop: stopBefore }] = useSound(before);
  const [isSoundAfter, setIsSoundAfter] = useState(false);
  const [playAfter, { pause: pauseAfter, stop: stopAfter }] = useSound(after);

  const handleChange = (event) => {
    onChange((event.target.value = getIndex));
  };

  useEffect(() => {
    if (value != getIndex) {
      stopBefore();
      stopAfter();
      setIsSoundBefore(false);
      setIsSoundAfter(false);
    }
  });

  const track_control = (props) => {
    if (props === "stop") {
      if (isSoundBefore || isSoundAfter) {
        stopBefore();
        stopAfter();
        setIsSoundBefore(false);
        setIsSoundAfter(false);
      } else {
        playBefore();
        setIsSoundBefore(true);
      }
    }
    if (props === "after") {
      if (isSoundAfter) {
        pauseAfter();
        setIsSoundAfter(false);
      } else {
        playAfter();
        pauseBefore();
        setIsSoundBefore(false);
        setIsSoundAfter(true);
      }
    }
    if (props === "before") {
      if (isSoundBefore) {
        pauseBefore();
        setIsSoundBefore(false);
      } else {
        playBefore();
        pauseAfter();
        setIsSoundBefore(true);
        setIsSoundAfter(false);
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
          <ButtonPlayStop type={isSoundAfter || isSoundBefore ? true : false} />
        </div>

        <div className={styles.before_after}>
          <p
            className={isSoundBefore ? styles.play_before : styles.before}
            onClick={(event) => {
              track_control("before");
              handleChange(event);
            }}>
            before
          </p>
          <p
            className={isSoundAfter ? styles.play_after : styles.after}
            onClick={(event) => {
              track_control("after");
              handleChange(event);
            }}>
            after
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPanel;
