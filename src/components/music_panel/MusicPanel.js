import { useEffect, useState } from "react";
import useSound from "use-sound";

import "./styles.css";
import playIcon from "../../media/icons/play_16786783.png";
import { BiVolumeMute } from "react-icons/bi";
import { BsVolumeMute } from "react-icons/bs";
import track_before from "../../media/audio/before.mp3";
import track_after from "../../media/audio/after.mp3";

const MusicPanel = () => {
  const [isSoundBefore, setIsSoundBefore] = useState(false);
  const [isSoundHover, setIsSoundHover] = useState(false);

  const [playBefore, { pause: pauseBefore }] = useSound(track_before);
  const [playAfter, { pause: pauseAfter }] = useSound(track_after);

  return (
    <div className="MusicPanel">
      <div className="top-block">
        <div className="name">rock</div>
        <div className="progress-bpar"></div>
      </div>
      <div className="bottom-block">
        <img
          className="icon-play"
          src={playIcon}
          onMouseEnter={() => {
            setIsSoundBefore(true);
            playBefore();
          }}
          onMouseLeave={() => {
            setIsSoundBefore(false);
            pauseBefore();
          }}
        />
        <div className="before-after">
          <p className="before" onClick={() => {}}>
            before
          </p>
          <p className="after" onClick={() => {}}>
            after
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPanel;
