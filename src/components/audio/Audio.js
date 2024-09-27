import "./styles.css";
import audio from "../../media/audio/09. First Transformation.mp3";
import { useEffect, useState } from "react";
import useSound from "use-sound"; //для работы со звуком


function Audio() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);


  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };


  return (
    <div className="Audio">
      <div className="component">
        <h2>Playing Now</h2>
        <img
          className="musicCover"
          src="https://picsum.photos/200/200"
        />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
        <div>
          <button className="playButton">
            play
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              play
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              play
            </button>
          )}
          <button className="playButton">
            play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Audio;
