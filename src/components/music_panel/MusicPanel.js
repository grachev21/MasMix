import { useState } from "react";
import useSound from "use-sound";

import "./styles.css";
import playIcon from "../../media/icons/play_16786783.png";
import track_before from "../../media/audio/before.mp3";
import track_after from "../../media/audio/after.mp3";

const MusicPanel = () => {
  const [isSoundBefore, setIsSoundBefore] = useState("off");
  const [playBefore, { pause: pauseBefore, stop: stopBefore }] = useSound(track_before);

  const [isSoundAfter, setIsSoundAfter] = useState("off");
  const [playAfter, { pause: pauseAfter, stop: stopAfter }] = useSound(track_after);

  console.log("********************************************************************************")
  console.log(isSoundAfter, "after");
  console.log(isSoundBefore, "before");

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
        <div className="name">rock</div>
        <div className="progress-bpar"></div>
      </div>
      <div className="bottom-block">
        <img
          className="icon-play"
          key="1"
          src={playIcon}
          onClick={() => {
            track_control("stop");
          }}
        />
        <div className="before-after">
          <p className="before" onClick={() => { track_control("before"); }}>before</p>
          <p className="after" onClick={() => { track_control("after"); }}>after</p>
        </div>
      </div>
    </div>
  );
};

export default MusicPanel;
