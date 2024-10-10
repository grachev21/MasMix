import { useState } from "react";
import useSound from "use-sound";

import "./styles.css";
import ButtonPlayStop from "../button_play_stop/ButtonPlayStop";

const MusicPanel = ({ genre, before, after, onChange}) => {
  const [isSoundBefore, setIsSoundBefore] = useState("off");
  const [playBefore, { pause: pauseBefore, stop: stopBefore }] = useSound(before);
  const [isSoundAfter, setIsSoundAfter] = useState("off");
  const [playAfter, { pause: pauseAfter, stop: stopAfter }] = useSound(after);

  const handleChange = (event) => {
    onChange((event.target.value = isSoundBefore == "on" || isSoundAfter == "on" ? "on": "off"));
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
    <div className="MusicPanel">
      <div className="top-block">
        <div className="name">{genre}</div>
        <div className="progress-bar"></div>
      </div>
      <div className="bottom-block">
        <div
          onClick={(event) => {
            track_control("stop");
            handleChange(event);
          }}
        >
          <ButtonPlayStop
            type={
              isSoundAfter == "on" || isSoundBefore == "on" ? "play" : "stop"
            }
          />
        </div>

        <div className="before-after">
          <p
            className={"before" + (isSoundBefore == "on" ? " play-before" : "")}
            onClick={() => {
              track_control("before");
            }}
          >
            before
          </p>
          <p
            className={"after" + (isSoundAfter == "on" ? " play-after" : "")}
            onClick={() => {
              track_control("after");
            }}
          >
            after
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPanel;
